from django.urls import path
from .views.start import *

urlpatterns = [
    path('test/', Test.as_view(), name='Test'),     
]