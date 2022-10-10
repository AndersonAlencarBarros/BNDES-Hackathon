from rest_framework import serializers
from core.models import User, Business

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
            model = Business
            fields = "__all__"
            
class ListUserSerializer(serializers.ModelSerializer):
    business = BusinessSerializer()

    class Meta:
        model = User
        fields = "__all__"


class UserSerializer(serializers.Serializer):

    def create(self, validated_data):
        conhecimentoNegocios = validated_data.get("conhecimentoNegocios")
        modalidade = validated_data.get("modalidade")
        categoria = validated_data.get("categoria")
        rendaNegocio = validated_data.get("rendaNegocio")
        ajudaMicrocredito = validated_data.get("ajudaMicrocredito")
        valorMicrocredito = validated_data.get("valorMicrocredito")
        conhecimentoSegmento = validated_data.get("conhecimentoSegmento")
        temModeloNegocios = validated_data.get("temModeloNegocios")
        valorIniciarNegocio = validated_data.get("valorIniciarNegocio")
        
        nome = validated_data.get("nome")
        email = validated_data.get("email")
        telefone = validated_data.get("telefone")
        rendaFamiliar = validated_data.get("rendaFamiliar")
        jaEmpreeende = validated_data.get("jaEmpreeende")
        
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
        
        return user