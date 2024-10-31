from rest_framework import serializers
from .models import UserInformation, Session, PortfolioItem, TeamUser, Comment

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['session_date_time']

class UserInformationSerializer(serializers.ModelSerializer):
    sessions = SessionSerializer(many=True, read_only=True)

    class Meta:
        model = UserInformation
        fields = ['ip_address', 'browser_language', 'user_agent', 'platform', 'unique_identifier', 'sessions']

class PortfolioItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioItem
        fields = '__all__'

class TeamUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamUser
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['author', 'email', 'lang', 'text', 'priority',  'rating', 'created_at', 'active']