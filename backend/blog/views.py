from typing import List

from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import BlogPost
from .serializers import BlogPostSerializer

# Create your views here.


class BlogPostView(APIView):
    def get(self, request, blog_post_id: str | None = None):
        data: BlogPost | List[BlogPost] = None
        serializer: BlogPostSerializer = None
        if blog_post_id:
            data = get_object_or_404(BlogPost, id=blog_post_id)
            data = BlogPost.objects.get(id=blog_post_id)
            serializer = BlogPostSerializer(data)
        else:
            data = BlogPost.objects.all()
            serializer = BlogPostSerializer(data, many=True)
        return Response(serializer.data)
