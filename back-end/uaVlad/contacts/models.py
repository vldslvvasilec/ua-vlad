from django.db import models

class Contacts(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=254, blank=False)
    message = models.TextField(blank=False)
    lang = models.CharField(max_length=2, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} at {self.created_at}'