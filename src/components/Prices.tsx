import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Prices = () => {
  const priceItems = [
    {
      title: "Пране на диван",
      price: "от 25 лв.",
      features: ["Двуместен диван", "Дълбоко почистване", "Еко препарати"],
    },
    {
      title: "Пране на килими",
      price: "от 3 лв./кв.м",
      features: ["Всякакви размери", "Премахване на петна", "Бърза услуга"],
    },
    {
      title: "Пране на матрак",
      price: "от 20 лв.",
      features: ["Едностранно пране", "Хигиенизация", "Противоалергенно"],
    },
    {
      title: "Пране на авто салон",
      price: "от 40 лв.",
      features: ["Седалки и таван", "Килимчета", "Багажник"],
    },
  ];

  return (
    <section id="prices" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Цени
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачни цени без скрити разходи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {priceItems.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all hover:shadow-lg rounded-2xl"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  {item.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Цените са ориентировъчни и зависят от състоянието и размера на обекта
        </p>
      </div>
    </section>
  );
};

export default Prices;
