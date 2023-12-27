from rest_framework.response import Response
from rest_framework.views import APIView

from .models import BlogPost
from .serializers import BlogPostSerializer

# Create your views here.


class BlogPostView(APIView):
    def get(self, request):
        all_blogs = BlogPost.objects.all()
        serializer = BlogPostSerializer(all_blogs, many=True)
        return Response(serializer.data)
