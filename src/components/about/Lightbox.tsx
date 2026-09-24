import { useEffect, useRef, type KeyboardEvent, type TouchEvent } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery-images";
import { cn } from "@/lib/utils";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

const SWIPE_THRESHOLD = 50;

export function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const open = index !== null;
  const count = images.length;

  const go = (direction: -1 | 1) => {
    if (index === null) return;
    onIndexChange((index + direction + count) % count);
  };

  useEffect(() => {
    if (index === null) return;
    preloadImage(images[(index - 1 + count) % count].src);
    preloadImage(images[(index + 1) % count].src);

    thumbsRef.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index, images, count]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    go(event.key === "ArrowLeft" ? -1 : 1);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta > 0 ? -1 : 1);
  };

  const current = index !== null ? images[index] : null;

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <DialogPrimitive.Popup
          className="fixed inset-0 z-50 flex flex-col outline-none transition-all duration-300 data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0"
          onKeyDown={handleKeyDown}
        >
          <DialogPrimitive.Title className="sr-only">
            {current?.alt ?? "Галерия"}
          </DialogPrimitive.Title>

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-2 text-white md:px-6">
            <p className="font-display text-sm tabular-nums">
              <span className="text-flame">{(index ?? 0) + 1}</span>
              <span className="text-white/40"> / {count}</span>
            </p>
            <DialogPrimitive.Close
              className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label="Затвори"
            >
              <X className="size-5" />
            </DialogPrimitive.Close>
          </div>

          {/* Stage */}
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {current && (
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                decoding="async"
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl select-none animate-in fade-in zoom-in-[0.98] duration-300"
                draggable={false}
              />
            )}

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Предишна снимка"
              className="absolute left-4 hidden size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 md:flex"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Следваща снимка"
              className="absolute right-4 hidden size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 md:flex"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* Thumbnails + mobile controls */}
          <div className="flex items-center gap-2 px-2 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Предишна снимка"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div
              ref={thumbsRef}
              className="flex-1 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none]"
            >
              <div className="mx-auto flex w-max gap-2 px-1">
                {images.map((image, i) => (
                  <button
                    key={image.src}
                    type="button"
                    data-index={i}
                    onClick={() => onIndexChange(i)}
                    aria-label={`Снимка ${i + 1}`}
                    aria-current={i === index}
                    className={cn(
                      "size-12 shrink-0 overflow-hidden rounded-lg ring-2 transition-all md:size-14",
                      i === index
                        ? "opacity-100 ring-primary"
                        : "opacity-40 ring-transparent hover:opacity-80",
                    )}
                  >
                    <img src={image.src} alt="" loading="lazy" className="size-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Следваща снимка"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
