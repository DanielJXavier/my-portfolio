import { Metadata } from "next";

import { getEducationContent } from "@/app/_content/education";
import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";

import Title from "@/app/_components/Title";
import School from "@/app/_icons/School";

import EducationItem from "./_components/EducationItem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { title } = getEducationContent(lang);

  return {
    title,
    alternates: getLocalizedAlternates("education", lang),
  };
}

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params;
  const { title, items, imageAltText } = getEducationContent(lang);

  return (
    <>
      <Title icon={<School />}>{title}</Title>

      {items.map((item, i) => (
        <EducationItem
          key={`education-item-${i}`}
          {...item}
          imageAltText={imageAltText}
        />
      ))}
    </>
  );
}
