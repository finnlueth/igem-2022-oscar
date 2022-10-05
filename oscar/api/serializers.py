from rest_framework import serializers
from .models import Car, DebugTable

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('name', 'car_id','car_functionality',\
            'linker', 'tmpart', 'receptor', 'izpart', 'user', 'created_on', 'last_update')
        
class CreateCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = [
            'name',
            'car_functionality',
            'linker',
            'tmpart',
            'receptor',
            'izpart',
            'user',
            'created_on',
            'last_update'
        ]

class DebugSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebugTable
        fields = ('id', 'debug_1', 'debug_2')

class CreateDebugSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebugTable
        fields = ('debug_1', 'debug_2')