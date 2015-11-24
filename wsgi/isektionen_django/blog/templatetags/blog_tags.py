__author__ = 'elonbrange'

from blog.models import  BlogEntry
from django.template.loader_tags import register
import datetime

@register.assignment_tag
def get_last_entry():
    blog_entries=BlogEntry.objects.filter(publishedDate__lt=datetime.datetime.now() ).order_by("-publishedDate")[:1]
    return blog_entries