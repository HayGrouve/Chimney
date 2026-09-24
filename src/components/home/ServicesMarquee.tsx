import { Flame } from "lucide-react";
import { services } from "@/data/site";

export function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div
      aria-hidden
      className="relative -mt-px overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground"
    >
      <div className="flex w-max animate-marquee gap-8">
        {items.map((service, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-sm font-semibold tracking-tight whitespace-nowrap uppercase md:text-base"
          >
            {service.title}
            <Flame className="size-4 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
