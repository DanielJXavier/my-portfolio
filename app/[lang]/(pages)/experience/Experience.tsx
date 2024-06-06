"use client";

import { createContext, useRef, useState } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Title from "@/_components/Title";
import Work from "@/_icons/Work";

import { experience } from "./_config";
import ExperienceItem from "./_components/ExperienceItem";
import Menu from "../_components/Menu";

export const ExperienceModeContext = createContext("");

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: {
      title,
      menu: menuStrings,
      items: experienceStrings,
      imageAltText,
    },
  } = getDictionary(lang);

  const [experienceMode, setExperienceMode] = useState("simple");

  const menuItems = useRef([
    { text: menuStrings.simple, value: "simple" },
    { text: menuStrings.detailed, value: "detailed" },
  ]);

  return (
    <ExperienceModeContext.Provider value={experienceMode}>
      <Title icon={<Work />}>{title}</Title>
      <Menu
        items={menuItems.current}
        activeItem={experienceMode}
        handleClick={setExperienceMode}
      />
      {experience.map(({ key, companyId, companyName, year, hasBlackLogo }) => (
        <ExperienceItem
          key={key}
          role={experienceStrings[key].role}
          companyId={companyId}
          companyName={companyName}
          year={year}
          description={experienceStrings[key].description}
          responsibilities={experienceStrings[key].responsibilities}
          biggestChallenge={experienceStrings[key].biggestChallenge}
          imageAltText={imageAltText}
          hasBlackLogo={hasBlackLogo}
        />
      ))}
    </ExperienceModeContext.Provider>
  );
}
