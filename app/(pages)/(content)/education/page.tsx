import { Metadata } from "next";

import Title from "@/_components/Title";
import School from "@/_icons/School";

import EducationItem from "./_components/EducationItem";

import { education } from "./data";

export const metadata: Metadata = {
  title: "Education",
};

export default function Page() {
  return (
    <>
      <Title icon={<School />}>Education</Title>
      {education.map((item, i) => (
        <EducationItem key={i} {...item} />
      ))}
    </>
  );
}
