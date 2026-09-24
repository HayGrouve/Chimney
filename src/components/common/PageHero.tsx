import type { ReactNode } from "react";
import { Embers } from "@/components/common/Embers";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden border-b border-border bg-soot">
      <div
        aria-hidden
        className="absolute -top-32 right-0 h-96 w-[36rem] animate-flicker rounded-full bg-primary/20 blur-[120px]"
      />
      <div aria-hidden className="bg-bricks absolute inset-0" />
      <Embers className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-36 pb-16 md:px-6 md:pt-44 md:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="h-px w-8 bg-primary/60" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75 animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:150ms] [animation-fill-mode:both]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
