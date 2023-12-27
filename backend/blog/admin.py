from django.contrib import admin

from .models import BlogPost

# Register your models here.


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ["title", "article", "date_created", "date_updated"]


admin.site.register(BlogPost, BlogPostAdmin)
