import { Sofa, Layers, Bed, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Пране на мека мебел",
      description: "Професионално почистване на дивани, фотьойли и тапицирани мебели с дълбоко проникваща техника.",
    },
    {
      icon: Layers,
      title: "Пране на килими",
      description: "Ефективно изпиране на килими от всякакъв тип с премахване на петна, миризми и алергени.",
    },
    {
      icon: Bed,
      title: "Пране на матраци",
      description: "Дълбоко почистване на матраци за хигиенична и здравословна среда за сън.",
    },
    {
      icon: Car,
      title: "Пране на авто салони",
      description: "Цялостно почистване на автомобилни седалки, таван, килимчета и тапицерия.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълна гама от професионални почистващи услуги
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-lg rounded-2xl"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
