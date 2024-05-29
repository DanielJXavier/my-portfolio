"use client";

import { useRef, useState } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import Title from "@/_components/Title";
import Psychology from "@/_icons/Psychology";

import { hardSkills, softSkills as softSkillsKeys } from "./_config";
import Menu from "../_components/Menu";
import shuffle from "./_utils/shuffle";

const mapSizeToFontSize = {
  1: "text-sm md:text-base lg:text-lg",
  2: "text-base md:text-xl lg:text-2xl",
  3: "text-xl md:text-2px	lg:text-3xl",
  4: "text-2xl md:text-4xl lg:text-5xl",
  5: "text-3xl md:text-5xl lg:text-6xl",
};

export default function Skills() {
  const { lang } = useParams<{ lang: Locale }>();

  const {
    skills: { softSkills: softSkillsStrings, bottomText },
  } = getDictionary(lang);

  const softSkills = useRef(
    softSkillsKeys.map(({ key, size }) => ({
      name: softSkillsStrings[key],
      size,
    }))
  );

  const allSkills = useRef([...hardSkills, ...softSkills.current]);

  const [skills, setSkills] = useState(allSkills.current);
  const [filter, setFilter] = useState("all");

  const handleClick = (item: string) => {
    setFilter(item);

    if (item === "hard") {
      setSkills(hardSkills);
    } else if (item === "soft") {
      setSkills(softSkills.current);
    } else {
      setSkills(allSkills.current);
    }
  };

  return (
    <>
      <Title icon={<Psychology />}>Skills</Title>
      <Menu
        items={["all", "hard", "soft"]}
        activeItem={filter}
        handleClick={handleClick}
      />
      <article className="my-6 md:my-8 lg:my-10 flex gap-x-3 md:gap-x-5 lg:gap-x-8 gap-y-2 md:gap-y-3 lg:gap-y-4 flex-wrap items-center justify-center lg:justify-between">
        {shuffle(skills).map(({ name, size }, i) => (
          <span
            className={`${mapSizeToFontSize[size]} font-light tracking-tighter [word-spacing:-0.35em]`}
            key={i}
            suppressHydrationWarning
          >
            {name}
          </span>
        ))}
      </article>
      <article className="py-5 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl font-light text-center lg:text-justify">
        {bottomText}
      </article>
    </>
  );
}
