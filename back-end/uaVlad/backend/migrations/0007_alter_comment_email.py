# Generated by Django 5.1.2 on 2024-10-28 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_comment_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
