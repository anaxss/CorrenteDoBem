import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MapPin, Phone, Mail, ChevronDown, Package, Users, Truck, Calendar, Gift } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        style={{
          maxWidth: '42rem',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          margin: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        }}
      >
        <DialogHeader>
          <DialogTitle
            style={{
              fontSize: '1.5rem',
              color: '#F5463A',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Como Doar - Corrente do Bem
          </DialogTitle>
        </DialogHeader>

        {/* Bloco 1 - O que aceitamos */}
        <div
          style={{
            backgroundColor: 'rgba(245,70,58,0.1)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
          }}
        >
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#BC4134' }}>
            O que aceitamos:
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {[
              {
                title: 'Roupas',
                items: ['Roupas em bom estado', 'Todas as idades', 'Limpos e dobrados'],
              },
              {
                title: 'Calçados',
                items: ['Sapatos, tênis, sandálias', 'Em bom estado de conservação', 'Limpos'],
              },
              {
                title: 'Alimentos',
                items: ['Não perecíveis', 'Dentro da validade', 'Embalagens lacradas'],
              },
              {
                title: 'Brinquedos',
                items: ['Em bom estado', 'Higienizados', 'Seguros para crianças'],
              },
            ].map((group, i) => (
              <div key={i}>
                <h4 style={{ color: '#F5463A', marginBottom: '0.5rem' }}>{group.title}</h4>
                <ul style={{ fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2 - Onde entregar */}
        <div
          style={{
            backgroundColor: 'rgba(248,134,75,0.1)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
          }}
        >
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#BC4134' }}>
            Onde entregar:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Endereço */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <MapPin style={{ width: '1.25rem', height: '1.25rem', color: '#F5463A', marginTop: '0.125rem' }} />
              <div>
                <p style={{ fontWeight: 500 }}>Centro de Distribuição Corrente do Bem</p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>
                  R. Santo Alberico Crescitelli, 88 - Vila Missionária
                </p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>
                  São Paulo - SP, CEP: 04430-030
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Phone style={{ width: '1.25rem', height: '1.25rem', color: '#F5463A', marginTop: '0.125rem' }} />
              <div>
                <p style={{ fontWeight: 500 }}>Contato</p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>(11) 95269-2300</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Mail style={{ width: '1.25rem', height: '1.25rem', color: '#F5463A', marginTop: '0.125rem' }} />
              <div>
                <p style={{ fontWeight: 500 }}>E-mail</p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>henriquesjulya@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3 - Outras formas */}
        <div
          style={{
            backgroundColor: 'rgba(222,131,99,0.1)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
          }}
        >
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#BC4134' }}>
            Outras formas de ajudar:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.875rem' }}>• Seja um voluntário em nossos eventos</p>
            <p style={{ fontSize: '0.875rem' }}>• Divulgue nosso trabalho nas redes sociais</p>
            <p style={{ fontSize: '0.875rem' }}>• Organize campanhas em sua empresa ou escola</p>
          </div>
        </div>

        {/* Botões */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                style={{
                  borderColor: '#F5463A',
                  color: '#F5463A',
                  backgroundColor: 'transparent',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(245,70,58,0.1)')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Opções de Doação
                <ChevronDown style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </Button>
            </DropdownMenuTrigger>

            {/* Menu */}
            <DropdownMenuContent style={{ width: '14rem' }}>
              {/* Opções... (mantém sua lógica de onClick com WhatsApp) */}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={onClose}
            style={{
              backgroundColor: '#F5463A',
              color: '#fff',
              fontWeight: 500,
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#BC4134')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F5463A')}
          >
            Entendi!
          </Button>
        </div>
      </DialogContent>

    </Dialog>
  );
}