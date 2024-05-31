"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { Lang } from "i18n-config";

type LangSwitcherProps = Readonly<{
  targetLang: Lang;
}>;

const mapLangToFlag: { [key: Lang]: string } = {
  en: "🇺🇸",
  pt: "🇧🇷",
};

export default function LangSwitcher({ targetLang }: LangSwitcherProps) {
  const { lang } = useParams<{ lang: Lang }>();
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
