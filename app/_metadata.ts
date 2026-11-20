import { menu } from "@/app/_content/site";
import { i18n, Lang } from "@/i18n-config";

export type LocalizedPage =
  | "home"
  | "resume"
  | "experience"
  | "education"
  | "skills"
  | "recommendations";

const getLocalizedPath = (page: LocalizedPage) => {
  if (page === "home") return "";
  if (page === "resume") return "/resume";

  return menu.find(({ key }) => key === page)?.href ?? "";
};

export const getLocalizedAlternates = (page: LocalizedPage, lang: Lang) => ({
  canonical: `/${lang}${getLocalizedPath(page)}`,
  languages: Object.fromEntries(
    i18n.langs.map((targetLang) => [
      targetLang,
      `/${targetLang}${getLocalizedPath(page)}`,
    ])
  ),
});
