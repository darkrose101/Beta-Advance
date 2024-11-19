from django.db import models
from users.models import CustomUser

class ChatRoom(models.Model):
    participants = models.ManyToManyField(CustomUser)
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)