export const i18n = {
  defaultLang: "en",
  langs: ["en", "pt"],
};

export type Lang = (typeof i18n)["langs"][number];
