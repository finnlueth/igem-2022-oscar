from operator import index
from django.urls import path, re_path
from .views import index

urlpatterns = [ 
    path('', index),
    path('submit/', index),
    path('browse/', index),
    path('changes/', index),
    path('about/', index),
    path('documentation/', index),
    path('db/<int:car_id_code>', index)
]