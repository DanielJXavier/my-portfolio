import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import { Lang } from "@/i18n-config";

import type { SiteMenuKey } from "./shared";
import { author, contact, menu } from "./shared";

type SiteLocale = {
  author: {
    headline: string;
  };
  copyright: string;
  menu: Record<SiteMenuKey, { href: string; title: string }>;
};

const locales: Record<Lang, SiteLocale> = { en, pt };

export type SiteContent = {
  author: typeof author & SiteLocale["author"];
  contact: typeof contact;
  copyright: string;
  menu: Array<{ key: SiteMenuKey; href: string; title: string }>;
};

export function getSiteContent(lang: Lang): SiteContent {
  const locale = locales[lang];

  return {
    author: { ...author, ...locale.author },
    contact,
    copyright: locale.copyright,
    menu: menu.map((key) => ({ key, ...locale.menu[key] })),
  };
}
