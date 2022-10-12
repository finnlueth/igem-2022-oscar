from django.urls import path
from .views import CarView, PaperView, SequenceView, TmpartView
from .views import mainView

urlpatterns = [
    path('', mainView),
    path('cars/', CarView.as_view()),
    path('cars/<int:id>/', CarView.as_view()),
    path('papers/', PaperView.as_view()),
    path('papers/<int:id>/', PaperView.as_view()),
    path('sequences/', SequenceView.as_view()),
    path('sequences/<int:id>/', SequenceView.as_view()),
    path('tmparts/', TmpartView.as_view()),
    path('tmparts/<int:id>/', TmpartView.as_view()),
]