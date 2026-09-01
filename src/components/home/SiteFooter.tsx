import { Link } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo-transparent.png";

const SiteFooter = () => {
  return (
    <footer className="border-t border-ink/10 bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <img src={logo} alt="izperi.me лого" className="h-10 w-auto" loading="lazy" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Професионално пране на мека мебел и автомобилни салони във Велико Търново
              и региона. Малък бизнес, създаден през 2023 г.
            </p>
            <a
              href="tel:+359884555884"
              className="mt-5 inline-block font-display text-lg font-bold text-ink transition-opacity hover:opacity-70"
            >
              +359 884 555 884
            </a>
            <p className="mt-2 text-[15px] text-ink-soft">
              гр. Велико Търново, ж.к. Бузлуджа, ул. Георги Измирлиев 17
            </p>
          </div>

          <nav aria-label="Услуги">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Услуги във Велико Търново
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}`}
                    className="text-[15px] text-ink transition-colors hover:text-ink-soft hover:underline decoration-primary decoration-2 underline-offset-4"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-[14px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} izperi<span className="font-semibold">.me</span> — Всички
            права запазени
          </p>
          <p>Велико Търново и региона</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
