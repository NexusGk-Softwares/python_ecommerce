from django.shortcuts import render
from .forms import UserForm
from .forms import SigninForm
from .models import *

# Create your views here.
def home(request):
    my_products = Product.objects.all()
    return render(request, 'index.html',{'my_products':my_products})

# views login page
def users(request):
    if request.method == 'POST':
        myform = UserForm(request.POST)
        if myform.is_valid():
            username = myform.cleaned_data['username']
            password = myform.cleaned_data['password']

            #instance and save the form data
            user = users(username=username, password=password)
            user.save()
            return render(request, 'index.html', {'form': myform})
        else:
            return render(request, 'login.html', {'form': myform})
    else:
        myform = UserForm()
        return render(request, 'login.html', {'form': myform})

def index(request):
    return render(request, 'index.html')

# views signin page
def signins(request):
    if request.method == 'POST':
        myform = SigninForm(request.POST)
        if myform.is_valid():
            Name = myform.cleaned_data['name']
            email = myform.cleaned_data['email']
            Password = myform.cleaned_data['password']
            Mobile_No = myform.cleaned_data['mobile_no']
            Select_gender = myform.cleaned_data['gender']
            Date_of_birth = myform.cleaned_data['date_of_birth']

            #instance and save the form data
            signin = signins(name=Name, email=email, password=Password, mobile_no=Mobile_No, gender=Select_gender, date_of_birth=Date_of_birth)
            signin.save()
            return render(request, 'signin.html', {'form': myform}) 
        else:
            return render(request, 'signin.html', {'form': myform})         
    else:
        myform = SigninForm()
        return render(request, 'signin.html', {'form': myform})
    


def signin(request):
    return render(request, 'signin.html')
