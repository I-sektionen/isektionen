__author__ = 'MagnusForzelius'

from django.shortcuts import render
from blog.models import BlogEntry


def show_landing_page(request):
    return render(request, "isektionen/landing.html", {})


def show_contact_page(request):
    return render(request, "isektionen/kontakt.html", {})


def show_gymnasiecase_iresan_page(request):
    return render(request, "isektionen/gymnasiecase_iresan.html", {})


def show_foretag_page(request):
    return render(request, "isektionen/foretag.html", {})


def show_sokande_page(request):
    return render(request, "isektionen/sokande/sokande.html", {
        'sokande': True,
    })


def show_utbildning_page(request):
    return render(request, "isektionen/sokande/utbildning.html", {
        'utbildning': True,
    })


def show_efterstudier_page(request):
    return render(request, "isektionen/sokande/efterstudier.html", {
        'efterstudier': True,
    })


def show_studentliv_page(request):
    return render(request, "isektionen/sokande/studentliv.html", {
        'studentliv': True,
    })




