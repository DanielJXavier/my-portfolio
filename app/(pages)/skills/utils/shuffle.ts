import { skillType } from "../data";

export default function shuffle(array: skillType[]) {
  if (process.env.NODE_ENV === "test") {
    return array;
  }

  const shuffled = JSON.parse(JSON.stringify(array));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
