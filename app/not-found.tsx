"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { getCurrentLang } from "i18n-config";

import { author } from "@/_config";

export default function NotFound() {
  const pathname = usePathname();

  const lang = getCurrentLang(pathname);

  const {
    "not-found": { text, link, imageAltText },
  } = getDictionary(lang);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="main-container row-span-3 relative pt-32 flex justify-center">
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
            src="/images/404.png"
            fill
            sizes="50vw, (min-width: 640px): 50vw, (min-width: 1024px): 33vw"
            alt={`${imageAltText.prefix} (${author.firstName} ${author.lastName}) ${imageAltText.sufix}`}
          />
        </div>
      </div>
    </main>
  );
}
