import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { getCurrentLang, i18n } from "./i18n-config";

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
  const { href, pathname } = request.nextUrl;

  const lang = getCurrentLang(pathname);

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-lang", lang);
  requestHeaders.set("x-href", href);

  if (lang) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const preferedLang = getPreferedLang(request);

  return NextResponse.redirect(
    new URL(`/${preferedLang}${pathname.replace(/\/$/, "")}`, request.url)
  );
}

export const config = {
  matcher: [
    "/((?!_next|images|apple-icon.png|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
