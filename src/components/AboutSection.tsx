import { Card, CardContent } from "./ui/card";
import { Target, Heart, Users, TrendingUp, HandHeart, Lightbulb, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const coreValues = [
    {
      icon: Heart,
      title: "Quem Somos",
      description: "A Corrente do Bem é um projeto de solidariedade que nasceu do desejo de transformar vidas através da doação. Somos uma rede de pessoas comprometidas em fazer a diferença, conectando quem pode ajudar com quem precisa de apoio.",
      color: "#F5463A"
    },
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Facilitar o acesso de famílias em situação de vulnerabilidade a itens essenciais como roupas, calçados, alimentos e brinquedos, promovendo dignidade, esperança e transformação social através da solidariedade.",
      color: "#F5463A"
    },
    {
      icon: Globe,
      title: "Nossa Visão",
      description: "Ser referência em doação solidária, expandindo nossa rede de apoio para alcançar cada vez mais comunidades, construindo uma sociedade mais justa, igualitária e solidária para todos.",
      color: "#F5463A"
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Recebimento",
      description: "Recebemos doações de pessoas e empresas em nosso centro de distribuição ou através de pontos de coleta parceiros.",
      icon: HandHeart
    },
    {
      number: "02",
      title: "Triagem",
      description: "Nossa equipe de voluntários organiza e separa todas as doações, garantindo que estejam em bom estado e adequadas para distribuição.",
      icon: Users
    },
    {
      number: "03",
      title: "Distribuição",
      description: "Identificamos famílias e comunidades em situação de necessidade através de parcerias com instituições sociais e assistência social.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Impacto",
      description: "Acompanhamos o impacto das doações e mantemos contato com as famílias atendidas, criando vínculos duradouros de apoio.",
      icon: Award
    }
  ];

  const impacts = [
    {
      icon: "🏠",
      title: "Dignidade",
      description: "Garantimos acesso a itens essenciais, devolvendo dignidade e autoestima às famílias",
      stat: "1000+ famílias"
    },
    {
      icon: "🍽️",
      title: "Segurança Alimentar",
      description: "Combatemos a fome com distribuição regular de alimentos não perecíveis",
      stat: "5 toneladas/mês"
    },
    {
      icon: "👶",
      title: "Futuro das Crianças",
      description: "Apoiamos o desenvolvimento infantil com brinquedos, roupas e materiais escolares",
      stat: "500+ crianças"
    },
    {
      icon: "🤝",
      title: "Comunidade",
      description: "Fortalecemos laços comunitários e promovemos a cultura da solidariedade",
      stat: "15 comunidades"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F5463A]/10 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-[#F5463A]" />
            <span className="text-[#BC4134]">Conheça nosso propósito</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Sobre a Corrente do Bem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um projeto que une corações e transforma vidas através da solidariedade
          </p>
        </div>

        {/* Quem Somos, Missão e Visão */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="border-t-4 hover:shadow-xl transition-all duration-300"
                style={{ borderTopColor: value.color }}
              >
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Como Funcionam as Doações */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">
              Como Funcionam as Doações
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo transparente e organizado para garantir que sua doação chegue a quem realmente precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#F5463A]/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F5463A] to-[#F8864B] rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="mt-4">
                    <IconComponent className="w-10 h-10 text-[#F5463A] mb-4" />
                    <h4 className="text-xl mb-3 text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nosso Impacto */}
        <div className="bg-gradient-to-br from-[#F5463A]/5 to-[#F8864B]/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">
              O Impacto das Suas Doações
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada contribuição gera transformação real na vida de pessoas e comunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{impact.icon}</div>
                  <h4 className="mb-3 text-[#BC4134]">
                    {impact.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {impact.description}
                  </p>
                  <div className="text-2xl text-[#F5463A]">
                    {impact.stat}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Imagem com Citação Inspiradora */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJpbmclMjBoZWxwaW5nfGVufDF8fHx8MTc2MDk4ODA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Voluntários trabalhando juntos"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl text-[#F5463A]/20">"</div>
              <blockquote className="text-2xl text-gray-700 italic pl-8 leading-relaxed">
                A verdadeira medida da nossa riqueza não está no que possuímos, mas no que podemos compartilhar com quem precisa.
              </blockquote>
              <div className="absolute -right-4 -bottom-4 text-6xl text-[#F5463A]/20">"</div>
            </div>
            
            <div className="pl-8 mt-8">
              <p className="text-gray-600">
                Acreditamos que pequenos gestos de solidariedade criam ondas de transformação. 
                Cada doação, cada voluntário, cada pessoa que compartilha nossa causa está ajudando 
                a construir uma sociedade mais justa e humana.
              </p>
            </div>
          </div>
        </div>

        {/* Valores e Princípios */}
        <div className="bg-white rounded-2xl border-2 border-[#F5463A]/20 p-8 md:p-12">
          <h3 className="text-3xl text-center mb-12 text-gray-900">
            Nossos Valores e Princípios
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#F5463A]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#F5463A]" />
                </div>
              </div>
              <div>
                <h4 className="text-xl mb-2 text-[#BC4134]">Transparência</h4>
                <p className="text-gray-600">
                  Prestamos contas de todas as doações recebidas e distribuídas, garantindo total clareza em nossas ações.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#F8864B]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#F8864B]" />
                </div>
              </div>
              <div>
                <h4 className="text-xl mb-2 text-[#BC4134]">Respeito</h4>
                <p className="text-gray-600">
                  Tratamos todos com dignidade, sem julgamentos, reconhecendo a história e as necessidades de cada pessoa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#BC4134]/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#BC4134]" />
                </div>
              </div>
              <div>
                <h4 className="text-xl mb-2 text-[#BC4134]">Inclusão</h4>
                <p className="text-gray-600">
                  Atendemos todas as pessoas que precisam, independente de origem, religião ou qualquer outra característica.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#DE8363]/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#DE8363]" />
                </div>
              </div>
              <div>
                <h4 className="text-xl mb-2 text-[#BC4134]">Excelência</h4>
                <p className="text-gray-600">
                  Buscamos constantemente melhorar nossos processos para servir melhor quem precisa e quem doa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
