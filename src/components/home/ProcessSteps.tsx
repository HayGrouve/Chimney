import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/data/site";

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Как работя"
          title="Просто, бързо и чисто"
          align="center"
        />
      </Reveal>

      <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {/* Connecting line */}
        <div
          aria-hidden
          className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 md:block"
        />
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:hidden"
        />
        {processSteps.map((step, i) => (
          <li key={step.title}>
            <Reveal
              delay={i * 120}
              className="relative flex gap-6 md:flex-col md:items-center md:text-center"
            >
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background font-display text-lg font-semibold text-primary shadow-[0_0_30px_-5px_oklch(0.74_0.17_55/0.5)]">
                {i + 1}
              </span>
              <div className="pt-2 md:pt-0">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
