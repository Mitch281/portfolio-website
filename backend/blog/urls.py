app_name = "blog"

from django.urls import path

from .views import BlogPostView

urlpatterns = [path("blogs", BlogPostView.as_view(), name="Blog post view")]
