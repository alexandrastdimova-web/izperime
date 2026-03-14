import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+359 884 555 884",
      action: "tel:+359884555884",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "гр. Велико Търново, ж.к. Бузлуджа, ул. Георги Измирлиев 17",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакти
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свържете се с нас за безплатна оферта или запазване на час
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                {item.action ? (
                  <a
                    href={item.action}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
          Работим във Велико Търново и региона. Прането на мека мебел извършваме на място във вашия дом или офис, а автомобилните салони почистваме в нашата база на ул. Георги Измирлиев 17, ж.к. Бузлуджа.
        </p>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="tel:+359884555884">Обади ни се сега</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
