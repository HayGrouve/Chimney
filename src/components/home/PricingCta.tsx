import { ArrowUpRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { CallButton } from "@/components/common/CallButton";
import { Reveal } from "@/components/common/Reveal";
import { contact } from "@/data/site";
import bigKomin from "@/assets/images/big-komin.jpg";

export function PricingCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-6">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-card">
          <img
            src={bigKomin}
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-40 md:w-1/2 md:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/30 md:via-card md:via-50%" />

          <div className="relative z-10 max-w-xl space-y-6 p-8 md:p-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Цени и срокове
            </p>
            <h2 className="text-3xl leading-tight font-semibold md:text-5xl">
              Всяка поръчка е <span className="text-ember">индивидуална</span>
            </h2>
            <p className="leading-relaxed text-foreground/75 md:text-lg">
              Сроковете и цената зависят от състоянието на комина. Свържете се
              с мен за консултация — ще отговоря възможно най-бързо.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <CallButton size="lg" />
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-6 font-semibold backdrop-blur-md transition-colors hover:bg-background/70"
              >
                <FaFacebookF className="size-4" /> Пишете ми
                <ArrowUpRight className="size-4 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
