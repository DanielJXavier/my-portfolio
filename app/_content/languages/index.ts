import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import { languages } from "./shared";

export type LanguageLocale = {
  items: Record<string, { name: string; level: string }>;
};

export type LanguageContent = {
  items: Array<(typeof languages)[number] & { name: string; level: string }>;
};

const locales: Record<Lang, LanguageLocale> = { en, pt };

function validateLocaleKeys(lang: Lang, locale: LanguageLocale) {
  const sharedIds = languages.map(({ languageId }) => languageId);
  const sharedIdSet = new Set(sharedIds);
  const localeIds = Object.keys(locale.items);
  const localeIdSet = new Set(localeIds);
  const missingIds = sharedIds.filter((languageId) =>
    !localeIdSet.has(languageId),
  );
  const unknownIds = localeIds.filter((languageId) =>
    !sharedIdSet.has(languageId),
  );
  const hasDuplicateSharedIds = sharedIdSet.size !== sharedIds.length;

  if (hasDuplicateSharedIds || missingIds.length || unknownIds.length) {
    throw new Error(
      [
        `Languages content keys do not match for locale "${lang}".`,
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

export function getLanguagesContent(lang: Lang): LanguageContent {
  const locale = locales[lang];

  return {
    items: languages.map((language) => ({
      ...language,
      ...locale.items[language.languageId],
    })),
  };
}
