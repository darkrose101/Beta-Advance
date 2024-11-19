from django.db import models
from jobs.models import Job
from users.models import CustomUser

class Escrow(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('funded', 'Funded'),
        ('released', 'Released'),
        ('refunded', 'Refunded'),
    )
    
    job = models.OneToOneField(Job, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    funded_at = models.DateTimeField(null=True, blank=True)
    released_at = models.DateTimeField(null=True, blank=True)

class Transaction(models.Model):
    TYPE_CHOICES = (
        ('deposit', 'Deposit'),
        ('release', 'Release'),
        ('refund', 'Refund'),
    )
    
    escrow = models.ForeignKey(Escrow, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    reference = models.CharField(max_length=100, unique=True)