from django.db import models


class User(models.Model):
    """
    Entity for to store app users.
    """
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email
