import { Sofa, Car, Sparkles, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services as servicePages } from "@/data/services";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Пране на мека мебел",
      description: "Професионално пране на дивани, матраци и столове с дълбоко почистване на тапицерията и премахване на прах и петна според вида им.\n\nМеката мебел у дома събира голямо количество прах и замърсявания, които често не се виждат с просто око. Затова редовното изпиране е важно не само за външния вид, но и за по-чистата среда у дома.\n\nПрепоръчваме дивани и матраци да се изпират редовно – според употребата, обичайно веднъж или два пъти годишно.",
    },
    {
      icon: Car,
      title: "Пране на автомобилни салони",
      description: "Цялостно почистване на автомобилния салон, включващо седалки, под, стелки, багажник и всички текстилни повърхности.\n\nПремахваме натрупана мръсотия, петна и неприятни миризми, за да върнем чистия и свеж вид на интериора на автомобила.",
    },
    {
      icon: Sparkles,
      title: "Детайлинг за автомобили",
      description: "Професионален детайлинг на автомобили с внимание към всеки детайл – от интериора до външния вид на автомобила.\n\nДетайлингът включва прецизно почистване и освежаване на различните повърхности в купето, с внимание и към трудно достъпните места.",
    },
    {
      icon: Heart,
      title: "Подхранване на кожени авто салони",
      description: "Почистване и подхранване на кожени автомобилни салони със специализирани препарати за кожа. Процедурата премахва замърсяванията и подхранва кожата, така че да е по-мека на допир и с по-свеж вид.\n\nРедовната грижа за кожения салон помага да се запази добрият му вид за по-дълго.",
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

        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Подробно за услугите ни във Велико Търново
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {servicePages.map((page) => (
              <li key={page.slug}>
                <a
                  href={`/${page.slug}`}
                  className="text-primary hover:underline font-medium"
                >
                  {page.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
