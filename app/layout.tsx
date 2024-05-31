import { ReactNode } from "react";

import { headers } from "next/headers";

import { Source_Code_Pro } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export async function generateMetadata() {
  const headersList = headers();
  const lang = headersList.get("x-lang") as Lang;

  const {
    global: { author },
  } = getDictionary(lang);

  return {
    title: {
      template: `%s | ${author.firstName} ${author.lastName}`,
      default: `<${author.firstName}${author.lastName} />`,
    },
    description: author.headline,
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
