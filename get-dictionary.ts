import { i18n, Lang } from "i18n-config";

import en from "dictionaries/en.json" assert { type: "json" };
import pt from "dictionaries/pt.json" assert { type: "json" };

type DictionaryType = typeof en;

type DictionariesType = {
  [key: Lang]: DictionaryType;
};

export type ExperienceItemsType = {
  [key: string]: {
    role: string;
    description: string;
    accomplishments: string[];
    biggestChallenge: string;
  };
};

const dictionaries: DictionariesType = {
  en,
  pt,
};

export const getDictionary = (lang: Lang): DictionaryType =>
  dictionaries[lang] ?? dictionaries[i18n.defaultLang];
