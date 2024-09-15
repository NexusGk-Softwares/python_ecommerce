from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.FileField(upload_to="pictures/",max_length=30, null=True, default=True)
    title  = models.CharField(max_length=30)
    price = models.CharField(max_length=30)

# models for login page
class user(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

# models for registration page
class signin(models.Model):
    Name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    Password = models.CharField(max_length=20)
    Mobile_No = models.CharField(max_length=20)
    Select_gender = models.CharField(
        choices=[('Male', 'Male'), ('Female', 'Female')],max_length=20)
    Date_of_birth = models.DateField()