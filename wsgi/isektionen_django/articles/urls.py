__author__ = 'axel'

from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.allArticles, name='articles'),
    url(r'^(?P<article_id>[0-9]+)/$', views.showSingleArticle, name='article'),
    ]
