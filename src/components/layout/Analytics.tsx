import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackPhoneClick } from "@/lib/analytics";

/**
 * Reports route changes as page views and any click on a tel: link as a phone
 * conversion. Render it after <Routes> so the page has set document.title first.
 */
export function Analytics() {
  const { pathname } = useLocation();
  const firstPathname = useRef(pathname);

  useEffect(() => {
    // The Google tag's own config call already counts the first page load.
    if (pathname === firstPathname.current) return;
    firstPathname.current = "";
    trackPageView();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) trackPhoneClick();
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
