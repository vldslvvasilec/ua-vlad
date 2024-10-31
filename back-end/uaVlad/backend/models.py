from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import uuid
from django.db import models

class UserInformation(models.Model):
    ip_address = models.CharField(max_length=45)
    browser_language = models.CharField(max_length=10)
    user_agent = models.TextField()
    platform = models.CharField(max_length=255)
    unique_identifier = models.CharField(max_length=255, unique=True, default=uuid.uuid4)

    def __str__(self):
        return f'IP: {self.ip_address}, LANG: {self.browser_language}'
    
class Session(models.Model):
    user_info = models.ForeignKey(UserInformation, related_name="sessions", on_delete=models.CASCADE)
    session_date_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Session for {self.user_info} at {self.session_date_time}'


class PortfolioItem(models.Model):
    title = models.CharField(max_length=255, blank=False)
    image_url = models.URLField(blank=False)
    link = models.URLField(blank=False)
    author = models.CharField(max_length=100, blank=False)
    priority = models.IntegerField(
        validators= [
            MinValueValidator(1),
            MaxValueValidator(20)
        ],
        blank=False
    )
    rating = models.IntegerField(
        validators= [
            MinValueValidator(1),
            MaxValueValidator(5)
        ],
        blank=False
    )
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class TeamUser(models.Model):
    userName = models.CharField(max_length=255)
    userJob = models.CharField(max_length=255)
    userSkills = models.TextField()
    userFoto = models.ImageField(upload_to='team_photos/', blank=True, null=True)
    userWhatsApp = models.CharField(max_length=50, blank=True, null=True)
    userTelegram = models.CharField(max_length=50, blank=True, null=True)
    userEmail = models.EmailField()
    userLinkedIn = models.CharField(max_length=100, blank=True, null=True)
    userFB = models.CharField(max_length=100, blank=True, null=True)
    userInst = models.CharField(max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.userName


class Comment(models.Model):
    text = models.TextField(blank=False)
    author = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=254, blank=False)
    lang = models.CharField(max_length=2, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    priority = models.IntegerField(
        validators= [
            MinValueValidator(1),
            MaxValueValidator(20)
        ],
        blank=False
    )
    rating = models.IntegerField(
        validators= [
            MinValueValidator(1),
            MaxValueValidator(5)
        ],
        blank=False
    )
    active = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.author} at {self.created_at}'
