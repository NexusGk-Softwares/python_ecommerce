from django import forms
from django.core import validators
import re

class UserForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
   
class SigninForm(forms.Form):
    name = forms.CharField(max_length=20)
    email = forms.EmailField(max_length=20)
    Password = forms.CharField(widget=forms.PasswordInput())
    Mobile_No = forms.IntegerField()
    Select_gender = forms.ChoiceField(choices=[('Male', 'Male'), ('Female', 'Female')])
    Date_of_birth = forms.DateField()