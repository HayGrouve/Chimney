import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Expand } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { galleryImages } from "@/data/gallery-images";
import { Lightbox } from "./Lightbox";

export function PhotoGallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const pushedHistoryEntry = useRef(false);

  // The open photo lives in the URL (?photo=N) so the back button closes the lightbox.
  const photoParam = searchParams.get("photo");
  const parsed = photoParam === null ? NaN : Number(photoParam);
  const selectedIndex =
    Number.isInteger(parsed) && parsed >= 0 && parsed < galleryImages.length ? parsed : null;

  const openPhoto = (index: number) => {
    pushedHistoryEntry.current = true;
    setSearchParams({ photo: String(index) }, { preventScrollReset: true });
  };

  const changePhoto = (index: number) =>
    setSearchParams({ photo: String(index) }, { replace: true, preventScrollReset: true });

  const closePhoto = () => {
    if (pushedHistoryEntry.current) {
      pushedHistoryEntry.current = false;
      navigate(-1);
    } else {
      setSearchParams({}, { replace: true, preventScrollReset: true });
    }
  };

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-4">
        {galleryImages.map((image, index) => (
          <Reveal key={image.src} delay={(index % 3) * 80} className="mb-3 break-inside-avoid md:mb-4">
            <button
              type="button"
              onClick={() => openPhoto(index)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-3 bottom-3 flex size-9 translate-y-2 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="size-4" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        index={selectedIndex}
        onIndexChange={changePhoto}
        onClose={closePhoto}
      />
    </>
  );
}
