import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Професионално почистване"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Професионално пране на дивани, матраци, мека мебел, автомобилни салони и детайлинг за автомобили
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Професионално пране на мека мебел във Велико Търново и региона – на място във вашия дом, а за автомобили – в нашата база на ул. Георги Измирлиев 17, ж.к. Бузлуджа.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Запази час
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
