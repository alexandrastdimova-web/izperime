import { Sparkles, Shield, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Високо качество",
      description: "Професионална техника за отлични резултати",
    },
    {
      icon: Shield,
      title: "Надеждност",
      description: "Опитен екип с доказани умения",
    },
    {
      icon: Leaf,
      title: "Еко препарати",
      description: "Безопасни за хора и домашни любимци",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            За нас
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ние сме професионален екип, който се занимава с дълбоко изпиране на мека мебел, 
            килими, матраци и авто салони. Работим с висококачествена техника и екологични 
            препарати, за да постигаме безупречни резултати.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
