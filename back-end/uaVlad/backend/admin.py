from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import UserInformation, Session, PortfolioItem, TeamUser, Comment
from contacts.models import Contacts

class SessionInline(admin.TabularInline):
    model = Session
    extra = 0 

class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'active')
    search_fields = ('title', 'author')

class TeamUserAdmin(TranslationAdmin):
    fields = (
        'active',
        'userName_en', 'userName_cs', 'userName_uk', 'userName_ru', 
        'userJob', 
        'userFoto',
        'userSkills_en', 'userSkills_cs', 'userSkills_uk', 'userSkills_ru',
        'userWhatsApp', 'userTelegram', 'userEmail', 
        'userLinkedIn', 'userFB', 'userInst'
    )
    list_display = ('userName_en', 'userJob', 'active')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('author', 'created_at', 'priority', 'rating', 'active')
    search_fields = ('author', 'text')

class UserInformationAdmin(admin.ModelAdmin):
    inlines = [SessionInline]

class ContactsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')

admin.site.register(UserInformation, UserInformationAdmin)
admin.site.register(PortfolioItem, PortfolioItemAdmin)
admin.site.register(TeamUser, TeamUserAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Contacts, ContactsAdmin)