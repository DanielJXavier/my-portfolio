import { Metadata } from "next";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Title from "@/_components/Title";
import Reviews from "@/_icons/Reviews";

import RecommendationItem from "./_components/RecommendationItem";

import { recommendations } from "./_config";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const {
    recommendations: { title },
  } = getDictionary(lang);

  return {
    title,
  };
}

export default function Page({ params: { lang } }: { params: { lang: Lang } }) {
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
