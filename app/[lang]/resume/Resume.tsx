"use client";

import { useEffect } from "react";

import { author } from "@/_config";

import ContactInfo from "./_components/ContactInfo";
import Summary from "./_components/Summary";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Languages from "./_components/Languages";

export default function Resume() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const title = document.title;

      window.addEventListener("beforeprint", () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        document.title = `Resume_${author.firstName}-${author.lastName}_${year}${month}${day}`;
      });

      window.addEventListener("afterprint", () => {
        document.title = title;
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="max-w-[210mm] print:w-[210mm] row-span-3 flex flex-col gap-y-5 text-sm font-serif p-[0.5in] leading-snug">
      <ContactInfo />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Languages />
    </main>
  );
}
