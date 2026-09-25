import { AboutTeaser } from "@/components/home/AboutTeaser";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { PricingCta } from "@/components/home/PricingCta";
import { ServicesGrid } from "@/components/home/ServicesGrid";
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
      <ServicesGrid />
      <AboutTeaser />
      <GalleryPreview />
      <PricingCta />
    </>
  );
}
