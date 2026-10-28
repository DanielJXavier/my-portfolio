import { Metadata } from "next";

import Experience from "./Experience";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    experience: { title },
  } = getDictionary(lang);

  return {
    title,
    alternates: getLocalizedAlternates("experience", lang),
  };
}

export default function Page() {
  return <Experience />;
}
