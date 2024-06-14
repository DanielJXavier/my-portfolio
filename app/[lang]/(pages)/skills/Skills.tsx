"use client";

import { useRef, useState } from "react";

import { useParams, useSearchParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Title from "@/_components/Title";
import Psychology from "@/_icons/Psychology";

import Menu from "../_components/Menu";

import { hardSkills, softSkills as softSkillsKeys } from "./_config";
import shuffle from "./_utils/shuffle";

const mapSizeToFontSize = {
  1: "text-sm md:text-base lg:text-lg",
  2: "text-base md:text-xl lg:text-2xl",
  3: "text-xl md:text-2px	lg:text-3xl",
  4: "text-2xl md:text-4xl lg:text-5xl",
  5: "text-3xl md:text-5xl lg:text-6xl",
};

export default function Skills() {
  const { lang } = useParams<{ lang: Lang }>();
  const searchParams = useSearchParams();

  const random = searchParams.get("random");

  const {
    skills: { title, menu: menuStrings, soft: softSkillsStrings, bottomText },
  } = getDictionary(lang);

  const softSkills = useRef(
    softSkillsKeys.map((skill) => ({
      ...skill,
      name: softSkillsStrings[skill.key],
    }))
  );

  const allSkills = useRef([...hardSkills, ...softSkills.current]);

  const [skills, setSkills] = useState(allSkills.current);
  const [filter, setFilter] = useState("all");

  const menuItems = useRef([
    { text: menuStrings.all, value: "all" },
    { text: menuStrings.hard, value: "hard" },
    { text: menuStrings.soft, value: "soft" },
  ]);

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
      <Title icon={<Psychology />}>{title}</Title>
      <Menu
        items={menuItems.current}
        activeItem={filter}
        handleClick={handleClick}
      />
      <article className="my-6 md:my-8 lg:my-10 flex gap-x-3 md:gap-x-5 lg:gap-x-8 gap-y-2 md:gap-y-3 lg:gap-y-4 flex-wrap items-center justify-center lg:justify-between">
        {(random === "0" ? skills : shuffle(skills)).map(
          ({ key, name, size }) => (
            <span
              className={`${mapSizeToFontSize[size]} font-light tracking-tighter [word-spacing:-0.35em]`}
              key={key}
              suppressHydrationWarning
            >
              {name}
            </span>
          )
        )}
      </article>
      <article className="py-5 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl font-light text-center lg:text-justify">
        {bottomText}
      </article>
    </>
  );
}
