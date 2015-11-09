# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=255, help_text='Rubriken till artikeln', verbose_name='Titel')),
                ('lead', models.TextField(help_text='Ingressen är den text som syns i nyhetsflödet. Max 160 tecken.', verbose_name='ingress')),
                ('body', models.TextField(help_text='Brödtext syns när en artikel visas enskilt.', verbose_name='brödtext')),
                ('created', models.DateTimeField(editable=False)),
            ],
            options={
                'verbose_name': 'Artikel',
                'verbose_name_plural': 'Artiklar',
                'permissions': (('can_approve_article', 'Can approve article'),),
            },
        ),
    ]
