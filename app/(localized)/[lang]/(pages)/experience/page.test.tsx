import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import { getExperienceContent } from "@/app/_content/experience";

import Page, { generateMetadata } from "./page";

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

describe("Experience page (Server-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        lang: "en",
      }),
    });

    expect(metadata.title).toEqual(getExperienceContent("en").title);
  });
});
