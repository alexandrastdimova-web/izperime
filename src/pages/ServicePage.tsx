import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import logo from "@/assets/logo.jpg";
import { SITE_URL, getService, services } from "@/data/services";

const ServicePage = () => {
  const { pathname } = useLocation();
  const service = getService(pathname.replace(/^\/+|\/+$/g, ""));

  if (!service) return <NotFound />;

  const url = `${SITE_URL}/${service.slug}`;
  const others = services.filter((item) => item.slug !== service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.serviceName,
    description: service.description,
    url,
    areaServed: {
      "@type": "Place",
      name: "Велико Търново и региона",
    },
    provider: {
      "@type": "CleaningService",
      name: "izperi.me",
      telephone: "+359 884 555 884",
      url: `${SITE_URL}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Георги Измирлиев 17",
        addressLocality: "Велико Търново",
        postalCode: "5000",
        addressCountry: "BG",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Начало",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.h1,
        item: url,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="izperi.me лого" className="h-12 w-auto" />
          </Link>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            <a href="tel:+359884555884">Обади се</a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Навигация" className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.h1}</span>
        </nav>

        <article className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {service.h1}
          </h1>
          <p className="text-lg text-foreground/80 mb-8">{service.intro}</p>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 shadow-lg mb-12"
          >
            <a href="tel:+359884555884">
              <Phone className="mr-2 h-5 w-5" /> Запази час: +359 884 555 884
            </a>
          </Button>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Как работим
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {service.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {service.priceItems && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ориентировъчни цени
              </h2>
              <Card className="border-2 rounded-2xl">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {service.priceItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Посочените цени са ориентировъчни диапазони. Точна цена ви даваме след
                    оглед на място или след като ни изпратите подробности и снимки.
                  </p>
                </CardContent>
              </Card>
            </section>
          )}


          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Често задавани въпроси
            </h2>
            <div className="space-y-6">
              {service.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Контакти
            </h2>
            <p className="text-muted-foreground mb-2">
              Телефон:{" "}
              <a
                href="tel:+359884555884"
                className="text-primary hover:underline font-medium"
              >
                +359 884 555 884
              </a>
            </p>
            <p className="text-muted-foreground">
              База: гр. Велико Търново, ж.к. Бузлуджа, ул. Георги Измирлиев 17
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Други наши услуги
            </h2>
            <ul className="space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/${item.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {item.navLabel}
                  </a>
                </li>
              ))}
              <li>
                <a href="/" className="text-primary hover:underline font-medium">
                  Начална страница на izperi.me
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
