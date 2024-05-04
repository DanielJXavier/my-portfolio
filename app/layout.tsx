import { ReactNode } from "react";

import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

import Header from "@/components/Header";

import { author } from "@/data";

import "@/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const font = Source_Code_Pro({ subsets: ["latin"] });

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `<${author.firstName}${author.lastName} />`,
  description: author.headline,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${font.className} relative pb-24 md:pb-20 lg:pb-16 min-h-dvh`}
      >
        <Header />
        {children}
        <footer className="absolute right-0 bottom-0 left-0 h-24 md:h-20 lg:h-16 flex items-center justify-center">
          <p className="text-xs md:text-sm text-center">
            Copyright &copy; {year} {author.firstName} {author.lastName}.{" "}
            <br className="sm:hidden" />
            All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
