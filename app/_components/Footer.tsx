"use client";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

const year = new Date().getFullYear();

export default function Footer() {
  const { lang } = useParams<{ lang: Locale }>();

  const {
    global: { author, copyright },
  } = getDictionary(lang);

  return (
    <footer
      className="absolute right-0 bottom-0 left-0 h-24 md:h-20 lg:h-16 flex items-center justify-center"
      data-testid="footer"
    >
      <p className="text-xs md:text-sm text-center">
        {author.firstName} {author.lastName} © {year}.{" "}
        <br className="sm:hidden" />
        {copyright}
      </p>
    </footer>
  );
}
