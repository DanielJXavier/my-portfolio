"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { Locale } from "i18n-config";

type LangSwitcherProps = Readonly<{
  targetLang: Locale;
}>;

const mapLangToFlag: { [key: Locale]: string } = {
  en: "🇺🇸",
  pt: "🇧🇷",
};

export default function LangSwitcher({ targetLang }: LangSwitcherProps) {
  const { lang } = useParams<{ lang: Locale }>();
  const pathname = usePathname();

  return (
    <Link
      href={pathname.replace(`/${lang}`, `/${targetLang}`)}
      onClick={() => {
        document.documentElement.lang = targetLang;
      }}
    >
      {mapLangToFlag[targetLang]}
    </Link>
  );
}
