import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Package,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface DonationSectionProps {
  onDonateClick: () => void;
}

export function DonationSection({
  onDonateClick,
}: DonationSectionProps) {
  const donationCategories = [
    {
      title: "Roupas",
      icon: "👕",
      color: "#F5463A",
      description:
        "Ajude famílias a terem acesso a roupas dignas",
      purpose:
        "Suas roupas em bom estado garantem dignidade e proteção a quem mais precisa",
      items: [
        "Roupas em bom estado para todas as idades",
        "Limpas, higienizadas e dobradas",
        "De qualquer estação do ano",
        "Roupas íntimas novas (com etiqueta)",
      ],
    },
    {
      title: "Calçados",
      icon: "👟",
      color: "#F5463A",
      description: "Proporcione conforto e mobilidade",
      purpose:
        "Calçados adequados são essenciais para o dia a dia e dignidade das pessoas",
      items: [
        "Sapatos, tênis, sandálias e chinelos",
        "Em bom estado de conservação",
        "Limpos e com solado em boas condições",
        "Para crianças, adultos e idosos",
      ],
    },
    {
      title: "Alimentos",
      icon: "🍞",
      color: "#F5463A",
      description: "Combata a fome com solidariedade",
      purpose:
        "Alimentos não perecíveis ajudam a garantir segurança alimentar para famílias",
      items: [
        "Arroz, feijão, macarrão e óleo",
        "Leite em pó, achocolatado, café",
        "Alimentos enlatados e conservas",
        "Dentro da validade e lacrados",
      ],
    },
    {
      title: "Brinquedos",
      icon: "🧸",
      color: "#F5463A",
      description: "Leve alegria às crianças",
      purpose:
        "Brinquedos estimulam o desenvolvimento infantil e trazem esperança",
      items: [
        "Brinquedos educativos e recreativos",
        "Em bom estado e higienizados",
        "Seguros para crianças (sem peças pequenas soltas)",
        "Livros infantis e materiais escolares",
      ],
    },
  ];

  const howToHelp = [
    {
      icon: Package,
      title: "Doação Física",
      description:
        "Entregue seus itens diretamente em nosso centro de distribuição",
      action: "Ver Endereço",
      color: "#F5463A",
    },
    {
      icon: Users,
      title: "Seja Voluntário",
      description:
        "Doe seu tempo e talento para transformar vidas",
      action: "Quero Ajudar",
      color: "#F5463A",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Selecione os itens",
      description:
        "Escolha o que você pode doar seguindo nossas orientações",
    },
    {
      number: "2",
      title: "Prepare a doação",
      description:
        "Limpe, organize e embale seus itens com cuidado",
    },
    {
      number: "3",
      title: "Entre em contato",
      description:
        "Ligue ou envie mensagem para agendar sua entrega",
    },
    {
      number: "4",
      title: "Faça a diferença",
      description: "Entregue sua doação e transforme vidas!",
    },
  ];

  return (
    <section
      id="doar"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F5463A]/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#F5463A]" />
            <span className="text-[#BC4134]">
              Faça parte dessa corrente
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Como Doar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua generosidade transforma vidas. Descubra como sua
            contribuição pode fazer a diferença na vida de quem
            mais precisa.
          </p>
        </div>

        {/* Formas de Ajudar */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {howToHelp.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#F5463A]/50 transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${item.color}20`,
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <Button
                    onClick={onDonateClick}
                    className="w-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Passo a Passo */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
          <h3 className="text-3xl text-center mb-12 text-gray-900">
            Passo a Passo para Doar
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5463A] to-[#F8864B] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {step.number}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#F5463A]/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Categorias Detalhadas */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12 text-gray-900">
            O que Você Pode Doar
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {donationCategories.map((category, index) => (
              <Card
                key={index}
                className="border-l-4 hover:shadow-xl transition-all duration-300"
                style={{ borderLeftColor: category.color }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="text-4xl p-3 rounded-lg"
                      style={{
                        backgroundColor: `${category.color}15`,
                      }}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-2xl mb-2"
                        style={{ color: category.color }}
                      >
                        {category.title}
                      </h4>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="p-4 rounded-lg mb-6"
                    style={{
                      backgroundColor: `${category.color}10`,
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: category.color }}
                    >
                      <strong>Por que doar:</strong>{" "}
                      {category.purpose}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      Aceitamos:
                    </p>
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: category.color }}
                        />
                        <span className="text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Informações de Contato e Endereço */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-[#F5463A] to-[#BC4134] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">Onde Entregar</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="mb-1">
                      Centro de Distribuição Corrente do Bem
                    </p>
                    <p className="text-white/90">
                      R. Santo Alberico Crescitelli, 88 - Vila
                      Missionária
                    </p>
                    <p className="text-white/90">
                      São Paulo - SP, CEP: 04430-030
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#F8864B] to-[#DE8363] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="mb-1">Telefone/WhatsApp</p>
                    <p className="text-white/90">
                      (11) 95269-2300
                    </p>
                    <p className="text-sm text-white/80">
                      Horário comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="mb-1">E-mail</p>
                    <p className="text-white/90">
                      henriquesjulya@gmail.com
                    </p>
                    <p className="text-sm text-white/80">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Final */}
        <div className="text-center bg-gradient-to-r from-[#F5463A] to-[#F8864B] rounded-2xl p-12 text-white">
          <Heart className="w-16 h-16 mx-auto mb-6 fill-current" />
          <h3 className="text-3xl mb-4">
            Pronto para Fazer a Diferença?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Cada doação conta. Juntos, podemos transformar vidas
            e construir um futuro melhor para quem mais precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onDonateClick}
              size="lg"
              className="bg-white text-[#F5463A] hover:bg-gray-100"
            >
              Ver Informações Completas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#F5463A] hover:bg-gray-100"
              onClick={() => {
                const phone = "5511952692300";
                const message =
                  "Olá! Gostaria de fazer uma doação para a Corrente do Bem.";
                window.open(
                  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                  "_blank",
                );
              }}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}