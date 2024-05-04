"use client";

import Title from "@/components/Title";
import School from "@/icons/School";

import EducationItem from "./components/EducationItem";

import { education } from "./data";

export default function Page() {
  return (
    <>
      <Title icon={<School />}>Education</Title>
      {education.map(
        (
          { schoolId, schoolName, fieldOfStudy, degree, years, disciplines },
          i
        ) => (
          <EducationItem
            key={i}
            schoolId={schoolId}
            schoolName={schoolName}
            fieldOfStudy={fieldOfStudy}
            degree={degree}
            years={years}
            disciplines={disciplines}
          />
        )
      )}
    </>
  );
}
