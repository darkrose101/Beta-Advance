from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        ('youth', 'Youth'),
        ('corporation', 'Corporation'),
        ('admin', 'Admin'),
    )
    
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    phone_number = models.CharField(max_length=15, blank=True)
    verified = models.BooleanField(default=False)

class Youth(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    skills = models.JSONField(default=list)
    education = models.TextField()
    experience = models.JSONField(default=list)
    resume = models.FileField(upload_to='resumes/', blank=True)

class Corporation(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    registration_number = models.CharField(max_length=50, unique=True)
    industry = models.CharField(max_length=100)
    description = models.TextField()
    verification_documents = models.FileField(upload_to='verification/', blank=True)