import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Skills from "./Skills";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

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

describe("Skills component", () => {
  it("renders the component", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
