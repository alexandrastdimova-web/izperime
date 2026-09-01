import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent.png";
import { scrollToSection } from "@/lib/scrollToSection";

const serviceLinks = [
  { label: "Пране на дивани", to: "/prane-na-divani-veliko-tarnovo" },
  { label: "Пране на матраци", to: "/prane-na-matraci-veliko-tarnovo" },
  { label: "Пране на автосалони", to: "/prane-na-avtomobilni-saloni-veliko-tarnovo" },
  {
    label: "Почистване на кожен салон",
    to: "/pochistvane-podhranvane-kozheni-saloni-veliko-tarnovo",
  },
  { label: "Детайлинг на автомобили", to: "/interioren-detailing-veliko-tarnovo" },
];

const anchorItems = [
  { label: "Техника и препарати", hash: "tech" },
  { label: "Защо да изберете нас", hash: "about" },
  { label: "Цени", hash: "prices" },
  { label: "Галерия", hash: "gallery" },
  { label: "Знаете ли, че...", hash: "facts" },
  { label: "Контакти", hash: "contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const goToAnchor = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    setOpen(false);
    setMobileServicesOpen(false);
    if (location.pathname === "/") {
      event.preventDefault();
      scrollToSection(hash);
      window.history.replaceState(null, "", `/#${hash}`);
    } else {
      event.preventDefault();
      navigate(`/#${hash}`);
    }
  };

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cream">
      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Row is relative; logo is absolutely centered in the whole viewport-wide row */}
        <div className="relative flex items-center justify-center min-h-[72px] py-3 md:py-4">
          <nav
            className="absolute left-0 hidden lg:flex items-center gap-4 xl:gap-6"
            aria-label="Основна навигация"
          >
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={openMenu}
                onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
                className="flex items-center gap-1 text-[13.5px] xl:text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Услуги
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-[280px] rounded-2xl border border-ink/10 bg-cream p-2 shadow-lg">
                  {serviceLinks.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {anchorItems.map((item) => (
              <a
                key={item.hash}
                href={`/#${item.hash}`}
                onClick={(e) => goToAnchor(e, item.hash)}
                className="relative whitespace-nowrap text-[13.5px] xl:text-[15px] font-medium text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Link to="/" className="flex items-center justify-center" aria-label="izperi.me – начало">
            <img
              src={logo}
              alt="izperi.me лого"
              className="w-[140px] md:w-[200px] h-auto max-h-[120px] md:max-h-[160px] object-contain"
            />
          </Link>

          <div className="absolute right-0 hidden lg:flex items-center gap-3">
            <a
              href="tel:+359884555884"
              className="hidden xl:flex items-center gap-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-70"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +359 884 555 884
            </a>
            <Button asChild className="rounded-full bg-ink text-cream hover:bg-ink/90 px-6 h-11 font-medium">
              <a href="/#contact" onClick={(e) => goToAnchor(e, "contact")}>Запази час</a>
            </Button>
          </div>

          {/* Mobile hamburger: absolutely pinned right, vertically centered vs logo, plain 3 lines */}
          <button
            className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center p-2 text-ink transition-colors hover:text-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-cream" aria-label="Мобилна навигация">
          <div className="mx-auto max-w-[1240px] px-5 py-5 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-sand transition-colors"
            >
              Услуги
              <ChevronDown
                className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <ul className="mb-1 flex flex-col gap-1 border-l-2 border-primary/40 pl-3">
                {serviceLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-sand hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {anchorItems.map((item) => (
              <a
                key={item.hash}
                href={`/#${item.hash}`}
                onClick={(e) => goToAnchor(e, item.hash)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-sand transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 rounded-full bg-ink text-cream hover:bg-ink/90 h-12 text-base font-medium"
            >
              <a href="/#contact" onClick={(e) => goToAnchor(e, "contact")}>Запази час</a>
            </Button>
            <a
              href="tel:+359884555884"
              className="mt-2 text-center text-[15px] font-medium text-ink-soft"
            >
              +359 884 555 884
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
