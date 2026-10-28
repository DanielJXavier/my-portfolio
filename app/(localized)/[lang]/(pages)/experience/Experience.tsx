"use client";

import { createContext, useState } from "react";

import { useParams } from "next/navigation";

import { ExperienceItemsType, getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";

import Title from "@/app/_components/Title";
import Work from "@/app/_icons/Work";

import Menu from "../_components/Menu";

import ExperienceItem from "./_components/ExperienceItem";
import { experience } from "./_config";

export const ExperienceModeContext = createContext("");

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: { title, menu, items, imageAltText },
  } = getDictionary(lang);

  const [experienceMode, setExperienceMode] = useState("simple");

  const menuItems = [
    { text: menu.simple, value: "simple" },
    { text: menu.detailed, value: "detailed" },
  ];

  const experienceItems: ExperienceItemsType = items;

  return (
    <ExperienceModeContext.Provider value={experienceMode}>
      <Title icon={<Work />}>{title}</Title>

      <Menu
        items={menuItems}
        activeItem={experienceMode}
        handleClick={setExperienceMode}
      />

      {experience
        .filter(({ hidden }) => !hidden)
        .map(
          ({
            key,
            companyId,
            companyName,
            startDate,
            endDate,
            mainStack,
            hasBlackLogo,
          }) => (
            <ExperienceItem
              key={key}
              role={experienceItems[key].role}
              companyId={companyId}
              companyName={companyName}
              startDate={startDate}
              endDate={endDate}
              accomplishments={experienceItems[key].accomplishments}
              mainStack={mainStack}
              imageAltText={imageAltText}
              hasBlackLogo={hasBlackLogo}
            />
          )
        )}
    </ExperienceModeContext.Provider>
  );
}
