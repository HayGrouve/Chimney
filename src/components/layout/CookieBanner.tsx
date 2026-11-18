import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readConsent, saveConsent, type ConsentChoice } from "@/lib/analytics";

const OPEN_EVENT = "cookie-settings:open";

/** Reopens the banner so the visitor can change an earlier choice. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/** Asks for consent to Google Ads cookies until the visitor accepts or declines. */
export function CookieBanner() {
  const [open, setOpen] = useState(() => readConsent() === null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Бисквитки"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-4 md:left-4 md:right-auto md:max-w-md md:px-0 md:pb-0"
    >
      <div className="rounded-2xl border border-border bg-background/95 p-4 shadow-[0_-10px_40px_-10px_black] backdrop-blur-xl">
        <div className="flex gap-3">
          <Cookie className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Използваме бисквитки на Google, за да измерваме резултатите от
            рекламите си. Можете да ги приемете или откажете — сайтът работи и
            без тях.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="secondary" size="lg" onClick={() => choose("denied")}>
            Отказвам
          </Button>
          <Button size="lg" onClick={() => choose("granted")}>
            Приемам
          </Button>
        </div>
      </div>
    </div>
  );
}
