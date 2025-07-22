from django.contrib import admin
from django.urls import path
from web import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.Home,name='home'),
    path('aboutus/', views.Aboutus,name='aboutus'),
    path('contactus/', views.Contactus,name='contactus'),
    path('booknow/<str:docId>/',views.Booknow,name='booknow'),
    path('addYatch/',views.addYacht,name='addyacht'),
    path('saveYachtInfo/',views.saveYachtInfo,name='saveYachtInfo'),
    path('addEvent/',views.addEvent,name='addEvent'),
    path('saveEventInfo/',views.saveEventInfo,name='saveEventInfo'),
    path('callRequest/',views.callRequest,name='callRequest'),
    path('bookingRequest/',views.bookingRequest,name='bookingRequest')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

