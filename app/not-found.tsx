"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "get-dictionary";
import { i18n, Locale } from "i18n-config";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const lang = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) as Locale;

  const {
    "not-found": { text, link },
  } = getDictionary(lang);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="main-container relative pt-32 flex justify-center">
      <div className="absolute w-[320px] sm:w-[400px] lg:w-[450px] h-[265px] sm:h-[365px] lg:h-[432px]">
        <div className="absolute sm:top-8 lg:top-10 flex flex-col gap-y-7 lg:gap-y-10 z-10">
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl">Ooops!</p>
            <p className="text-xs sm:text-sm lg:text-base">{text}</p>
          </div>
          <Link
            className="text-sm sm:text-base lg:text-lg font-medium underline hover:text-secondary"
            href={`/${lang}`}
          >
            {link}
          </Link>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-32 z-0">
          <Image
            className="right-0 object-contain drop-shadow-shaped grayscale"
            priority={true}
            src="/404.png"
            fill
            sizes="50vw, (min-width: 640px): 50vw, (min-width: 1024px): 33vw"
            alt="Photo of the author (Daniel Xavier) indicating a 404 error with his finger"
          />
        </div>
      </div>
    </main>
  );
}
