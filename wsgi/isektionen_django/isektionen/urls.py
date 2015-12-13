from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views
from blog import urls as blog_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', view=views.index, name='index'),
    url(r'^test_page/$', view=views.show_test_page, name='page-1'),
    url(r'^blog/', include(blog_urls)),
    url(r'^utbildningen/$',view=views.show_education_page, name='utbildningen'),
    url(r'^intro/$', view=views.show_intro_page, name='intro'),
    url(r'^studentliv/$', view=views.show_student_life_page, name='studentliv'),
    url(r'^efter_studier/$', view=views.show_after_education_page, name='efter_studier'),
    url(r'^kontakt/$', view=views.show_contact_page, name='kontakt'),
    url(r'^gymnasiecase_iresan/$', view=views.show_gymnasiecase_iresan_page, name='gymnasiecase_iresan'),
    url(r'^foretag/$', view=views.show_foretag_page, name='foretag')
]

