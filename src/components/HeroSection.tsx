import { Button } from "./ui/button";
import { Heart, ArrowRight } from "lucide-react";
import heroImage from "figma:asset/3eb1a3e6a46337647b418daf7578ac98302dd826.png";

interface HeroSectionProps {
  onDonateClick: () => void;
}

export function HeroSection({ onDonateClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#F5463A] to-[#F8864B] text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-white fill-current" />
                <span className="text-lg font-medium">Corrente do Bem</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme vidas através da solidariedade
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Conectamos doadores e pessoas em necessidade, criando uma rede de 
                solidariedade que transforma comunidades inteiras.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onDonateClick}
                size="lg"
                className="bg-white text-[#F5463A] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Quero Doar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-[#F5463A] transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Voluntários</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-white/80">Pontos de Coleta</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Família feliz representando solidariedade"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#DE8363] rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}