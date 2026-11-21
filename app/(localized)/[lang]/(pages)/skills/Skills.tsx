"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import Title from "@/app/_components/Title";
import Psychology from "@/app/_icons/Psychology";
import { useSkillsContent } from "@/app/_hooks/useSkillsContent";

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
  const searchParams = useSearchParams();

  const random = searchParams.get("random");

  const { title, menu, hardSkills, softSkills, bottomText } =
    useSkillsContent();

  const allSkills = [...hardSkills, ...softSkills];

  const [filter, setFilter] = useState("all");

  const menuItems = [
    { text: menu.all, value: "all" },
    { text: menu.hard, value: "hard" },
    { text: menu.soft, value: "soft" },
  ];

  const skills =
    filter === "hard" ? hardSkills : filter === "soft" ? softSkills : allSkills;

  const handleClick = (item: string) => {
    setFilter(item);
  };

  return (
    <>
      <Title icon={<Psychology />}>{title}</Title>

      <Menu
        items={menuItems}
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
