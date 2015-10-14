from django.db import models
from django.utils import timezone

# Create your models here.

class Article(models.Model):
    headline = models.CharField(verbose_name='rubrik',
                                max_length=255,
                                help_text="Rubriken till Artikeln")
    lead = models.TextField(verbose_name='ingress',
                            help_text="Ingress som syns utan att klicka på artikeln.")
    body = models.TextField(verbose_name='brödtext',
                            help_text="Brödtext som syns efter att ha klickat på läs mer.")

    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        super(Article, self).save(*args, **kwargs)

    def __str__(self):
        return self.headline

    def get_absolute_url(self):
        return "/articles/%i/" % self.id

    class Meta:
        verbose_name = "Artikel"
        verbose_name_plural = "Artiklar"

