import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import { Lang } from "@/i18n-config";

import { experience } from "./shared";
import type { ExperienceInterface } from "./shared";

export type ExperienceLocaleItem = {
  role: string;
  accomplishments: string[];
};

export type ExperienceLocale = {
  title: string;
  menu: {
    simple: string;
    detailed: string;
  };
  dateSeparatorText: string;
  endDateText: string;
  mainStackTitle: string;
  previousItemsText: {
    prefix: string;
    sufix: string;
  };
  imageAltText: {
    prefix: string;
    sufix: string;
  };
  items: Record<string, ExperienceLocaleItem>;
};

export type ExperienceContent = Omit<ExperienceLocale, "items"> & {
  items: Array<ExperienceInterface & ExperienceLocaleItem>;
};

const locales: Record<Lang, ExperienceLocale> = { en, pt };

function validateLocaleKeys(lang: Lang, locale: ExperienceLocale) {
  const sharedKeys = experience.map(({ key }) => key);
  const uniqueSharedKeys = new Set(sharedKeys);
  const localeKeys = Object.keys(locale.items);
  const localeKeySet = new Set(localeKeys);

  const missingKeys = sharedKeys.filter((key) => !localeKeySet.has(key));
  const unknownKeys = localeKeys.filter((key) => !uniqueSharedKeys.has(key));

  const hasDuplicateSharedKeys = uniqueSharedKeys.size !== sharedKeys.length;

  if (hasDuplicateSharedKeys || missingKeys.length || unknownKeys.length) {
    throw new Error(
      [
        `Experience content keys do not match for locale "${lang}".`,
        missingKeys.length ? `Missing: ${missingKeys.join(", ")}` : "",
        unknownKeys.length ? `Unknown: ${unknownKeys.join(", ")}` : "",
        hasDuplicateSharedKeys ? "Shared entries contain duplicate keys." : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(lang, locales[lang]);
}

export function getExperienceContent(lang: Lang): ExperienceContent {
  const locale = locales[lang];

  return {
    ...locale,
    items: experience.map((item) => ({
      ...item,
      ...locale.items[item.key],
    })),
  };
}
