import { Sofa, Car, Sparkles, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Пране на мека мебел",
      description: "Професионално пране на дивани, матраци, столове и килими с дълбоко почистване на тапицерията и премахване на прах, петна и алергени.\n\nМеката мебел у дома събира голямо количество прах, бактерии и замърсявания, които често не се виждат с просто око. Затова редовното изпиране е важно не само за външния вид, но и за здравословната среда у дома.\n\nИзпирането на дивани и матраци поне два пъти годишно НЕ Е САМО ПРЕПОРЪЧИТЕЛНО, А Е ЗАДЪЛЖИТЕЛНО ЗА ДОБРА ХИГИЕНА.",
    },
    {
      icon: Car,
      title: "Пране на автомобилни салони",
      description: "Цялостно почистване на автомобилния салон, включващо седалки, под, стелки, багажник и всички текстилни повърхности.\n\nПремахваме натрупана мръсотия, петна и неприятни миризми, за да върнем чистия и свеж вид на интериора на автомобила.",
    },
    {
      icon: Sparkles,
      title: "Детайлинг за автомобили",
      description: "Професионален детайлинг на автомобили с внимание към всеки детайл – от интериора до външния вид на автомобила.\n\nДетайлингът включва прецизно почистване, освежаване и възстановяване на различни повърхности, така че автомобилът да изглежда максимално близо до нов.",
    },
    {
      icon: Heart,
      title: "Подхранване на кожени авто салони",
      description: "Почистване и подхранване на кожени автомобилни салони със специализирани препарати за кожа. Процедурата премахва замърсяванията, възстановява естествената мекота на кожата и предпазва материала от изсушаване и напукване.\n\nРедовната грижа за кожения салон помага да се запази неговият луксозен вид, еластичност и дълготрайност.",
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

        <div className="grid md:grid-cols-2 gap-6">
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
                  <CardDescription className="text-muted-foreground whitespace-pre-line">
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
