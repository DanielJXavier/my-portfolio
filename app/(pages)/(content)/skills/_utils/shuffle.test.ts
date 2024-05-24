import shuffle from "./shuffle";

import { skills } from "../data";

describe("shuffle util", () => {
  const NODE_ENV_ORIGINAL = process.env.NODE_ENV;

  afterAll(() => {
    process.env = Object.assign(process.env, {
      NODE_ENV: NODE_ENV_ORIGINAL,
    });
  });

  it("returns the given list in test environment", () => {
    const shuffledSkills = shuffle(skills);

    expect(skills).toEqual(shuffledSkills);
  });

  it("returns a shuffled list", () => {
    process.env = Object.assign(process.env, {
      NODE_ENV: "production",
    });

    const shuffledSkills = shuffle(skills);

    expect(skills).not.toStrictEqual(shuffledSkills);
  });
});
