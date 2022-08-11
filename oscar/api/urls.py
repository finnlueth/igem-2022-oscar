from django.urls import path
from .views import EntryView, main

urlpatterns = [
    path('home', EntryView.as_view()),
    path('main', main),
    # path('<int:year>/', year),
]