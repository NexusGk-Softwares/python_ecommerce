from django.contrib import admin
from .models import *
from .models import signin

# Register your models here.
class adminproduct(admin.ModelAdmin):
    list_display = ('image', 'title', 'price')
admin.site.register(Product, adminproduct)

# models for login 
class userAdmin(admin.ModelAdmin):
    list_display = ('username','password')

admin.site.register(user,userAdmin)

# models for signin
class signinAdmin(admin.ModelAdmin):
    list_display = ('Name','email','Password','Mobile_No','Select_gender','Date_of_birth')

admin.site.register(signin,signinAdmin)
