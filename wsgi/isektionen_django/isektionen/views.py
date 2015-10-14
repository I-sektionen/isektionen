__author__ = 'MagnusForzelius'

from django.shortcuts import render
from articles.models import Article


def index(request):
    a = "Hello World"
    articles = Article.objects.all().order_by('created')
    return render(request, "isektionen/index.html", {
        'text': a,
        'articles': articles,
    })


def test1(request):
    a = "första testet osv nice hej"
    return render(request, "isektionen/test1.html", {
        'text': a,
    })
def test2(request):
    a = "andra testet osv nice hej"
    return render(request, "isektionen/test2.html", {
        'text': a,
    })
def test3(request):
    a = "tredje testet osv nice hej"
    return render(request, "isektionen/test3.html", {
        'text': a,
    })
def test4(request):
    a = "fjärde testet osv nice hej"
    return render(request, "isektionen/test4.html", {
        'text': a,
    })
