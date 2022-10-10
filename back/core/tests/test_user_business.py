from django.test import TestCase
from core.models import User, Business

class UserCase(TestCase):
    def setUp(self):
        b = Business.objects.create(
            conhecimentoNegocios = "Alto",
            modalidade = "Virtual",
            categoria = "Moda",
            rendaNegocio = 2000.00,
            ajudaMicrocredito = "Compra de Material",
            valorMicrocredito = 2000.3,

            # conhecimentoSegmento
            # temModeloNegocios
            # valorIniciarNegocio
        )
        
        User.objects.create(
            nome = "Anderson",
            email = "anderson@test.com",
            telefone = "8755551111",
            rendaFamiliar = 1000,
            jaEmpreeende = "Sim",
            business = b
        )
        
        
        
    def test_creating_user(self):
        user = User.objects.get(nome="Anderson")
        
        print()
        print(user.nome)
        print(user.email) 
        print()
        
        self.assertEqual(user.nome, "Anderson")
        self.assertEqual(user.email, "anderson@test.com")

