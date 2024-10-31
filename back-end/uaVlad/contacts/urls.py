from django.urls import path
from .views import ContactsCreateView

urlpatterns = [
    path('contacts/', ContactsCreateView.as_view(), name='contacts-create'),
]
