import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <HeroSection />
      <FeatureCards />
    </div>
  );
}
