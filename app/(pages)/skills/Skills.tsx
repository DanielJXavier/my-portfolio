"use client";

import { useState } from "react";

import Title from "@/components/Title";
import Psychology from "@/icons/Psychology";

import Menu from "../components/Menu";

import shuffleSkills from "./utils/shuffle";

import { skills } from "./data";

const mapSizeToFontSize = {
  1: "text-sm md:text-base lg:text-lg",
  2: "text-base md:text-xl lg:text-2xl",
  3: "text-xl md:text-2px	lg:text-3xl",
  4: "text-2xl md:text-4xl lg:text-5xl",
  5: "text-3xl md:text-5xl lg:text-6xl",
};

export default function Skills() {
  const [skillFilter, setSkillFilter] = useState("all");

  return (
    <>
      <Title icon={<Psychology />}>Skills</Title>
      <Menu
        items={["all", "hard", "soft"]}
        activeItem={skillFilter}
        setActiveItem={setSkillFilter}
      />
      <article className="my-6 md:my-8 lg:my-10 flex gap-x-3 md:gap-x-5 lg:gap-x-8 gap-y-2 md:gap-y-3 lg:gap-y-4 flex-wrap items-center justify-center lg:justify-between">
        {shuffleSkills(skills)
          .filter(({ type }) => skillFilter === "all" || type === skillFilter)
          .map(({ name, size }, i) => (
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
        And always learning new things to expand the list...
      </article>
    </>
  );
}
