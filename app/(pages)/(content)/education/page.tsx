import { Metadata } from "next";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import Title from "@/_components/Title";
import School from "@/_icons/School";

import { education } from "./_config";
import EducationItem from "./_components/EducationItem";

export const metadata: Metadata = {
  title: "Education",
};

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { education: educationStrings } = getDictionary(lang);

  return (
    <>
      <Title icon={<School />}>Education</Title>
      {education.map(({ schoolId, schoolName, years }, i) => (
        <EducationItem
          key={i}
          schoolId={schoolId}
          schoolName={schoolName}
          fieldOfStudy={educationStrings[schoolId].fieldOfStudy}
          degree={educationStrings[schoolId].degree}
          years={years}
          subjects={educationStrings[schoolId].subjects}
        />
      ))}
    </>
  );
}
