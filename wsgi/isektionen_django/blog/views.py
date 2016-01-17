from django.shortcuts import render
from .models import BlogEntry
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import datetime


# Create your views here.
def view_all_blog_posts(request):
    blog_entries = BlogEntry.objects.filter(publishedDate__lt=datetime.datetime.now()).order_by("-publishedDate")
    num_entries = len(blog_entries)
    paginator = Paginator(blog_entries, 5) # Show 10 articles per page

    page = request.GET.get('page')
    try:
        blog_entries = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        blog_entries = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        blog_entries = paginator.page(paginator.num_pages)



    return render(request, "blog/blog.html", {"blog_entries": blog_entries, "num_entries": num_entries})


def view_one_blog_entry(request, pk):
    blog_entry = BlogEntry.objects.get(pk=pk, publishedDate__lt=datetime.datetime.now())
    return render(request, "blog/single_blog_entry.html", {"blog_entry": blog_entry})


"""
def listing(request):
    contact_list = Contacts.objects.all()
    paginator = Paginator(contact_list, 25) # Show 25 contacts per page

    page = request.GET.get('page')
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        contacts = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        contacts = paginator.page(paginator.num_pages)

    return render(request, 'list.html', {'contacts': contacts})
"""