import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CallButton } from "@/components/common/CallButton";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border pr-2 pl-2 transition-all duration-500 md:h-16 md:pr-2.5",
          scrolled
            ? "border-border bg-background/75 shadow-[0_10px_40px_-15px_black] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <BrandMark />

        <nav aria-label="Основна навигация" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  isActive && "bg-foreground/[0.07] text-foreground",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton className="hidden md:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
