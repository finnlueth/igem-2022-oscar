from urllib import response
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

from .serializers import CarSerializer, CreateCarSerializer,\
    PaperSerializer, CreatePaperSerializer,\
    SequenceSerializer, CreateSequenceSerializer,\
    TmpartSerializer, CreateTmpartSerializer
from .models import Car, Paper, Sequence, Tmpart

def mainView(request):
    return HttpResponse("""
    Hey there, this is the api.<br/>
    If you would like to learn more check out our documentation: oscar.org\documentation.
    """)

class CarView(APIView):
    def get(self, request, id=None, format=None):
        if id:
            cars = Car.objects.get(car_id=id)
            serializer = CarSerializer(cars)
        else:
            cars = Car.objects.all()
            serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    def post(self, request, id=None, format=None):
        serializer = CreateCarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PaperView(APIView):
    def get(self, request, id=None, format=None):
        if id:
            papers = Paper.objects.get(paper_id=id)
            serializer = PaperSerializer(papers)
        else:
            papers = Paper.objects.all()
            serializer = PaperSerializer(papers, many=True)
        return Response(serializer.data)
    
    def post(self, request, id=None, format=None):
        serializer = CreatePaperSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SequenceView(APIView):
    def get(self, request, id=None, format=None):
        if id:
            sequences = Sequence.objects.get(seq_id=id)
            serializer = SequenceSerializer(sequences)
        else:
            sequences = Sequence.objects.all()
            serializer = SequenceSerializer(sequences, many=True)
        return Response(serializer.data)
    
    def post(self, request, id=None, format=None):
        serializer = CreateSequenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TmpartView(APIView):
    def get(self, request, id=None, format=None):
        if id:
            tmparts = Tmpart.objects.get(tmpart_id=id)
            serializer = TmpartSerializer(tmparts)
        else:
            tmparts = Tmpart.objects.all()
            serializer = TmpartSerializer(tmparts, many=True)
        return Response(serializer.data)

    def post(self, request, id=None, format=None):
        serializer = CreateTmpartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)