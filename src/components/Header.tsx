import { Button } from "./ui/button";
import { Heart, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface HeaderProps {
  onDonateClick: () => void;
}

export function Header({ onDonateClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F5463A] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-[#BC4134] dark:text-[#F8864B]">Corrente do Bem</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B] transition-colors">
              Sobre
            </a>
            <a href="#doacoes" className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B] transition-colors">
              Categorias
            </a>
            <a href="#doar" className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B] transition-colors">
              Como Doar
            </a>
            <a href="#impacto" className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B] transition-colors">
              Nosso Impacto
            </a>
            <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B] transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-[#F5463A] dark:hover:text-[#F8864B]"
              aria-label="Alternar tema"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
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