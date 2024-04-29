import type { Metadata } from "next";

import { Source_Code_Pro } from "next/font/google";

import Header from "./components/Header";

import "./globals.css";

const font = Source_Code_Pro({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
