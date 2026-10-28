import { ReactNode } from "react";

import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Source_Code_Pro } from "next/font/google";

const Analytics = dynamic(() =>
  import("@vercel/analytics/react").then(({ Analytics }) => Analytics)
);

const SpeedInsights = dynamic(() =>
  import("@vercel/speed-insights/next").then(
    ({ SpeedInsights }) => SpeedInsights
  )
);

import { getDictionary } from "@/get-dictionary";
import { langStaticParams, Lang } from "@/i18n-config";

import { author } from "@/app/_config";

import "@/app/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ lang: Lang }>;
}>;

type MetadataProps = Readonly<{
  params: Promise<{ lang: Lang }>;
}>;

export async function generateStaticParams() {
  return langStaticParams;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { lang } = await params;
  const {
    global: {
      author: { headline },
    },
  } = getDictionary(lang);

  return {
    metadataBase: new URL("https://danielxavier.dev"),
    title: {
      template: `%s | ${author.firstName} ${author.lastName}`,
      default: `<${author.firstName}${author.lastName} />`,
    },
    description: headline,
  };
}

const font = Source_Code_Pro({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${font.className} grid min-h-dvh grid-rows-[repeat(2,auto)_1fr] gap-y-6 md:gap-y-8 xl:gap-y-12`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
