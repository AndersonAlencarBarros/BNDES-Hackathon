from django.urls import path
from .views.chatbot import *


urlpatterns = [
    path('test/', ChatBot.as_view(), name='Test'),     
]