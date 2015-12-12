__author__ = 'MagnusForzelius'

from django.shortcuts import render
from blog.models import BlogEntry

def show_landing_page(request):
    return render(request, "isektionen/landing.html", {})


def index(request):
    return render(request, "isektionen/index.html", {
    })


def show_test_page(request):
    return render(request, "isektionen/test_page.html", {})


def show_education_page(request):
    return render(request, "isektionen/utbildningen.html", {})

def show_intro_page(request):
    return render(request, "isektionen/intro.html", {})

def show_student_life_page(request):
    return render(request, "isektionen/studentliv.html", {})

def show_after_education_page(request):
    return render(request, "isektionen/efter_studier.html", {})

def show_contact_page(request):
    return render(request, "isektionen/kontakt.html", {})

def show_gymnasiecase_iresan_page(request):
    return render(request, "isektionen/gymnasiecase_iresan.html", {})

def show_foretag_page(request):
    return render(request, "isektionen/foretag.html", {})

def show_sokande_page(request):
    return render(request, "isektionen/sokande/sokande.html", {})

def show_utbildning_page(request):
    return render(request, "isektionen/sokande/utbildning.html", {})

def show_efterstudier_page(request):
    return render(request, "isektionen/sokande/efterstudier.html", {})

def show_studentliv_page(request):
    return render(request, "isektionen/sokande/studentliv.html", {})




