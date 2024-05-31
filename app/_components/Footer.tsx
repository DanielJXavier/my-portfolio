"use client";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { i18n, Lang } from "i18n-config";
import LangSwitcher from "./LangSwitcher";

const year = new Date().getFullYear();

export default function Footer() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    global: { author, copyright },
  } = getDictionary(lang);

  return (
    <footer
      className="self-end pb-6 md:pb-8 xl:pb-12 grid gap-y-2 items-center justify-center content-center"
      data-testid="footer"
    >
      <menu className="flex gap-x-3 justify-center">
        {i18n.langs.map((lang, i) => (
          <li key={i}>
            <LangSwitcher targetLang={lang} />
          </li>
        ))}
      </menu>
      <p className="text-xs md:text-sm text-center">
        {author.firstName} {author.lastName} © {year}.{" "}
        <br className="sm:hidden" />
        {copyright}
      </p>
    </footer>
  );
}
