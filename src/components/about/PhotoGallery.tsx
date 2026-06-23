import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryImages } from "@/data/gallery-images";

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (
        (current + direction + galleryImages.length) % galleryImages.length
      );
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const prev =
      galleryImages[
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      ];
    const next =
      galleryImages[(selectedIndex + 1) % galleryImages.length];

    preloadImage(prev.src);
    preloadImage(next.src);
  }, [selectedIndex]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    (
      event as KeyboardEvent & { preventBaseUIHandler?: () => void }
    ).preventBaseUIHandler?.();
    goTo(event.key === "ArrowLeft" ? -1 : 1);
    lightboxRef.current?.focus();
  };

  const selected =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group cursor-pointer overflow-hidden rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-56 w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent
          className="max-w-4xl border-border bg-card p-2 data-open:animate-none data-closed:animate-none sm:max-w-4xl"
          overlayClassName="bg-black/60 backdrop-blur-none data-open:animate-none data-closed:animate-none"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">
            {selected?.alt ?? "Гalerия"}
          </DialogTitle>
          {selected && (
            <div
              ref={lightboxRef}
              tabIndex={-1}
              className="relative outline-none"
            >
              <img
                src={selected.src}
                alt={selected.alt}
                decoding="async"
                className="max-h-[80vh] w-full rounded-md object-contain"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="secondary"
                  size="icon"
                  tabIndex={-1}
                  onClick={() => goTo(-1)}
                  aria-label="Предишна снимка"
                >
                  <AiOutlineLeft />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="secondary"
                  size="icon"
                  tabIndex={-1}
                  onClick={() => goTo(1)}
                  aria-label="Следваща снимка"
                >
                  <AiOutlineRight />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
