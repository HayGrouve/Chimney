import type { MouseEvent } from "react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/data/site";

// Track the cursor so each card can render a spotlight glow under it.
function trackPointer(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export function ServicesGrid() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-24 md:px-6 md:py-32">
      <div aria-hidden className="bg-bricks absolute inset-0 -z-10" />

      <Reveal>
        <SectionHeading
          eyebrow="Услуги"
          title={
            <>
              Всичко за вашия комин — <span className="text-ember">от покрива до камината</span>
            </>
          }
          description="Работя бързо, чисто и с внимание към детайла. Жилищата и работното място остават защитени."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={(i % 3) * 90}>
            <article
              onMouseMove={trackPointer}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-6 md:p-7 transition-colors duration-300 hover:border-primary/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), oklch(0.74 0.17 55 / 0.14), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between md:mb-10">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 text-primary ring-1 ring-primary/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-xs text-muted-foreground/60 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
