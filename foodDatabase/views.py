from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import fooditem


# Create your views here.

class fooditemView(APIView):
    serializer_class = TodoSerializer

    def get(self, request):
        detail = [{"Class": detail.name, "Type": detail.Type,"Group": detail.Group,"Food": detail.Food,"Food": detail.Allergy}
                  for detail in React.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
