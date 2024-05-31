import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n, Locale } from "./i18n-config";

const getPreferedLocale = (request: NextRequest): string | undefined => {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    i18n.locales
  );

  const preferedLocale = matchLocale(
    languages,
    i18n.locales,
    i18n.defaultLocale
  );

  return preferedLocale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const currentLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) as Locale;

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-locale", currentLocale);

  if (currentLocale)
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  const preferedLocale = getPreferedLocale(request);

  return NextResponse.redirect(
    new URL(
      `/${preferedLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    )
  );
}

export const config = {
  matcher: ["/((?!_next|apple-icon.png|favicon.ico).*)"],
};
