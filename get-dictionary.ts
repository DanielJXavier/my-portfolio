import { i18n, Locale } from "i18n-config";

import en from "dictionaries/en.json" assert { type: "json" };
import pt from "dictionaries/pt.json" assert { type: "json" };

type DictionaryType = typeof en;

type DictionariesType = {
  [key: Locale]: DictionaryType;
};

const dictionaries: DictionariesType = {
  en,
  pt,
};

export const getDictionary = (locale: Locale): DictionaryType =>
  dictionaries[locale] ?? dictionaries[i18n.defaultLocale];
