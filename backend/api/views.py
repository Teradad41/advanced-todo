from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from event.models import Event
from .serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
