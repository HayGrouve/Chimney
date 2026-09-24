import { Link, useLocation } from "react-router-dom";
import { House } from "lucide-react";
import { Embers } from "@/components/common/Embers";
import { usePageMeta } from "@/lib/seo";

export function NotFoundPage() {
  const { pathname } = useLocation();
  usePageMeta({
    title: "Грешна страница | Коминочистач",
    description: "Тази страница не съществува.",
    path: pathname,
    noindex: true,
  });

  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-soot px-5 text-center">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 animate-flicker rounded-full bg-primary/20 blur-[120px]"
      />
      <Embers />
      <div className="relative z-10 space-y-6">
        <p className="text-ember font-display text-[clamp(6rem,25vw,14rem)] leading-none font-bold tracking-tighter">
          404
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">Грешна страница!</h1>
        <p className="mx-auto max-w-sm text-muted-foreground">
          Тази страница изчезна като дим в комина.
        </p>
        <Link
          to="/"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-flame"
        >
          <House className="size-4" /> Към началото
        </Link>
      </div>
    </section>
  );
}
