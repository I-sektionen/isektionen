__author__ = 'elonbrange'

from django.conf.urls import include, url
from . import views


urlpatterns = [
    url(r'^$', view=views.view_all_blogg_posts, name='all_blog_posts'),
    url(r'(?P<pk>[0-9]+)/$', view=views.view_one_blog_entry, name='view_one_blog_entry'),

]
