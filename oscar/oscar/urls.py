from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', include('frontend.urls')),
    # path('error/', include('error.urls')),
    # path('ide/', include('car_ide.urls')),
    # path('db/', include('car_database.urls')),
]
