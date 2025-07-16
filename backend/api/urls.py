from django.urls import path
from .views import RegisterView, ServiceListCreate, BookingListCreate, ReviewCreate

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('services/', ServiceListCreate.as_view()),
    path('bookings/', BookingListCreate.as_view()),
    path('reviews/', ReviewCreate.as_view()),
]