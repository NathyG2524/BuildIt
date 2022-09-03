from unicodedata import name
from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()   
router.register(r'pages', views.PagesView, 'todo') 
urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='home'),
    path('add', views.addPage, name='addpage'),
    path('edit/<id>', views.editPage, name='editpage'),
    path('page/create', views.savePage, name='create_page'),
    path('editPage/<id>', views.editPageContent, name='editPageContent'),
    path('preview/<id>', views.previewPage, name='previewPage')
]