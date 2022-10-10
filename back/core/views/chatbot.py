from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.models import User, Business
from ..serializers.user_serializer import UserSerializer, ListUserSerializer

class ChatBot(APIView):
     
    def post(self, request, format=None):
        
        print()
        print(request.data) 
        print() 
        
        conhecimentoNegocios = request.data.get("conhecimentoNegocios", '')
        modalidade = request.data.get("modalidade", '')
        categoria = request.data.get("categoria", '')
        rendaNegocio = request.data.get("rendaNegocio", 0)
        ajudaMicrocredito = request.data.get("ajudaMicrocredito", '')
        valorMicrocredito = request.data.get("valorMicrocredito", 0)
        
        conhecimentoSegmento = request.data.get("conhecimentoSegmento", "")
        temModeloNegocios = request.data.get("temModeloNegocios", "")
        valorIniciarNegocio = request.data.get("valorIniciarNegocio", 0)
        
        nome = request.data["nome"]
        email = request.data["email"]
        telefone = request.data["telefone"]
        rendaFamiliar = request.data["rendaFamiliar"]
        jaEmpreeende = request.data["jaEmpreeende"]
        
        business = Business.objects.create(
            conhecimentoNegocios = conhecimentoNegocios,
            modalidade = modalidade,
            categoria = categoria,
            rendaNegocio = rendaNegocio,
            ajudaMicrocredito = ajudaMicrocredito,
            valorMicrocredito = valorMicrocredito,
            conhecimentoSegmento = conhecimentoSegmento,
            temModeloNegocios = temModeloNegocios,
            valorIniciarNegocio = valorIniciarNegocio,
        )
         
        business.save()
        
        user = User.objects.create(
            nome = nome,
            email = email,
            telefone = telefone,
            rendaFamiliar = rendaFamiliar,
            jaEmpreeende = jaEmpreeende,
            business = business
        )
        
        user.save()
              
        
        return Response({
            'response': 'Respostas Recebidas com Sucesso!'
        }, status=status.HTTP_200_OK)
        
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = ListUserSerializer(users, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK) 

         
         
    