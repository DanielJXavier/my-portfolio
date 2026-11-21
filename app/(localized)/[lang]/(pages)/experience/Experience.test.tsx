import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import Experience from "./Experience";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useExperienceContent", () => ({
  useExperienceContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/experience").getExperienceContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useSkillsContent", () => ({
  useSkillsContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/skills").getSkillsContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Experience page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
