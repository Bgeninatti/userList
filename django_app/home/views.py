from django.views.generic.base import TemplateView

class HomeView(TemplateView):
    """
    Serves the main template of the application
    """

    template_name = 'index.html'
