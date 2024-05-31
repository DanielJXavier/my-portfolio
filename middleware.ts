import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n, Lang } from "./i18n-config";

const getPreferedLang = (request: NextRequest): string | undefined => {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    i18n.langs
  );

  const preferedLang = matchLocale(languages, i18n.langs, i18n.defaultLang);

  return preferedLang;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const currentLang = i18n.langs.find(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  ) as Lang;

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-lang", currentLang);

  if (currentLang)
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  const preferedLang = getPreferedLang(request);

  return NextResponse.redirect(
    new URL(
      `/${preferedLang}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    )
  );
}

export const config = {
  matcher: ["/((?!_next|apple-icon.png|favicon.ico).*)"],
};
