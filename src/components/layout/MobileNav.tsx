import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { CallButton } from "@/components/common/CallButton";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contact, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex size-11 items-center justify-center rounded-full border border-border bg-foreground/5 transition-colors hover:bg-foreground/10 md:hidden"
        aria-label="Отвори меню"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] max-w-sm gap-0 border-border bg-background/95 p-6 backdrop-blur-xl"
      >
        <SheetTitle className="font-display text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Меню
        </SheetTitle>

        <nav aria-label="Мобилна навигация" className="mt-8 flex flex-col">
          {navLinks.map(({ to, label, icon: Icon }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-4 border-b border-border py-5 text-2xl font-semibold tracking-tight transition-colors font-display",
                  isActive ? "text-primary" : "text-foreground hover:text-primary",
                )
              }
            >
              <span className="text-xs font-medium text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <span className="flex-1">{label}</span>
              <Icon className="size-5 opacity-50 transition-opacity group-hover:opacity-100" />
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-10">
          <CallButton size="lg" className="w-full" />
          <a
            href={contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            <FaFacebookF className="size-3.5" /> Facebook
            <ArrowUpRight className="size-4 opacity-60" />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
