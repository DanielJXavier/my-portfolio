"use client";

import { useSiteContent } from "@/app/_hooks/useSiteContent";

import LangSwitcher from "./LangSwitcher";

const year = new Date().getFullYear();

export default function Footer() {
  const { author, copyright } = useSiteContent();

  return (
    <footer
      className="self-end pb-6 md:pb-8 xl:pb-12 grid gap-y-2 items-center justify-center content-center"
      data-testid="footer"
    >
      <LangSwitcher />

      <p className="text-xs md:text-sm text-center">
        {author.firstName} {author.lastName} © {year}.{" "}
        <br className="sm:hidden" />
        {copyright}
      </p>
    </footer>
  );
}
