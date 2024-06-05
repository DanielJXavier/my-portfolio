"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { i18n, Lang } from "i18n-config";

const mapLangToFlag: { [key: Lang]: string } = {
  en: "🇺🇸",
  pt: "🇧🇷",
};

export default function LangSwitcher() {
  const { lang } = useParams<{ lang: Lang }>();
  const pathname = usePathname();

  return (
    <menu className="flex gap-x-3 justify-center" data-testid="lang-switcher">
      {i18n.langs.map((targetLang) => (
        <li key={targetLang}>
          <Link
            className={
              targetLang === lang ? "pointer-events-none cursor-default" : ""
            }
            href={pathname.replace(`/${lang}`, `/${targetLang}`)}
            onClick={() => {
              document.documentElement.lang = targetLang;
            }}
          >
            {mapLangToFlag[targetLang]}
          </Link>
        </li>
      ))}
    </menu>
  );
}
