import { Metadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";

import Skills from "./Skills";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    skills: { title },
  } = getDictionary(lang);

  return {
    title,
  };
}

export default function Page() {
  return <Skills />;
}
