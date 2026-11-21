import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Experience from "./Experience";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useExperienceContent", () => ({
  useExperienceContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/experience").getExperienceContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useResumeContent", () => ({
  useResumeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/resume").getResumeContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useSkillsContent", () => ({
  useSkillsContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/skills").getSkillsContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Experience component", () => {
  it("renders the component", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
