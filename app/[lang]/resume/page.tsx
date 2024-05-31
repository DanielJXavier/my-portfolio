import { Metadata } from "next";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Resume from "./Resume";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const {
    resume: { title },
  } = getDictionary(lang);

  return {
    title,
  };
}

export default function Page() {
  return <Resume />;
}
