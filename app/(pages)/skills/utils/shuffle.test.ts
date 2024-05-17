import shuffle from "./shuffle";

import { skills } from "../data";

describe("shuffle util", () => {
  it("returns a shuffled list", () => {
    const shuffledSkills = shuffle(skills);

    expect(skills).not.toContainEqual(shuffledSkills);
  });
});
