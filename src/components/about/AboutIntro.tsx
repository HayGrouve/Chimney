import { Separator } from "@/components/ui/separator";

export function AboutIntro() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Услуги и начин на работа
      </h1>

      <div className="space-y-6 border-l-2 border-primary pl-4">
        <p className="leading-relaxed text-muted-foreground">
          Почистването се извършва с четки с различен диаметър — димоотводът
          се почиства до състояние „като нов“. Сажди и нагар от ревизионния
          отвор се отстраняват с промишлена прахосмукачка. Работното място се
          предпазва и процесът протича без прах.
        </p>
        <Separator />
        <p className="leading-relaxed text-muted-foreground">
          Отпушване и редовно почистване на комини. Камината, подобно на
          двигателя на автомобила, изисква поддръжка — препоръчително е
          почистване след около 10 кубика изгорели дърва. Предлагам
          професионални услуги като коминочистач.
        </p>
      </div>
    </section>
  );
}
