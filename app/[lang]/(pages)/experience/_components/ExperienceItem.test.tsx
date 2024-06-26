import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import { experience as experienceConfig } from "../_config";
import { experience } from "dictionaries/en.json";

import ExperienceItem from "./ExperienceItem";
import { ExperienceItemsType } from "get-dictionary";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("ExperienceItem component", () => {
  it("renders the component", () => {
    const { key, companyId, companyName, year, mainStack, hasBlackLogo } =
      experienceConfig[1];

    const experienceItem = (experience.items as ExperienceItemsType)[key];
    const imageAltText = experience.imageAltText;

    const { container } = render(
      <ExperienceItem
        role={experienceItem.role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={experienceItem.description}
        accomplishments={experienceItem.accomplishments}
        biggestChallenge={experienceItem.biggestChallenge}
        mainStack={mainStack}
        imageAltText={imageAltText}
        hasBlackLogo={hasBlackLogo}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
