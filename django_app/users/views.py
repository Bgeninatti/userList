from rest_framework.viewsets import ModelViewSet
from users.models import User
from users.serializers import UserSerializer


class UserViewSet(ModelViewSet):
    """
    Handles the CRUD operations for `User` model
    """

    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer
