import { ReactNode } from "react";

import { headers } from "next/headers";

import { Source_Code_Pro } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { getDictionary } from "get-dictionary";
import { i18n, Lang } from "i18n-config";

import { author } from "@/_config";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export async function generateStaticParams() {
  return i18n.langs.map((lang) => ({ lang }));
}

export async function generateMetadata() {
  const headersList = headers();

  const lang = headersList.get("x-lang") as Lang;
  const href = headersList.get("x-href") as string;

  const {
    global: {
      author: { headline },
    },
  } = getDictionary(lang);

  return {
    title: {
      template: `%s | ${author.firstName} ${author.lastName}`,
      default: `<${author.firstName}${author.lastName} />`,
    },
    description: headline,
    alternates: {
      languages: i18n.langs.reduce(
        (languages, language) => ({
          ...languages,
          [language]: href.replace(lang, language),
        }),
        {}
      ),
    },
  };
}

const font = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  const headersList = headers();
  const lang = headersList.get("x-lang") as Lang;

  return (
    <html lang={lang}>
      <body
        className={`${font.className} grid min-h-dvh grid-rows-[repeat(2,_auto)_1fr] gap-y-6 md:gap-y-8 xl:gap-y-12`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
