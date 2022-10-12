from rest_framework import serializers
from .models import Car, Paper, Sequence, Tmpart

# ------- Get All Serializer -------
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('name','car_id','car_functionality',\
            'linker', 'tmpart', 'receptor', 'izpart', 'user', 'created_on', 'last_update')

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paper
        fields = ('paper_id','doi','title', 'journal', 'authors', 'published_date')

class SequenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sequence
        fields = (
            'seq_id','seq_length','seq_sequence', 'seq_annotation'
            )

class TmpartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tmpart
        fields = (
            'tmpart_id','seq','paper', 'function'
            )
                  
# ------- Create Serializer -------
class CreateCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = (
            'name', 'car_functionality', 'linker', 'tmpart', 'receptor', 'izpart', 'user', 'created_on', 'last_update'
        )

class CreatePaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paper
        fields = (
            'paper_id','doi','title', 'journal', 'authors', 'published_date'
            )

class CreateSequenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sequence
        fields = (
            'seq_length','seq_sequence', 'seq_annotation'
            )

class CreateTmpartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tmpart
        fields = (
            'seq','paper', 'function'
            )