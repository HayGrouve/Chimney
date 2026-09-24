import { BrushCleaning, Gauge, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import otvun from "@/assets/images/otvun.jpg";
import komin2 from "@/assets/images/komin-2.jpg";

const pillars = [
  {
    icon: BrushCleaning,
    title: "Четки с различен диаметър",
    text: "Димоотводът се почиства до състояние „като нов“.",
  },
  {
    icon: ShieldCheck,
    title: "Без прах",
    text: "Работното място се предпазва, а сажди и нагар от ревизионния отвор се отстраняват с промишлена прахосмукачка.",
  },
  {
    icon: Gauge,
    title: "Редовна поддръжка",
    text: "Препоръчително е почистване след около 10 кубика изгорели дърва.",
  },
];

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-6 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal className="space-y-8">
          <p className="text-2xl leading-snug font-medium tracking-tight md:text-3xl">
            Камината, подобно на двигателя на автомобила,{" "}
            <span className="text-ember">изисква поддръжка.</span>
          </p>
          <div className="space-y-5 leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Почистването се извършва с четки с различен диаметър — димоотводът
              се почиства до състояние „като нов“. Сажди и нагар от ревизионния
              отвор се отстраняват с промишлена прахосмукачка. Работното място
              се предпазва и процесът протича без прах.
            </p>
            <p>
              Отпушване и редовно почистване на комини. Препоръчително е
              почистване след около 10 кубика изгорели дърва. Предлагам
              професионални услуги като коминочистач.
            </p>
          </div>

          <div className="grid gap-3">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-sans font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative hidden min-h-[36rem] lg:block">
          <img
            src={komin2}
            alt="Почистване на многоканален комин с четка"
            loading="lazy"
            className="absolute top-0 right-0 h-[80%] w-[72%] rounded-[2rem] object-cover shadow-2xl ring-1 ring-foreground/10"
          />
          <img
            src={otvun}
            alt="Комин — външен изглед"
            loading="lazy"
            className="absolute bottom-0 left-0 h-[52%] w-[50%] rounded-[1.5rem] border-4 border-background object-cover shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
