import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import { Lang } from "@/i18n-config";

import type { SiteMenuKey } from "./shared";

export { author, contact, menu } from "./shared";

export type SiteLocale = {
  author: {
    headline: string;
  };
  copyright: string;
  menu: Record<SiteMenuKey, string>;
};

const locales: Record<Lang, SiteLocale> = { en, pt };

export const getSiteLocales = (lang: Lang): SiteLocale => locales[lang];
