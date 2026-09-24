import { AboutIntro } from "@/components/about/AboutIntro";
import { PhotoGallery } from "@/components/about/PhotoGallery";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PricingCta } from "@/components/home/PricingCta";
import { galleryImages } from "@/data/gallery-images";
import { usePageMeta } from "@/lib/seo";

export function AboutPage() {
  usePageMeta({
    title: "Услуги и снимки | Коминочистач",
    description:
      "Почистване на комини с четки и промишлена прахосмукачка — без прах в дома. Отпушване, ремонт на комини и отдушници. Вижте снимки от реална работа.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="Услуги и начин на работа"
        title={
          <>
            Чист комин, <span className="text-ember">чист дом</span>
          </>
        }
        description="Професионално почистване, отпушване и ремонт на комини и отдушници — бързо, чисто и с внимание към детайла."
      />

      <AboutIntro />

      <section id="gallery" className="mx-auto max-w-6xl px-5 pb-24 md:px-6 md:pb-32">
        <Reveal className="mb-12">
          <SectionHeading
            eyebrow={`Галерия · ${galleryImages.length} снимки`}
            title="Работата говори сама"
            description="Докоснете снимка, за да я разгледате на цял екран."
          />
        </Reveal>
        <PhotoGallery />
      </section>

      <PricingCta />
    </>
  );
}
