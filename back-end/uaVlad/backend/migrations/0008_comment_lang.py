# Generated by Django 5.1.2 on 2024-10-28 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_alter_comment_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='lang',
            field=models.CharField(default='en', max_length=2),
            preserve_default=False,
        ),
    ]
