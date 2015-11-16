from django.shortcuts import render
from .models import BlogEntry
import datetime


# Create your views here.
def view_all_blog_posts(request):
    blog_entries = BlogEntry.objects.filter(publishedDate__lt=datetime.datetime.now()).order_by("-publishedDate")
    return render(request, "blog/all_blog_posts.html", {"blog_entries": blog_entries})


def view_one_blog_entry(request, pk):
    blog_entry = BlogEntry.objects.get(pk=pk, publishedDate__lt=datetime.datetime.now())
    return render(request, "blog/single_blog_entry.html", {"blog_entry": blog_entry})
