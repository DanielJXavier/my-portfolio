"use client";

import { createContext, useRef, useState } from "react";

import { useParams } from "next/navigation";

import { ExperienceItemsType, getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Title from "@/_components/Title";
import Work from "@/_icons/Work";

import Menu from "../_components/Menu";

import { experience } from "./_config";
import ExperienceItem from "./_components/ExperienceItem";

export const ExperienceModeContext = createContext("");

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: { title, menu, items, imageAltText },
  } = getDictionary(lang);

  const [experienceMode, setExperienceMode] = useState("simple");

  const menuItems = useRef([
    { text: menu.simple, value: "simple" },
    { text: menu.detailed, value: "detailed" },
  ]);

  const experienceItems = useRef<ExperienceItemsType>(items);

  return (
    <ExperienceModeContext.Provider value={experienceMode}>
      <Title icon={<Work />}>{title}</Title>
      <Menu
        items={menuItems.current}
        activeItem={experienceMode}
        handleClick={setExperienceMode}
      />
      {experience.map(
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
            role={experienceItems.current[key].role}
            companyId={companyId}
            companyName={companyName}
            startDate={startDate}
            endDate={endDate}
            description={experienceItems.current[key].description}
            accomplishments={experienceItems.current[key].accomplishments}
            biggestChallenge={experienceItems.current[key].biggestChallenge}
            mainStack={mainStack}
            imageAltText={imageAltText}
            hasBlackLogo={hasBlackLogo}
          />
        )
      )}
    </ExperienceModeContext.Provider>
  );
}
