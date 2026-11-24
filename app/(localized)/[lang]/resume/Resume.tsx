"use client";

import { useEffect } from "react";

import { useSiteContent } from "@/app/_hooks/useSiteContent";

import ContactInfo from "./_components/ContactInfo";
import Summary from "./_components/Summary";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Languages from "./_components/Languages";

export default function Resume() {
  const { author } = useSiteContent();

  useEffect(() => {
    const title = document.title;

    const handleBeforePrint = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");

      document.title = `Resume_${author.firstName}-${author.lastName}_${year}${month}${day}`;
    };

    const handleAfterPrint = () => {
      document.title = title;
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [author.firstName, author.lastName]);

  return (
    <main className="max-w-[210mm] print:w-[210mm] row-span-3 flex flex-col gap-y-4 text-sm font-serif p-12 leading-snug">
      <ContactInfo />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Languages />
    </main>
  );
}
