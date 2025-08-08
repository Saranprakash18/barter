from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page,name='landing'),
    path('login/', views.login_view,name='login'),
    path('signup/', views.signup_view,name='signup'),
    path('home/', views.home_page,name='home'),
]
