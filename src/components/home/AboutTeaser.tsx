import { Link } from "react-router-dom";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import selfie from "@/assets/images/selfie.jpg";
import vutre from "@/assets/images/vutre.jpg";

const points = [
  "Над 20 години опит в България и в чужбина",
  "Четки с различен диаметър за всеки димоотвод",
  "Промишлена прахосмукачка — без прах в дома",
  "Индивидуална оценка на всяка поръчка",
];

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-6 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/5 to-transparent blur-2xl"
            />
            <img
              src={selfie}
              alt="Милан Манчев — коминочистач, на покрив"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-foreground/10 lg:w-4/5"
            />
            <img
              src={vutre}
              alt="Почистване на камина отвътре с прахосмукачка"
              loading="lazy"
              className="absolute -right-2 -bottom-10 w-1/2 rounded-2xl border-4 border-background object-cover shadow-2xl sm:-right-6 lg:right-0"
            />
            <div className="absolute top-6 -left-3 rounded-2xl border border-border bg-background/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-6">
              <p className="font-display text-4xl font-bold text-ember">20+</p>
              <p className="text-xs text-muted-foreground">години опит</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          <SectionHeading
            eyebrow="За мен"
            title="Здравейте, аз съм Милан"
            description="Професионален коминочистач с над 20 години опит в България и в чужбина. Работя бързо, чисто и с внимание към детайла."
          />

          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-2xl border border-border bg-card/50 p-4 text-sm leading-snug"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <blockquote className="relative border-l-2 border-primary pl-5 text-foreground/80 italic">
            <Quote className="absolute -top-2 -left-3 size-5 rotate-180 bg-background text-primary" />
            Камината, подобно на двигателя на автомобила, изисква поддръжка.
          </blockquote>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 font-semibold text-primary"
          >
            Повече за начина ми на работа
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
