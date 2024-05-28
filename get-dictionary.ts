import en from "dictionaries/en.json" assert { type: "json" };

import type { Locale } from "i18n-config";

const dictionaries = {
  en,
};

export const getDictionary = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.en;
