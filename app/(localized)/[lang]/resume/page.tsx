import { Metadata } from "next";

import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";
import { getResumeContent } from "@/app/_content/resume";

import Resume from "./Resume";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { title } = getResumeContent(lang);

  return {
    title,
    alternates: getLocalizedAlternates("resume", lang),
  };
}

export default function Page() {
  return <Resume />;
}
