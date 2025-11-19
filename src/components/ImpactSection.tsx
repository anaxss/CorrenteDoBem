import { Card, CardContent } from "./ui/card";
import { Users, Heart, Gift, MapPin } from "lucide-react";

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      number: "1,247",
      label: "Famílias Atendidas",
      description: "Famílias que receberam doações este ano"
    },
    {
      icon: Gift,
      number: "8,532",
      label: "Itens Doados",
      description: "Entre roupas, calçados, alimentos e brinquedos"
    },
    {
      icon: Heart,
      number: "520",
      label: "Voluntários Ativos",
      description: "Pessoas dedicadas fazendo a diferença"
    },
    {
      icon: MapPin,
      number: "52",
      label: "Pontos de Coleta",
      description: "Locais espalhados pela cidade"
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nosso Impacto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Juntos, criamos uma corrente de solidariedade que transforma vidas e comunidades.
            Veja os números que mostram como sua doação faz a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-[#F5463A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#BC4134] dark:text-[#F8864B] mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#F5463A] to-[#F8864B] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Histórias que Inspiram
              </h3>
              <blockquote className="text-lg leading-relaxed mb-6 italic">
                "Recebi doações da Corrente do Bem quando mais precisava. Não eram apenas roupas e 
                alimentos, mas esperança e carinho. Hoje posso sustentar minha família e também 
                ajudo como voluntária."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <div className="font-semibold">Maria da Silva</div>
                  <div className="text-white/80">Beneficiária e Voluntária</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Nossa Missão</h4>
                <p className="text-white/90">
                  Criar uma rede de solidariedade que conecte pessoas dispostas a ajudar 
                  com aquelas que precisam de apoio, promovendo dignidade e transformação social.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">Nossa Visão</h4>
                <p className="text-white/90">
                  Ser referência em ações solidárias, construindo uma sociedade mais justa 
                  e acolhedora onde ninguém seja deixado para trás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}