# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Blog',
            new_name='BlogEntry',
        ),
        migrations.AlterModelOptions(
            name='blogentry',
            options={'verbose_name': 'inlägg', 'verbose_name_plural': 'flera inlägg'},
        ),
    ]
