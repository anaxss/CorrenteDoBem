import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  onDonateClick: () => void;
}

export function Footer({ onDonateClick }: FooterProps) {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F5463A] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold">Corrente do Bem</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando vidas através da solidariedade. 
              Juntos, construímos uma corrente de amor e esperança.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#F5463A]">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#F5463A]">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#F5463A]">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-[#F5463A] transition-colors">Sobre Nós</a></li>
              <li><a href="#doacoes" className="text-gray-400 hover:text-[#F5463A] transition-colors">Como Doar</a></li>
              <li><a href="#impacto" className="text-gray-400 hover:text-[#F5463A] transition-colors">Nosso Impacto</a></li>
              <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#F5463A] transition-colors">Pontos de Coleta</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#F5463A] transition-colors">Roupas</button></li>
              <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#F5463A] transition-colors">Calçados</button></li>
              <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#F5463A] transition-colors">Alimentos</button></li>
              <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#F5463A] transition-colors">Brinquedos</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5463A] mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>R. Santo Alberico Crescitelli, 88</p>
                  <p>Vila Missionária - São Paulo - SP</p>
                  <p>CEP: 04430-030</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5463A]" />
                <span className="text-sm text-gray-400">(11) 95269-2300</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5463A]" />
                <span className="text-sm text-gray-400">correntedobem.veleiros@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Corrente do Bem. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#F5463A] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5463A] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}