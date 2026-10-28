import { Source_Code_Pro } from "next/font/google";
import type { Metadata } from "next";

import GlobalNotFoundShell from "@/app/_components/GlobalNotFoundShell";

import "@/app/globals.css";

const font = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function GlobalNotFound() {
  return <GlobalNotFoundShell fontClassName={font.className} />;
}
