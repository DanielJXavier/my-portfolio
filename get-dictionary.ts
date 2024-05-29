import en from "dictionaries/en.json" assert { type: "json" };

import { i18n, Locale } from "i18n-config";

const dictionaries = {
  en,
};

export const getDictionary = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries[i18n.defaultLocale];
