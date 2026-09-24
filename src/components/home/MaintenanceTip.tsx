import { Flame } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Embers } from "@/components/common/Embers";

export function MaintenanceTip() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-6">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/20 via-card to-card p-8 md:p-14">
          <Embers className="opacity-60" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
            <p className="font-display leading-none font-bold tracking-tighter">
              <span className="text-ember text-[6rem] md:text-[9rem]">10</span>
              <span className="ml-1 align-top text-3xl text-flame md:text-5xl">м³</span>
            </p>
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                <Flame className="size-4" /> Полезен съвет
              </p>
              <h2 className="text-2xl leading-tight font-semibold md:text-4xl">
                Кога да почистите комина?
              </h2>
              <p className="max-w-xl leading-relaxed text-foreground/75 md:text-lg">
                Препоръчително е почистване след около 10 кубика изгорели дърва.
                Редовната поддръжка пази тягата силна, а дома — безопасен.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
