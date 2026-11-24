import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import { CONTENT_DOMAINS } from "@/app/_content/constants";
import { validateLocaleKeys } from "@/app/_content/_utils/validate-locale-keys";

import { recommendations } from "./shared";

export type RecommendationLocaleItem = {
  role: string;
  paragraphs: string[];
};

export type RecommendationLocale = {
  title: string;
  items: Record<string, RecommendationLocaleItem>;
  imageAltText: string;
};

export type RecommendationContent = Omit<RecommendationLocale, "items"> & {
  items: Array<(typeof recommendations)[number] & RecommendationLocaleItem>;
};

const locales: Record<Lang, RecommendationLocale> = { en, pt };

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(
    CONTENT_DOMAINS.recommendations,
    lang,
    recommendations,
    locales[lang].items,
    ({ authorId }) => authorId,
  );
}

export function getRecommendationsContent(lang: Lang): RecommendationContent {
  const locale = locales[lang];

  return {
    title: locale.title,
    imageAltText: locale.imageAltText,
    items: recommendations.map((recommendation) => ({
      ...recommendation,
      ...locale.items[recommendation.authorId],
    })),
  };
}
