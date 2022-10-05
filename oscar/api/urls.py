from django.urls import path
from .views import AllCarView, CreateCarView, AllDebugView, CreateDebugView
from .views import mainView

urlpatterns = [
    path('create-car/', CreateCarView.as_view()),
    path('all-cars/', AllCarView.as_view()),
    path('debug/get', AllDebugView.as_view()),
    path('debug/post', CreateDebugView.as_view()),
    path('', mainView)
]