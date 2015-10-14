from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Article
# Create your views here.

def allArticles(request):
    articles = Article.objects.order_by('-created')

    return render(request, "isektionen/all_articles.html", {
        'articles': articles,
    })

def showSingleArticle(request, article_id):
    try:
        article = get_object_or_404(Article, pk=article_id)
    except (Article.DoesNotExist):
        raise Http404("Article does not exist")
    return render(request, "isektionen/single_article.html", {
        'article': article,
    })