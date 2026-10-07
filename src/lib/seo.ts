import { useEffect } from "react";

export function useSEO(title: string, description: string, path = "/") {
  useEffect(() => {
    const full = title === "DupersUnited" ? title : `${title} — DupersUnited`;
    const url = `https://dupers.wtf${path}`;

    document.title = full;

    const put = (selector: string, value: string) => {
      const tag = document.head.querySelector(selector);
      if (tag) tag.setAttribute("content", value);
    };

    put('meta[name="description"]', description);
    put('meta[property="og:title"]', full);
    put('meta[property="og:description"]', description);
    put('meta[property="og:url"]', url);
    put('meta[name="twitter:title"]', full);
    put('meta[name="twitter:description"]', description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [title, description, path]);
}
