import type { Metadata } from "next";

import { Source_Code_Pro } from "next/font/google";

import Header from "./components/Header";

import "./globals.css";

const font = Source_Code_Pro({ subsets: ["latin"] });

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: "<DanielXavier />",
  description: "Technical Lead | JavaScript | React | MBA, Team Leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} relative pb-24 md:pb-20 lg:pb-16 min-h-dvh`}
      >
        <Header />
        {children}
        <footer className="absolute right-0 bottom-0 left-0 h-24 md:h-20 lg:h-16 flex items-center justify-center">
          <p className="text-xs md:text-sm text-center">
            Copyright &copy; {year} Daniel Xavier. <br className="sm:hidden" />
            All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
