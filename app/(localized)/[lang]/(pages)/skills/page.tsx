import { Metadata } from "next";

import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";
import { getSkillsContent } from "@/app/_content/skills";

import Skills from "./Skills";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { title } = getSkillsContent(lang);

  return {
    title,
    alternates: getLocalizedAlternates("skills", lang),
  };
}

export default function Page() {
  return <Skills />;
}
