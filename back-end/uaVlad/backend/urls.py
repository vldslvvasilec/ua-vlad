from django.urls import path
from .views import UserInformationCreate

urlpatterns = [
    path('api/user-information/', UserInformationCreate.as_view(), name='user-information-create'),
]
