import type { Skill } from "@/app/_content/skills/shared";

type SkillsArray = Skill[];

export default function shuffle(array: SkillsArray) {
  if (process.env.NODE_ENV === "test") {
    return array;
  }

  const shuffledArray: SkillsArray = structuredClone(array);

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
