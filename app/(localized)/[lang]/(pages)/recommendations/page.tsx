import { Metadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";

import Title from "@/app/_components/Title";
import Reviews from "@/app/_icons/Reviews";

import RecommendationItem from "./_components/RecommendationItem";
import { recommendations } from "./_config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    recommendations: { title },
  } = getDictionary(lang);

  return {
    title,
    alternates: getLocalizedAlternates("recommendations", lang),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const {
    recommendations: { title, items: recommendationsStrings, imageAltText },
  } = getDictionary(lang);

  return (
    <>
      <Title icon={<Reviews />}>{title}</Title>

      {recommendations.map(({ authorId, authorName, company }) => (
        <RecommendationItem
          key={authorId}
          authorId={authorId}
          authorName={authorName}
          role={recommendationsStrings[authorId].role}
          company={company}
          paragraphs={recommendationsStrings[authorId].paragraphs}
          imageAltText={imageAltText}
        />
      ))}
    </>
  );
}
