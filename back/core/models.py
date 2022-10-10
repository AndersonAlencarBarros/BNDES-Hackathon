from email.policy import default
import uuid
from django.db import models

class Business(models.Model):
    conhecimentoNegocios = models.CharField(max_length=10, default='', null=True)
    modalidade = models.CharField(max_length=15, default='', null=True)
    categoria = models.CharField(max_length=100, default='', null=True)
    rendaNegocio = models.FloatField(null=True)
    ajudaMicrocredito = models.CharField(max_length=100, default='', null=True)
    valorMicrocredito = models.FloatField(null=True)
    
    conhecimentoSegmento = models.CharField(max_length=50, default='', null=True)
    temModeloNegocios = models.CharField(max_length=10, default='', null=True)
    valorIniciarNegocio = models.FloatField(null=True)
    
    
class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
 
    nome = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    telefone = models.CharField(max_length=15, null=True, blank=True)
    rendaFamiliar = models.FloatField(null=True)
    jaEmpreeende = models.CharField(max_length=5, null=True, blank=True)
    
    business = models.OneToOneField(
        Business,
        related_name="business",
        on_delete=models.CASCADE,
    )