import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams, useSearchParams } from "next/navigation";

import { getSkillsContent } from "@/app/_content/skills";

import Page, { generateMetadata } from "./page";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useSkillsContent", () => ({
  useSkillsContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/skills").getSkillsContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(useSearchParams as jest.Mock).mockImplementation(() => ({
  get: jest.fn().mockImplementation((_) => null),
}));

describe("Skills page (Server-side)", () => {
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

    const { title } = getSkillsContent("en");

    expect(metadata.title).toEqual(title);
  });
});
