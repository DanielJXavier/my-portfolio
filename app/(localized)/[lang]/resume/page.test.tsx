import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

import { getResumeContent } from "@/app/_content/resume";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useEducationContent", () => ({
  useEducationContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/education").getEducationContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useExperienceContent", () => ({
  useExperienceContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/experience").getExperienceContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useHomeContent", () => ({
  useHomeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/home").getHomeContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useLanguagesContent", () => ({
  useLanguagesContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/languages").getLanguagesContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useResumeContent", () => ({
  useResumeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/resume").getResumeContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/site").getSiteContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useSkillsContent", () => ({
  useSkillsContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/skills").getSkillsContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Resume page (Server-side)", () => {
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

    const { title } = getResumeContent("en");

    expect(metadata.title).toEqual(title);
  });
});
