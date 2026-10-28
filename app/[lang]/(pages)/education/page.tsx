import { Metadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";

import Title from "@/app/_components/Title";
import School from "@/app/_icons/School";

import EducationItem from "./_components/EducationItem";
import { education } from "./_config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    education: { title },
  } = getDictionary(lang);

  return {
    title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const {
    education: { title, items: educationStrings, imageAltText },
  } = getDictionary(lang);

  return (
    <>
      <Title icon={<School />}>{title}</Title>

      {education.map(
        ({ schoolId, schoolName, startYear, endYear, hasBlackLogo }, i) => (
          <EducationItem
            key={`education-item-${i}`}
            schoolId={schoolId}
            schoolName={schoolName}
            fieldOfStudy={educationStrings[schoolId].fieldOfStudy}
            degree={educationStrings[schoolId].degree}
            startYear={startYear}
            endYear={endYear}
            subjects={educationStrings[schoolId].subjects}
            imageAltText={imageAltText}
            hasBlackLogo={hasBlackLogo}
          />
        )
      )}
    </>
  );
}
