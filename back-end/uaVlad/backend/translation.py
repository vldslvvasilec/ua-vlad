from modeltranslation.translator import register, TranslationOptions
from .models import TeamUser

@register(TeamUser)
class TeamUserTranslationOptions(TranslationOptions):
    fields = ('userName', 'userSkills')
