import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Shirt,
  Utensils,
  Baby,
  Footprints,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DonationCategoriesProps {
  onDonateClick: () => void;
}

export function DonationCategories({
  onDonateClick,
}: DonationCategoriesProps) {
  const categories = [
    {
      icon: Shirt,
      title: "Roupas",
      description: "Roupas em bom estado para todas as idades",
      image:
        "https://images.unsplash.com/photo-1653508310734-d3f4d0f8dd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBjbG90aGVzJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTk0MzM4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "F5463A",
    },
    {
      icon: Footprints,
      title: "Calçados",
      description: "Sapatos, tênis e sandálias conservados",
      image:
        "https://images.unsplash.com/photo-1591964447401-b6a88f3dafb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lcyUyMGRvbmF0aW9uJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1OTQzMzg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "F5463A",
    },
    {
      icon: Utensils,
      title: "Alimentos",
      description:
        "Alimentos não perecíveis dentro da validade",
      image:
        "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjb21tdW5pdHklMjBoZWxwaW5nfGVufDF8fHx8MTc1OTQzMzg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "F5463A",
    },
    {
      icon: Baby,
      title: "Brinquedos",
      description:
        "Brinquedos seguros e higienizados para crianças",
      image:
        "https://images.unsplash.com/photo-1598838909554-7ed3ccba096d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwZG9uYXRpb24lMjBjaGlsZHJlbiUyMGNoYXJpdHl8ZW58MXx8fHwxNzU5NDMzODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "F5463A",
    },
  ];

  return (
    <section id="doacoes" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O que você pode doar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cada doação faz a diferença na vida de quem precisa.
            Escolha a categoria e veja como sua contribuição
            pode transformar vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-700 dark:border-gray-600"
              >
                <CardHeader className="pb-4">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-[#${category.color}]/20 group-hover:bg-[#${category.color}]/30 transition-colors duration-300`}
                    ></div>
                  </div>
                  <div
                    className={`w-12 h-12 bg-[#${category.color}] rounded-full flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.description}
                  </p>
                  <Button
                    onClick={onDonateClick}
                    className={`w-full bg-[#${category.color}] hover:opacity-90 transition-opacity`}
                  >
                    Saiba Como Doar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Não tem certeza do que doar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nossa equipe pode te ajudar a identificar quais
              doações são mais necessárias no momento. Entre em
              contato conosco!
            </p>
            <Button
              size="lg"
              className="bg-[#F5463A] hover:bg-[#BC4134]"
            >
              <a href="https://api.whatsapp.com/send/?phone=5511952692300&text&type=phone_number&app_absent=0">
                Falar com Nossa Equipe
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}