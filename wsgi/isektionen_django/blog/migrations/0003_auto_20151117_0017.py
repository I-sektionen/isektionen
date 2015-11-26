# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20151109_2146'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogentry',
            name='author',
            field=models.CharField(help_text='Författare', max_length=255, verbose_name='Författare', null=True),
        ),
        migrations.AddField(
            model_name='blogentry',
            name='publishedDate',
            field=models.DateTimeField(verbose_name='Publicerings datum', null=True),
        ),
        migrations.AlterField(
            model_name='blogentry',
            name='body',
            field=models.TextField(help_text='Brödtext syns när en artikel visas enskilt.', verbose_name='brödtext', null=True),
        ),
        migrations.AlterField(
            model_name='blogentry',
            name='created',
            field=models.DateTimeField(editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='blogentry',
            name='lead',
            field=models.TextField(help_text='Ingressen är den text som syns i nyhetsflödet. Max 160 tecken.', verbose_name='ingress', null=True),
        ),
        migrations.AlterField(
            model_name='blogentry',
            name='title',
            field=models.CharField(help_text='Rubriken till artikeln', max_length=255, verbose_name='Titel', null=True),
        ),
    ]
