import { Link, NavLink } from "react-router-dom";
import { BsFillHouseDoorFill, BsInfoCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { to: "/", label: "Начало", icon: BsFillHouseDoorFill },
  { to: "/about", label: "Информация", icon: BsInfoCircleFill },
  { to: "/contact", label: "Контакти", icon: MdContactPhone },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-primary"
        >
          <BsFillHouseDoorFill className="size-5" />
          <span className="font-semibold">Коминочистач</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                  isActive && "bg-muted text-primary",
                )
              }
            >
              <Icon className="size-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
