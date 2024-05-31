import { Metadata } from "next";

import Experience from "./Experience";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const {
    experience: { title },
  } = getDictionary(lang);

  return {
    title,
  };
}

export default function Page() {
  return <Experience />;
}
