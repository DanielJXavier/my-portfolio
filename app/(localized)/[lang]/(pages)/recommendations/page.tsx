import { Metadata } from "next";

import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";
import { getRecommendationsContent } from "@/app/_content/recommendations";

import Title from "@/app/_components/Title";
import Reviews from "@/app/_icons/Reviews";

import RecommendationItem from "./_components/RecommendationItem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { title } = getRecommendationsContent(lang);

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
  const { title, items, imageAltText } = getRecommendationsContent(lang);

  return (
    <>
      <Title icon={<Reviews />}>{title}</Title>

      {items.map(({ authorId, authorName, company, role, paragraphs }) => (
        <RecommendationItem
          key={authorId}
          authorId={authorId}
          authorName={authorName}
          role={role}
          company={company}
          paragraphs={paragraphs}
          imageAltText={imageAltText}
        />
      ))}
    </>
  );
}
