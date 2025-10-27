import { Button } from "./ui/button";
import { Heart, Menu } from "lucide-react";

interface HeaderProps {
  onDonateClick: () => void;
}

export function Header({ onDonateClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F5463A] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-[#BC4134]">Corrente do Bem</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-[#F5463A] transition-colors">
              Sobre
            </a>
            <a href="#doacoes" className="text-gray-700 hover:text-[#F5463A] transition-colors">
              Categorias
            </a>
            <a href="#doar" className="text-gray-700 hover:text-[#F5463A] transition-colors">
              Como Doar
            </a>
            <a href="#impacto" className="text-gray-700 hover:text-[#F5463A] transition-colors">
              Nosso Impacto
            </a>
            <a href="#contato" className="text-gray-700 hover:text-[#F5463A] transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              onClick={onDonateClick}
              className="bg-[#F5463A] hover:bg-[#BC4134] text-white"
            >
              Como Doar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}