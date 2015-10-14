# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('headline', models.CharField(verbose_name='rubrik', max_length=255, help_text='Rubriken till Artikeln')),
                ('lead', models.TextField(verbose_name='ingress', help_text='Ingress som syns utan att klicka på artikeln.')),
                ('body', models.TextField(verbose_name='brödtext', help_text='Brödtext som syns efter att ha klickat på läs mer.')),
                ('created', models.DateTimeField(editable=False)),
                ('modified', models.DateTimeField(editable=False)),
            ],
            options={
                'verbose_name': 'Artikel',
                'verbose_name_plural': 'Artiklar',
            },
        ),
    ]
