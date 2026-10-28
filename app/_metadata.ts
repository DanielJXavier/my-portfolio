import { getDictionary } from "@/get-dictionary";
import { i18n, Lang } from "@/i18n-config";

export type LocalizedPage =
  | "home"
  | "resume"
  | "experience"
  | "education"
  | "skills"
  | "recommendations";

const getLocalizedPath = (page: LocalizedPage, lang: Lang) => {
  if (page === "home") return "";
  if (page === "resume") return "/resume";

  return getDictionary(lang).global.menu[page].href;
};

export const getLocalizedAlternates = (page: LocalizedPage, lang: Lang) => ({
  canonical: `/${lang}${getLocalizedPath(page, lang)}`,
  languages: Object.fromEntries(
    i18n.langs.map((targetLang) => [
      targetLang,
      `/${targetLang}${getLocalizedPath(page, targetLang)}`,
    ])
  ),
});
