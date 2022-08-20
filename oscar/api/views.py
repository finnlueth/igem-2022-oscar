from django.shortcuts import render
from rest_framework import generics
from .serializers import EntrySerializer
from .models import Entry

from django.http import HttpResponse

# class EntryView(generics.CreateAPIView):
class EntryView(generics.ListAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

def main(request):
    return HttpResponse("Hello this is the api")