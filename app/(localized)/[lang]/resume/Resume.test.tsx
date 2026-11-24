import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page from "./page";

import { getSiteContent } from "@/app/_content/site";

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

describe("Resume page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it("changes the page title when prints the page", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    render(<Page />);

    const beforeprint = new Event("beforeprint");
    window.dispatchEvent(beforeprint);

    const { author } = getSiteContent("en");

    expect(document.title).toEqual(`Resume_${author.firstName}-${author.lastName}_${year}${month}${day}`);

    const afterprint = new Event("afterprint");
    window.dispatchEvent(afterprint);

    expect(document.title).toEqual("");
  });
});
