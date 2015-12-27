from blog.models import BlogEntry
from django import template
from django.utils import timezone
__author__ = 'elonbrange'

register = template.Library()


@register.simple_tag
def get_last_entries():
    blog_entries = BlogEntry.objects.filter(publishedDate__lt=timezone.now()).order_by("-publishedDate")[:3]
    return blog_entries