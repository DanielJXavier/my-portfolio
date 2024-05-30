"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

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
        <li>
          <Link href={pathname.replace(`/${lang}`, "/en")}>🇺🇸</Link>
        </li>
        <li>
          <Link href={pathname.replace(`/${lang}`, "/pt")}>🇧🇷</Link>
        </li>
      </menu>
      <p className="text-xs md:text-sm text-center">
        {author.firstName} {author.lastName} © {year}.{" "}
        <br className="sm:hidden" />
        {copyright}
      </p>
    </footer>
  );
}
