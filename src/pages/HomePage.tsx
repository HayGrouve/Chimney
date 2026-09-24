import { AboutTeaser } from "@/components/home/AboutTeaser";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { MaintenanceTip } from "@/components/home/MaintenanceTip";
import { PricingCta } from "@/components/home/PricingCta";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ServicesMarquee } from "@/components/home/ServicesMarquee";
import { usePageMeta } from "@/lib/seo";

export function HomePage() {
  usePageMeta({
    title: "Коминочистач | Почистване и отпушване на комини",
    description:
      "Професионално почистване, отпушване и ремонт на комини и отдушници. Изработка на шапки за комини. Свържете се с мен!",
    path: "/",
  });

  return (
    <>
      <HeroSection />
      <ServicesMarquee />
      <ServicesGrid />
      <MaintenanceTip />
      <AboutTeaser />
      <ProcessSteps />
      <GalleryPreview />
      <PricingCta />
    </>
  );
}
