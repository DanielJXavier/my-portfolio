import { ReactNode } from "react";

import dynamic from "next/dynamic";
import { headers } from "next/headers";

import { Source_Code_Pro } from "next/font/google";

const Analytics = dynamic(() =>
  import("@vercel/analytics/react").then(({ Analytics }) => Analytics)
);

const SpeedInsights = dynamic(() =>
  import("@vercel/speed-insights/next").then(
    ({ SpeedInsights }) => SpeedInsights
  )
);

import { getDictionary } from "get-dictionary";
import { getAlternateLanguages, langStaticParams, Lang } from "i18n-config";

import { author } from "@/_config";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export async function generateStaticParams() {
  return langStaticParams;
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
      canonical: !href.endsWith(`/${lang}`) && href.replace(`/${lang}`, ""),
      languages: getAlternateLanguages(href, lang),
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
