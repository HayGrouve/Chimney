import { PageHero } from "@/components/common/PageHero";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { usePageMeta } from "@/lib/seo";

export function ContactPage() {
  usePageMeta({
    title: "Контакти | Коминочистач",
    description:
      "Обадете се на 0895 655 895 за почистване, отпушване или ремонт на комин. Милан Манчев — коминочистач с над 20 години опит.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        eyebrow="Контакти"
        title={
          <>
            Да поговорим за <span className="text-ember">вашия комин</span>
          </>
        }
        description="Всяка поръчка е индивидуална — сроковете и цената зависят от състоянието на комина. Свържете се с мен за консултация."
      />
      <ContactPanel />
      <ProcessSteps />
    </>
  );
}
