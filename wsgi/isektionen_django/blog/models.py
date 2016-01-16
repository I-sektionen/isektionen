from django.db import models
from django.utils import timezone


class BlogEntry(models.Model):

    title = models.CharField(verbose_name='Titel',
                                max_length=255,
                                help_text="Rubriken till artikeln",
                                null=True,
                                blank=False)
    lead = models.TextField(verbose_name='ingress',
                            help_text="Ingressen är den text som syns i nyhetsflödet. Max 500 tecken.",
                            null=True,
                            blank=False,
                            max_length=500)
    body = models.TextField(verbose_name='brödtext',
                            help_text="Brödtext syns när en artikel visas enskilt.",
                            null=True,
                            blank=False)

    created = models.DateTimeField(editable=False,
                                   null=True,
                                    blank=False)

    publishedDate = models.DateTimeField(verbose_name="Publicerings datum"
                                        ,editable=True,
                                         null=True,
                                        blank=False)

    author = models.CharField(verbose_name="Författare",
                                max_length=255,
                                help_text="Författare",
                              null=True,
                                blank=False)

    def save(self, *args, **kwargs):
        self.created = timezone.now()
        super(BlogEntry, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return "/blog/%i/" % self.id

    class Meta:
        verbose_name = "inlägg"
        verbose_name_plural = "flera inlägg"