/**
 * Google Ads tag helpers.
 *
 * index.html sets Consent Mode v2 defaults (everything denied, or the visitor's stored
 * choice) before the Google tag loads. This module lets React update that consent,
 * report route changes as page views and report phone-call clicks as conversions.
 */

export const GOOGLE_ADS_ID = "AW-17951023799";

/**
 * Conversion label of the "phone call click" conversion action in Google Ads
 * (the part after the slash in `send_to: "AW-17951023799/<label>"`).
 * Phone clicks are not reported until this is filled in.
 */
export const PHONE_CONVERSION_LABEL = "";

/** Must match the key read by the consent script in index.html. */
const CONSENT_STORAGE_KEY = "cookie-consent";

export type ConsentChoice = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

function gtag(...args: unknown[]) {
  window.gtag?.(...args);
}

export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
  gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

/** Route changes don't reload the page, so the tag only sees the first load on its own. */
export function trackPageView() {
  gtag("event", "page_view", {
    send_to: GOOGLE_ADS_ID,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function trackPhoneClick() {
  if (!PHONE_CONVERSION_LABEL) return;
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${PHONE_CONVERSION_LABEL}`,
  });
}
