from django.contrib import admin
from django.urls import path
from foodDatabase import views

urlpatterns = [
    path('admin/', admin.site.urls),
]
