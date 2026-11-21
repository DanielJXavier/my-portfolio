"use client";

import { createContext, useState } from "react";

import { useExperienceContent } from "@/app/_hooks/useExperienceContent";

import Title from "@/app/_components/Title";
import Work from "@/app/_icons/Work";

import Menu from "../_components/Menu";

import ExperienceItem from "./_components/ExperienceItem";
export const ExperienceModeContext = createContext("");

export default function Experience() {
  const content = useExperienceContent();

  const [experienceMode, setExperienceMode] = useState("simple");

  const menuItems = [
    { text: content.menu.simple, value: "simple" },
    { text: content.menu.detailed, value: "detailed" },
  ];

  return (
    <ExperienceModeContext.Provider value={experienceMode}>
      <Title icon={<Work />}>{content.title}</Title>

      <Menu
        items={menuItems}
        activeItem={experienceMode}
        handleClick={setExperienceMode}
      />

      {content.items
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
            role,
            accomplishments,
          }) => (
            <ExperienceItem
              key={key}
              role={role}
              companyId={companyId}
              companyName={companyName}
              startDate={startDate}
              endDate={endDate}
              accomplishments={accomplishments}
              mainStack={mainStack}
              imageAltText={content.imageAltText}
              hasBlackLogo={hasBlackLogo}
              dateSeparatorText={content.dateSeparatorText}
              endDateText={content.endDateText}
              mainStackTitle={content.mainStackTitle}
            />
          )
        )}
    </ExperienceModeContext.Provider>
  );
}
