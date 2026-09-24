import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { Reveal } from "@/components/common/Reveal";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";
import selfie from "@/assets/images/selfie.jpg";

function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay.replaceAll(" ", ""));
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the number stays visible anyway.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-12 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors",
        copied
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
          : "border-border hover:bg-foreground/5",
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Копирано!" : "Копирай номера"}</span>
    </button>
  );
}

export function ContactPanel() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Phone — the main action */}
        <Reveal className="grain relative overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-to-br from-primary/20 via-card to-card p-6 sm:p-8 md:p-12">
          <div
            aria-hidden
            className="absolute -right-20 -bottom-20 size-72 animate-flicker rounded-full bg-primary/25 blur-3xl"
          />
          <div className="relative z-10 flex h-full flex-col">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.74_0.17_55)]">
              <Phone className="size-6" />
            </span>
            <p className="mt-10 text-sm text-muted-foreground">Обадете се директно</p>
            <a
              href={contact.phoneHref}
              className="mt-2 font-display text-[clamp(1.75rem,8vw,3.5rem)] leading-none font-bold tracking-tight whitespace-nowrap transition-colors hover:text-primary"
            >
              {contact.phoneDisplay}
            </a>
            <p className="mt-4 max-w-md text-muted-foreground">
              Ще отговоря възможно най-бързо.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.74_0.17_55/0.8)] transition-all hover:-translate-y-0.5 hover:bg-flame"
              >
                <Phone className="size-4" /> Обади се сега
              </a>
              <CopyPhoneButton />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {/* Who you'll talk to */}
          <Reveal delay={100} className="flex items-center gap-5 rounded-[2rem] border border-border bg-card/60 p-5">
            <img
              src={selfie}
              alt={contact.name}
              className="size-24 shrink-0 rounded-2xl object-cover object-[30%_75%]"
            />
            <div>
              <p className="text-xs text-muted-foreground">Коминочистач</p>
              <p className="mt-1 font-display text-lg font-semibold">{contact.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">Над 20 години опит</p>
            </div>
          </Reveal>

          {/* Facebook */}
          <Reveal delay={200}>
            <a
              href={contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-8 rounded-[2rem] border border-border bg-[#1877F2]/10 p-6 transition-colors hover:border-[#1877F2]/50 hover:bg-[#1877F2]/15"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white">
                  <FaFacebookF className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Коминочистач</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MessageCircle className="size-4" /> Пишете ми във Facebook
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
