import { Phone } from "lucide-react";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

type CallButtonProps = {
  size?: "md" | "lg";
  showNumber?: boolean;
  className?: string;
};

/** Primary call-to-action: glowing ember pill that dials the phone. */
export function CallButton({ size = "md", showNumber = true, className }: CallButtonProps) {
  return (
    <a
      href={contact.phoneHref}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-primary font-semibold text-primary-foreground",
        "shadow-[0_0_0_1px_oklch(0.84_0.15_80/0.4),0_10px_40px_-10px_oklch(0.74_0.17_55/0.8)]",
        "transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame hover:shadow-[0_0_0_1px_oklch(0.84_0.15_80/0.6),0_14px_50px_-8px_oklch(0.74_0.17_55)]",
        "focus-visible:ring-4 focus-visible:ring-ring/40 focus-visible:outline-none active:translate-y-0",
        size === "md" ? "h-11 px-5 text-sm" : "h-14 px-7 text-base",
        className,
      )}
    >
      <span className="relative flex size-6 items-center justify-center rounded-full bg-primary-foreground/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary-foreground/20 [animation-duration:2.5s]" />
        <Phone className="relative size-3.5" />
      </span>
      {showNumber ? contact.phoneDisplay : "Обадете се"}
    </a>
  );
}
