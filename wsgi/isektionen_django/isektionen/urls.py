from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views
from blog import urls as blog_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', view=views.index, name='index'),
    url(r'^test_page/$', view=views.show_test_page, name='page-1'),
    url(r'^blog/',
        include(blog_urls))
]

