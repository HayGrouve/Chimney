import { AboutIntro } from "@/components/about/AboutIntro";
import { PhotoGallery } from "@/components/about/PhotoGallery";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <AboutIntro />
      <PhotoGallery />
    </div>
  );
}
