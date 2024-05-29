import { Metadata } from "next";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import Title from "@/_components/Title";
import Reviews from "@/_icons/Reviews";

import RecommendationItem from "./_components/RecommendationItem";

import { recommendations } from "./_config";

export const metadata: Metadata = {
  title: "Recommendations",
};

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { recommendations: recommendationsStrings } = getDictionary(lang);

  return (
    <>
      <Title icon={<Reviews />}>Recommendations</Title>
      {recommendations.map(({ authorId, authorName, company }, i) => (
        <RecommendationItem
          key={i}
          authorId={authorId}
          authorName={authorName}
          role={recommendationsStrings[authorId].role}
          company={company}
          paragraphs={recommendationsStrings[authorId].paragraphs}
        />
      ))}
    </>
  );
}
