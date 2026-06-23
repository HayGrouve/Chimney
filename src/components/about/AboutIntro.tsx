import { Separator } from "@/components/ui/separator";

export function AboutIntro() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Допълнителна информация
      </h1>

      <div className="space-y-6 border-l-2 border-primary pl-4">
        <p className="leading-relaxed text-muted-foreground">
          Почистването се извършва по следния начин, димоотвода се почиства с
          различен диаметър четки и става, като нов. Саждите и нагара, които
          падат в ревизионния отвор се издърпват със строителна машина, като
          преди това всичко се облепва и няма никаква прах.
        </p>
        <Separator />
        <p className="leading-relaxed text-muted-foreground">
          Отпушване и почистване на комини. Много хора не знаят, че камината
          иска поддържане (обслужване) на всеки 10 кубически изгорели дървета.
          Камината е като на колата двигателя, който например на всеки 50 000
          километра иска сервизна поддръжка. Мога да предложа професионалните си
          услуги, като коминочистач.
        </p>
      </div>
    </section>
  );
}
