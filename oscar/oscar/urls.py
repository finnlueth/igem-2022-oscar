from http.client import HTTPResponse
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static, serve

admin.site.site_header = 'OSCAR Admin Panel'
admin.site.site_title = 'Open Source CAR'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    re_path(r'^media/(?P<path>.*)$', serve, kwargs={'document_root': settings.MEDIA_ROOT}),
    path('', include('frontend.urls')),
]+static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)