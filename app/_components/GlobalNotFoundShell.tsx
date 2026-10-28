"use client";

import { usePathname } from "next/navigation";

import NotFound from "@/app/(localized)/[lang]/not-found";
import { getCurrentLang } from "@/i18n-config";

export default function GlobalNotFoundShell({
  fontClassName,
}: {
  fontClassName: string;
}) {
  const pathname = usePathname() ?? "/en";
  const lang = getCurrentLang(pathname) ?? "en";

  return (
    <html lang={lang}>
      <body
        className={`${fontClassName} grid min-h-dvh grid-rows-[repeat(2,auto)_1fr] gap-y-6 md:gap-y-8 xl:gap-y-12`}
      >
        <NotFound />
      </body>
    </html>
  );
}
