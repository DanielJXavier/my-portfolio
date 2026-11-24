import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

export type NotFoundContent = {
  text: string;
  link: string;
  imageAltText: {
    prefix: string;
    sufix: string;
  };
};

const locales: Record<Lang, NotFoundContent> = { en, pt };

export function getNotFoundContent(lang: Lang): NotFoundContent {
  return locales[lang];
}
