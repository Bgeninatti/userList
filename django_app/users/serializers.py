from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for `User` model.
    Serialize a one or many `User` instance(s) as JSON serializable
    """

    class Meta:
        model = User
        fields = ('id', 'email', 'created', 'modified')
