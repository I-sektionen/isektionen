__author__ = 'MagnusForzelius'

from django.shortcuts import render
from blog.models import BlogEntry


def index(request):
    return render(request, "isektionen/index.html", {
    })


def show_test_page(request):
    return render(request, "isektionen/test_page.html", {})


def education(request):
    return render(request, "isektionen/utbildningen.html", {

    })
