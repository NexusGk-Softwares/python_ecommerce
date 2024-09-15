from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *
from . import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('home/', home),
    path('users/',users),
    path('index/', index),
    path('signins/', signins),
    path('signin/', views.signin, name='signin'),
    path('index.html', views.index, name='index'),

   
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)