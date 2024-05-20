"use client";

import { createContext, useState } from "react";

import Title from "@/components/Title";
import Work from "@/icons/Work";

import ExperienceItem from "./components/ExperienceItem";

import Menu from "../components/Menu";

import { experience } from "./data";

export const ExperienceModeContext = createContext("");

export default function Experience() {
  const [experienceMode, setExperienceMode] = useState("simple");

  return (
    <ExperienceModeContext.Provider value={experienceMode}>
      <Title icon={<Work />}>Experience</Title>
      <Menu
        items={["simple", "detailed"]}
        activeItem={experienceMode}
        setActiveItem={setExperienceMode}
      />
      {experience.map(
        (
          {
            role,
            companyId,
            companyName,
            year,
            description,
            responsibilities,
            biggestChallenge,
            hasBlackLogo,
          },
          i
        ) => (
          <ExperienceItem
            key={i}
            role={role}
            companyId={companyId}
            companyName={companyName}
            year={year}
            description={description}
            responsibilities={responsibilities}
            biggestChallenge={biggestChallenge}
            hasBlackLogo={hasBlackLogo}
          />
        )
      )}
    </ExperienceModeContext.Provider>
  );
}
