from django.conf.urls import include, url
from django.contrib import admin
from . import views
from blog import urls as blog_urls
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', view=views.render_home_page, name='home'),
    url(r'^blog/', include(blog_urls)),

    url(r'^foretag/$', view=views.show_foretag_page, name='foretag'),
    url(r'^sokande/$', view=views.show_sokande_page, name='sokande'),
    url(r'^sokande/utbildning$', view=views.show_utbildning_page, name='utbildning'),
    url(r'^sokande/studentliv$', view=views.show_studentliv_page, name='studentliv'),
    url(r'^sokande/efterstudier$', view=views.show_efterstudier_page, name='efterstudier'),
    url(r'.well-known/acme-challenge/sswDRRG9Em-kCkpXIZvECjVTirS1rIMLsltuF2lwDpk', TemplateView.as_view(template_name='acme.txt', content_type='text/plain'))
]

