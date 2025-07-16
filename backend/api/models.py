# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('client', 'Client'),
        ('worker', 'Worker'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class Service(models.Model):
    worker = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    location = models.CharField(max_length=100)

class Booking(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_bookings')
    worker = models.ForeignKey(User, on_delete=models.CASCADE, related_name='worker_bookings')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    status = models.CharField(default="pending", max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

class Review(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()