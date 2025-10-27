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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#F5463A]">Como Doar - Corrente do Bem</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-[#F5463A]/10 p-6 rounded-lg">
            <h3 className="text-lg mb-4 text-[#BC4134]">O que aceitamos:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#F5463A] mb-2">Roupas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Roupas em bom estado</li>
                  <li>• Todas as idades</li>
                  <li>• Limpos e dobrados</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F5463A] mb-2">Calçados</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sapatos, tênis, sandálias</li>
                  <li>• Em bom estado de conservação</li>
                  <li>• Limpos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F5463A] mb-2">Alimentos</h4>
                <ul className="text-sm space-y-1">
                  <li>• Não perecíveis</li>
                  <li>• Dentro da validade</li>
                  <li>• Embalagens lacradas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F5463A] mb-2">Brinquedos</h4>
                <ul className="text-sm space-y-1">
                  <li>• Em bom estado</li>
                  <li>• Higienizados</li>
                  <li>• Seguros para crianças</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#F8864B]/10 p-6 rounded-lg">
            <h3 className="text-lg mb-4 text-[#BC4134]">Onde entregar:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5463A] mt-0.5" />
                <div>
                  <p className="font-medium">Centro de Distribuição Corrente do Bem</p>
                  <p className="text-sm text-gray-600">R. Santo Alberico Crescitelli, 88 - Vila Missionária</p>
                  <p className="text-sm text-gray-600">São Paulo - SP, CEP: 04430-030</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5463A] mt-0.5" />
                <div>
                  <p className="font-medium">Contato</p>
                  <p className="text-sm text-gray-600">(11) 95269-2300</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F5463A] mt-0.5" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-sm text-gray-600">henriquesjulya@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#DE8363]/10 p-6 rounded-lg">
            <h3 className="text-lg mb-4 text-[#BC4134]">Outras formas de ajudar:</h3>
            <div className="space-y-2">
              <p className="text-sm">• Seja um voluntário em nossos eventos</p>
              <p className="text-sm">• Divulgue nosso trabalho nas redes sociais</p>
              <p className="text-sm">• Organize campanhas em sua empresa ou escola</p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-[#F5463A] text-[#F5463A] hover:bg-[#F5463A]/10">
                  Opções de Doação
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem 
                  onClick={() => {
                    const phone = "5511952692300";
                    const message = "Olá! Gostaria de agendar uma entrega de doação.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Truck className="w-4 h-4 mr-2 text-[#F5463A]" />
                  Agendar Entrega
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    const phone = "5511952692300";
                    const message = "Olá! Gostaria de me tornar voluntário da Corrente do Bem.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Users className="w-4 h-4 mr-2 text-[#F8864B]" />
                  Ser Voluntário
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    const phone = "5511952692300";
                    const message = "Olá! Gostaria de organizar uma campanha de doação.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Package className="w-4 h-4 mr-2 text-[#DE8363]" />
                  Campanha de Doação
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    const phone = "5511952692300";
                    const message = "Olá! Gostaria de participar de eventos solidários.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2 text-[#F5463A]" />
                  Eventos Solidários
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    const phone = "5511952692300";
                    const message = "Olá! Gostaria de fazer uma doação especial para datas comemorativas.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Gift className="w-4 h-4 mr-2 text-[#F8864B]" />
                  Doação Especial
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={onClose} className="bg-[#F5463A] hover:bg-[#BC4134]">
              Entendi!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}