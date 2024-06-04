export const i18n = {
  defaultLang: "en",
  langs: ["en", "pt"],
};

export type Lang = (typeof i18n)["langs"][number];

export const getCurrentLang = (pathname: string) =>
  i18n.langs.find(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  ) as Lang;

export const langStaticParams = i18n.langs.map((lang) => ({ lang }));

export const getAlternateLanguages = (href: string, lang: Lang) =>
  i18n.langs.reduce(
    (languages, language) => ({
      ...languages,
      [language]: href.replace(lang, language),
    }),
    {}
  );
