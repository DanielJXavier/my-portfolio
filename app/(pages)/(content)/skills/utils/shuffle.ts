import { skillType } from "../data";

export default function shuffle(array: skillType[]) {
  if (process.env.NODE_ENV === "test") {
    return array;
  }

  const shuffledArray: skillType[] = JSON.parse(JSON.stringify(array));

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
