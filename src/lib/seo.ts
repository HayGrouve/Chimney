import { useEffect } from "react";

const SITE_URL = "https://komini-sofia.com";

type PageMeta = {
  title: string;
  description: string;
  /** Canonical path such as "/about"; omit query strings so ?photo=N links fold into the page. */
  path: string;
  noindex?: boolean;
};

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
}

/**
 * Updates the static head tags from index.html for the current page, so each route
 * gets its own title, description and canonical URL without duplicating tags.
 */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, follow" : "index, follow");
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, path, noindex]);
}
