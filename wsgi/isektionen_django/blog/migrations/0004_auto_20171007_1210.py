# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20151117_0017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogentry',
            name='lead',
            field=models.TextField(verbose_name='ingress', max_length=500, null=True, help_text='Ingressen är den text som syns i nyhetsflödet. Max 500 tecken.'),
        ),
    ]
