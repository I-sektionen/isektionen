from django.core.mail import send_mail

from isektionen import settings

__author__ = 'MagnusForzelius'

from django.shortcuts import render
from blog.models import BlogEntry


def render_home_page(request):
    return render(request, "isektionen/home.html", {})


def show_gymnasiecase_iresan_page(request):
    return render(request, "isektionen/gymnasiecase_iresan.html", {})


def show_foretag_page(request):
    return render(request, "isektionen/foretag.html", {})


def show_sokande_page(request):
    return render(request, "isektionen/sokande.html", {
        'sokande': True,
    })


def show_utbildning_page(request):
    return render(request, "isektionen/sokande/utbildning.html", {
        'utbildning': True,
    })

def show_bostad_page(request):
    return render(request, "isektionen/sokande/bostad.html", {
        'bostad': True,
    })


def show_efterstudier_page(request):
    return render(request, "isektionen/sokande/efterstudier.html", {
        'efterstudier': True,
    })


def show_studentliv_page(request):
    return render(request, "isektionen/sokande/studentliv.html", {
        'studentliv': True,
    })


def i_resan_page(request):
    return render(request, "isektionen/sokande/i-resan.html", {
        'i_resan': True,
    })

def show_contact_page(request):
    if request.method == "POST":
        name = request.POST.get("namn")
        epost = request.POST.get("email")
        meddelande = request.POST.get("meddelande")
        subject = request.POST.get("subject")
        print(name)
        send_mail(subject, meddelande, name + " @ " + epost, "pr@i-sektionen.se", fail_silently=False)
    return render(request, "isektionen/sokande/kontakt.html", {
        'kontakt': True,
    })

def show_FAQ_page(request):
    return render(request, "isektionen/sokande/FAQ.html", {
        'FAQ': True,
    })
