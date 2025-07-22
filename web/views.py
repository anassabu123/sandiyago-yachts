from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Sandiyago Yachts!")

def aboutus(request):
    return HttpResponse("About Sandiyago Yachts - Luxury, Adventure & Memories.")
