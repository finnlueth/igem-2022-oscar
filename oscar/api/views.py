from os import stat
from urllib import response
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

from .serializers import CarSerializer, CreateCarSerializer, DebugSerializer, CreateDebugSerializer
from .models import Car, DebugTable

def mainView(request):
    return HttpResponse("""
    Hey there, this is the api.<br/>
    If you would like to learn more check out our documentation: oscar.org\documentation.
    """)

class AllCarView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CreateCarView(APIView):
    serializer_class = CreateCarSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            name = serializer.data.get('name')
            car_id = serializer.data.get('car_id')
            car_functionality = serializer.data.get('car_functionality')
            linker = serializer.data.get('linker')
            tmpart = serializer.data.get('tmpart')
            receptor = serializer.data.get('receptor')
            izpart = serializer.data.get('izpart')
            user = serializer.data.get('user')
            created_on = serializer.data.get('created_on')
            last_update = serializer.data.get('last_update')

            car = Car(name=name, car_id=car_id, car_functionality=car_functionality, linker=linker, tmpart=tmpart, receptor=receptor, izpart=izpart, user=user, created_on=created_on, last_update=last_update)
            car.save()
            return Response(CarSerializer(car.data), status=status.HTTP_201_CREATED) 
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class AllDebugView(generics.ListAPIView):
    queryset = DebugTable.objects.all()
    serializer_class = DebugSerializer

class CreateDebugView(generics.ListAPIView):
    queryset = DebugTable.objects.filter()
    serializer_class = CreateDebugSerializer

    def post(self, request, format=None):
        serializer = CreateDebugSerializer(data=request.data)
        if serializer.is_valid():
            debug_1 = serializer.data.get('debug_1')
            debug_2 = serializer.data.get('debug_2')
            debugtable = DebugTable(debug_1=debug_1, debug_2=debug_2)
            debugtable.save()
            return Response(CreateDebugSerializer(debugtable).data, status=status.HTTP_200_OK)

        return Response({f"""Bad Request': 'Invalid data...{debug_1}, {debug_2}"""}, status=status.HTTP_400_BAD_REQUEST)


