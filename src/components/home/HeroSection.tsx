import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { CallButton } from "@/components/common/CallButton";
import { Embers } from "@/components/common/Embers";
import heroBg from "@/assets/images/jumbotron-img.jpg";
import selfie from "@/assets/images/selfie.jpg";

const highlights = [
  { value: "20+", label: "години опит" },
  { value: "0", label: "прах в дома" },
  { value: "1", label: "обаждане е достатъчно" },
];

export function HeroSection() {
  return (
    <section className="grain relative flex items-center overflow-hidden bg-soot">
      {/* Background photo, slowly pushed in */}
      <img
        src={heroBg}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[70%_center] opacity-70 motion-safe:animate-[heroZoom_30s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      {/* Warm glow rising from below */}
      <div className="absolute -bottom-40 left-1/4 h-96 w-[40rem] animate-flicker rounded-full bg-primary/25 blur-[120px]" />

      <Embers className="z-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">

            <h1 className="text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Запушен
              <br />
              <span className="text-ember">комин?</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:150ms] [animation-fill-mode:both] md:text-xl">
              Професионално почистване, отпушване и ремонт на комини и
              отдушници. Изработвам и шапки за комини.
            </p>

            <div className="mt-9 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:300ms] [animation-fill-mode:both] sm:flex-row sm:items-center">
              <CallButton size="lg" />
              <Link
                to="/about"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-7 font-semibold backdrop-blur-md transition-colors hover:border-foreground/30 hover:bg-foreground/10"
              >
                Вижте работата ми
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-foreground/10 pt-6 animate-in fade-in duration-1000 [animation-delay:500ms] [animation-fill-mode:both]">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {item.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Personal card */}
          <figure className="hidden w-72 rotate-2 rounded-3xl border border-foreground/10 bg-background/40 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0 lg:block animate-in fade-in slide-in-from-right-8 duration-1000 [animation-delay:400ms] [animation-fill-mode:both]">
            <img
              src={selfie}
              alt="Милан Манчев на покрив до два комина"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <figcaption className="flex items-center justify-between px-2 pt-3 pb-1">
              <span>
                <span className="block font-display text-sm font-semibold">Милан Манчев</span>
                <span className="text-xs text-muted-foreground">Вашият коминочистач</span>
              </span>
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Flame className="size-4 animate-flicker" />
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

    </section>
  );
}
