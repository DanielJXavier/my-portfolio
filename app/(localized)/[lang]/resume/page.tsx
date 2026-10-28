import { Metadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";

import Resume from "./Resume";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    resume: { title },
  } = getDictionary(lang);

  return {
    title,
    alternates: getLocalizedAlternates("resume", lang),
  };
}

export default function Page() {
  return <Resume />;
}
