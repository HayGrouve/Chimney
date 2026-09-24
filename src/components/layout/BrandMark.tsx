import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.jpg";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Коминочистач — начало"
      className={cn(
        "group flex items-center gap-3 rounded-full py-1 pr-3 pl-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <span className="relative size-10 overflow-hidden rounded-full bg-white ring-2 ring-primary/40 transition-transform duration-500 group-hover:rotate-[-8deg] md:size-11">
        <img src={logo} alt="" className="size-full scale-110 object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-tight md:text-base">
          Коминочистач
        </span>
        <span className="mt-1 text-[11px] text-muted-foreground">Милан Манчев</span>
      </span>
    </Link>
  );
}
