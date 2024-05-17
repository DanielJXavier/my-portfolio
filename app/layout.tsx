import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ReactNode } from "react";

import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

import { author } from "@/data";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const font = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${author.firstName} ${author.lastName}`,
    default: `<${author.firstName}${author.lastName} />`,
  },
  description: author.headline,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
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
