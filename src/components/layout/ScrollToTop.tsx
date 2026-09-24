import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll on page change, or jumps to the #hash target when one is given. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    // Only react to page changes; in-page hash updates are handled by the browser.
  }, [pathname]);

  return null;
}
