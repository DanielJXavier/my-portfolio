"use client";

import dynamic from "next/dynamic";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { Lang } from "i18n-config";

import { author } from "@/_config";

import Menu from "./Menu";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

export default function Header() {
  const pathname = usePathname();
  const { lang } = useParams<{ lang: Lang }>();

  return (
    <header
      className="py-2 md:py-3 lg:py-4 shadow-sm shadow-primary"
      data-testid="header"
    >
      <div className="relative container mx-auto px-4 md:px-5 xl:px-6 grid grid-cols-[auto_1fr_auto] items-center justify-between justify-items-end gap-x-2 md:gap-x-3 lg:gap-x-8">
        <Link
          className={`text-xl lg:text-3xl font-light hover:text-secondary ${
            pathname === `/${lang}` ? "text-secondary cursor-default" : ""
          }`}
          href={`/${lang}`}
          data-testid="header-link"
        >
          {`<${author.firstName}${author.lastName} />`}
        </Link>
        <Menu />
        <div className="w-7 lg:w-8 h-7 lg:h-8">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
