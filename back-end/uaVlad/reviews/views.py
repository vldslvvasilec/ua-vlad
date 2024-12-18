from rest_framework import generics
from backend.models import Comment
from backend.serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework import status
from config.sendEmail import send_email
from config.emailTexts import get_email_text
from config.emailBodyComments import generate_email_content
from validate_email_address import validate_email

class ReviewCreateView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data.setdefault('priority', 1)
        lang = request.data.get('lang', 'en')
        email = request.data.get('email')
        name = request.data.get('author')
        if validate_email(email, verify=True):
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            subject = get_email_text(lang, 'thank_you_comment')
            body = generate_email_content(lang, name)

            response_back_status = send_email(subject, body, email)
            if response_back_status == 450:
                return Response({'error': 'email-error'}, status=status.HTTP_200_OK)
            elif response_back_status == 202:
                return Response({'succes': 'OK' }, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Ошибка при отправке email.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'email-error'}, status=status.HTTP_200_OK)
