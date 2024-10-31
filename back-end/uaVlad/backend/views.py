from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserInformation, Session, PortfolioItem, TeamUser, Comment
from .serializers import UserInformationSerializer, PortfolioItemSerializer, TeamUserSerializer, CommentSerializer

class UserInformationCreate(APIView):
    def post(self, request):
        unique_identifier = request.data.get('unique_identifier')
        user_info, created = UserInformation.objects.get_or_create(
            unique_identifier=unique_identifier,
            defaults={
                'ip_address': request.data.get('ip_address'),
                'browser_language': request.data.get('browser_language'),
                'user_agent': request.data.get('user_agent'),
                'platform': request.data.get('platform')
            }
        )
        
        Session.objects.create(user_info=user_info)
        
        serializer = UserInformationSerializer(user_info)
        
        # Получение и сериализация активных записей
        active_portfolios = PortfolioItem.objects.filter(active=True)
        active_team_users = TeamUser.objects.filter(active=True)
        active_comments = Comment.objects.filter(active=True)
        
        portfolios_serializer = PortfolioItemSerializer(active_portfolios, many=True)
        team_users_serializer = TeamUserSerializer(active_team_users, many=True)
        comments_serializer = CommentSerializer(active_comments, many=True)
        
        # Формирование ответа
        response_data = {
            'portfolios': portfolios_serializer.data,
            'team_users': team_users_serializer.data,
            'comments': comments_serializer.data
        }
        return Response(response_data)
