from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Note
from rest_framework import status
from .serializers import NoteSerializer


def index(request):
    return render(request,'index.html')

def singleNote(request,id):
    context = {
        "id":id,
    }
    return render(request,'note-view.html',context)


def createNote(request):
    return render(request,'note-create.html')


def editNote(request,id):
    note = Note.objects.get(id=id)
    context = {
        "note":note,
    }
    return render(request,'note-edit.html',context)


class NoteListcreateView(APIView):
    def get(self,request):
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    

    
    def post(self, request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                "status":200,
            }
            return JsonResponse(data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NoteView(APIView):
    def get(self, request, pk):
        note = Note.objects.get(pk=pk)
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    def put(self, request, pk):
        note = Note.objects.get(pk=pk)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            print("success")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        note = Note.objects.get(pk=pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

