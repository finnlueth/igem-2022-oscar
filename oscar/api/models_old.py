from django.db import models
import string, random


# def genID():
#     length = 16

#     while True:
#         code = ''.join(random.choices(string.ascii_lowercase, k=length))
#         if Entry.objects.filter(code = code).count() == 0:
#             break; 
#     return code
             

# # Models

# class Entry(models.Model):
#     name = models.CharField(max_length=64, default="", unique=True)
#     date_creation = models.TimeField(auto_now_add=True)
#     sequence = models.CharField(max_length=1024, default="")