from django import views
from django.urls import path
from . import views
from .views import NoteListcreateView, NoteView

app_name = 'note'

urlpatterns = [
    path('',views.index, name='index'),
    path('note-create/',views.createNote, name='note-create'),
    path('notes-view/<int:id>',views.singleNote, name='notes-view'),
    path('note-edit/<int:id>/',views.editNote, name='note-edit'),
    path('api/v1/notes/', NoteListcreateView.as_view(), name='note-list'),
    path('api/v1/notes/', NoteListcreateView.as_view(), name='note-create'),
    path('api/v1/notes/<int:pk>/', NoteView.as_view(), name='note-detail'),
    path('api/v1/notes/<int:pk>/', NoteView.as_view(), name='note-update'),
    path('api/v1/notes/<int:pk>/', NoteView.as_view(), name='note-delete'),
]