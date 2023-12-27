from django.db import models

# Create your models here.


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    article = models.TextField()
    date_created = models.DateTimeField(auto_now=False, auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True, auto_now_add=False)
