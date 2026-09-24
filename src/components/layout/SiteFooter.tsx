import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { contact, navLinks, services } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-soot pb-28 md:pb-0">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div className="space-y-5">
          <BrandMark className="-ml-1" />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Почистване, отпушване и ремонт на комини и отдушници. Изработка на
            шапки за комини. Над 20 години опит.
          </p>
          <div className="flex gap-2">
            <a
              href={contact.phoneHref}
              aria-label="Обадете се"
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <FaFacebookF className="size-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Страници
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Услуги
          </h3>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-6">
          <p>© {new Date().getFullYear()} Коминочистач · {contact.name}</p>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-1 transition-colors hover:text-primary"
          >
            {contact.phoneDisplay} <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden
        className="pointer-events-none relative -mb-[0.22em] text-center font-display text-[17vw] leading-none font-bold tracking-tighter text-foreground/[0.035] select-none md:text-[12.5rem]"
      >
        КОМИНИ
      </p>
    </footer>
  );
}
