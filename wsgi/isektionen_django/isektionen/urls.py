from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', view=views.index, name='index'),
    url(r'^articles/', include('articles.urls', namespace='articles')),
    url(r'^test1/$', view=views.test1, name='test1'),
    url(r'^test2/$', view=views.test2, name='test2'),
    url(r'^test3/$', view=views.test3, name='test3'),
    url(r'^test4/$', view=views.test4, name='test4'),
]

