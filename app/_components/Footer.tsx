"use client";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { i18n, Locale } from "i18n-config";
import LangSwitcher from "./LangSwitcher";

const year = new Date().getFullYear();

export default function Footer() {
  const { lang } = useParams<{ lang: Locale }>();
  const pathname = usePathname();

  const {
    global: { author, copyright },
  } = getDictionary(lang);

  return (
    <footer
      className="absolute right-0 bottom-0 left-0 h-32 md:h-28 lg:h-24 grid gap-y-2 items-center justify-center content-center"
      data-testid="footer"
    >
      <menu className="flex gap-x-3 justify-center">
        {i18n.locales.map((locale, i) => (
          <li key={i}>
            <LangSwitcher targetLang={locale} />
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
