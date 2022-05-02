from rest_framework import serializers
from .models import fooditem


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = fooditem
        fields = ('Class', 'Type', 'Group', 'Food', 'Allergy')
