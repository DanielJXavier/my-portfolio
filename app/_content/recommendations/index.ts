import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

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

function validateLocaleKeys(lang: Lang, locale: RecommendationLocale) {
  const sharedIds = recommendations.map(({ authorId }) => authorId);
  const sharedIdSet = new Set(sharedIds);
  const localeIds = Object.keys(locale.items);
  const localeIdSet = new Set(localeIds);
  const missingIds = sharedIds.filter((authorId) => !localeIdSet.has(authorId));
  const unknownIds = localeIds.filter((authorId) => !sharedIdSet.has(authorId));
  const hasDuplicateSharedIds = sharedIdSet.size !== sharedIds.length;

  if (hasDuplicateSharedIds || missingIds.length || unknownIds.length) {
    throw new Error(
      [
        `Recommendations content keys do not match for locale "${lang}".`,
        missingIds.length ? `Missing: ${missingIds.join(", ")}` : "",
        unknownIds.length ? `Unknown: ${unknownIds.join(", ")}` : "",
        hasDuplicateSharedIds ? "Shared entries contain duplicate IDs." : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(lang, locales[lang]);
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
