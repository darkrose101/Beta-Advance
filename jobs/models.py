from django.db import models
from users.models import CustomUser, Youth, Corporation

class Job(models.Model):
    STATUS_CHOICES = (
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    )
    
    corporation = models.ForeignKey(Corporation, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    requirements = models.JSONField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')

class Application(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    )
    
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    youth = models.ForeignKey(Youth, on_delete=models.CASCADE)
    proposal = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    submitted_at = models.DateTimeField(auto_now_add=True)

class Review(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    youth = models.ForeignKey(Youth, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    quality_score = models.IntegerField()
    communication_score = models.IntegerField()
    timeliness_score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)