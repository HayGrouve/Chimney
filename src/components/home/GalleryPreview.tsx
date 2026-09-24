import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryImages } from "@/data/gallery-images";
import { cn } from "@/lib/utils";

// Hand-picked shots and their slot in the bento grid.
const picks = [
  { index: 2, className: "col-span-2 row-span-2" },
  { index: 5, className: "row-span-2" },
  { index: 7, className: "" },
  { index: 4, className: "" },
  { index: 13, className: "" },
  { index: 18, className: "row-span-2" },
  { index: 8, className: "" },
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-6 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <SectionHeading
            eyebrow="От терена"
            title="Реална работа, реални комини"
            description="Снимки от почистване, отпушване и ремонт — преди, по време и след работа."
          />
        </Reveal>
        <Reveal delay={100}>
          <Link
            to="/about#gallery"
            className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Цялата галерия ({galleryImages.length})
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="mt-12 grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {picks.map(({ index, className }) => {
            const image = galleryImages[index];
            return (
              <Link
                key={image.src}
                to={`/about?photo=${index}#gallery`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10",
                  className,
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
