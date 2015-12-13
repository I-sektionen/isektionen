__author__ = 'MagnusForzelius'

from django.shortcuts import render
from blog.models import BlogEntry

def show_landing_page(request):
    return render(request, "isektionen/landing.html", {})

def show_sokande_page(request):
    return render(request, "isektionen/sokande/sokande.html", {})

def show_utbildning_page(request):
    return render(request, "isektionen/sokande/utbildning.html", {})

def show_efterstudier_page(request):
    return render(request, "isektionen/sokande/efterstudier.html", {})

def show_studentliv_page(request):
    return render(request, "isektionen/sokande/studentliv.html", {})

def show_foretag_page(request):
    return render(request, "isektionen/foretag.html", {})


