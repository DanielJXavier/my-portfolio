import { ReactNode } from "react";

import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const font = Source_Code_Pro({ subsets: ["latin"] });

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body
        className={`${font.className} relative pb-24 md:pb-20 lg:pb-16 min-h-dvh`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
