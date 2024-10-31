# Generated by Django 5.1.2 on 2024-10-27 08:42

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_userinformation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinformation',
            name='current_date_time',
        ),
        migrations.AlterField(
            model_name='userinformation',
            name='unique_identifier',
            field=models.CharField(default=uuid.uuid4, max_length=255, unique=True),
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session_date_time', models.DateTimeField(auto_now_add=True)),
                ('user_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sessions', to='backend.userinformation')),
            ],
        ),
    ]