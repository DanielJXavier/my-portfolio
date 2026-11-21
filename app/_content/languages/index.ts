import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";
import { validateLocaleKeys } from "@/app/_content/_utils/validate-locale-keys";

import { languages } from "./shared";

export type LanguageLocale = {
  items: Record<string, { name: string; level: string }>;
};

export type LanguageContent = {
  items: Array<(typeof languages)[number] & { name: string; level: string }>;
};

const locales: Record<Lang, LanguageLocale> = { en, pt };

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(
    "Languages",
    lang,
    languages,
    locales[lang].items,
    ({ languageId }) => languageId,
  );
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
