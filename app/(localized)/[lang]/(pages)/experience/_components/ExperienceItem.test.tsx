import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import { getExperienceContent } from "@/app/_content/experience";

import ExperienceItem from "./ExperienceItem";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useSkillsContent", () => ({
  useSkillsContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/skills").getSkillsContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("ExperienceItem component", () => {
  it("renders the component", () => {
    const content = getExperienceContent("en");
    const {
      companyId,
      companyName,
      startDate,
      endDate,
      mainStack,
      hasBlackLogo,
      role,
      accomplishments,
    } = content.items[1];

    const { container } = render(
      <ExperienceItem
        role={role}
        companyId={companyId}
        companyName={companyName}
        startDate={startDate}
        endDate={endDate}
        accomplishments={accomplishments}
        mainStack={mainStack}
        imageAltText={content.imageAltText}
        hasBlackLogo={hasBlackLogo}
        dateSeparatorText={content.dateSeparatorText}
        endDateText={content.endDateText}
        mainStackTitle={content.mainStackTitle}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
