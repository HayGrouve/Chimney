import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

/** Sticky thumb-reachable call bar on small screens, shown after the user starts scrolling. */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-500 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/85 p-1.5 shadow-[0_-10px_40px_-10px_black] backdrop-blur-xl">
        <a
          href={contact.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.74_0.17_55/0.9)] active:scale-[0.98]"
        >
          <Phone className="size-4" />
          Обадете се · {contact.phoneDisplay}
        </a>
        <a
          href={contact.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex size-12 items-center justify-center rounded-full bg-foreground/5"
        >
          <FaFacebookF className="size-4" />
        </a>
      </div>
    </div>
  );
}
