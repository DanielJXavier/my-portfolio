import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ExperienceItem from "./ExperienceItem";

import { ExperienceModeContext } from "../Experience";

import { experience } from "../_config";
import { experience as experienceStrings } from "dictionaries/en.json";

const { useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("ExperienceItem component", () => {
  it("renders the component", () => {
    const { key, companyId, companyName, year, hasBlackLogo } = experience[0];

    render(
      <ExperienceItem
        role={experienceStrings.items[key].role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={experienceStrings.items[key].description}
        responsibilities={experienceStrings.items[key].responsibilities}
        biggestChallenge={experienceStrings.items[key].biggestChallenge}
        hasBlackLogo={hasBlackLogo}
      />
    );

    const experienceItem = screen.getByTestId("experience-item");
    const image = experienceItem.querySelector("header > img");
    const title = experienceItem.querySelector("header > h2");
    const titleSpan = experienceItem.querySelector("header > h2 > span");
    const desc = experienceItem.querySelector("section > h3");

    expect(experienceItem).toBeInTheDocument();
    expect(image?.getAttribute("src")).toContain(companyId);
    expect(image?.getAttribute("alt")).toContain(companyName);
    expect(title?.innerHTML).toContain(experienceStrings.items[key].role);
    expect(title?.innerHTML).toContain(companyName);
    expect(titleSpan?.innerHTML).toContain(year);
    expect(desc?.innerHTML).toContain(experienceStrings.items[key].description);
  });

  it("renders the component with black logo style", () => {
    const { key, companyId, companyName, year } = experience[0];

    render(
      <ExperienceItem
        role={experienceStrings.items[key].role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={experienceStrings.items[key].description}
        responsibilities={experienceStrings.items[key].responsibilities}
        biggestChallenge={experienceStrings.items[key].biggestChallenge}
        hasBlackLogo={true}
      />
    );

    const experienceItem = screen.getByTestId("experience-item");

    expect(experienceItem.querySelector("header > img")?.className).toContain(
      "border-2 border-solid border-secondary"
    );
  });

  it("renders the component in the detailed mode", () => {
    const { key, companyId, companyName, year, hasBlackLogo } = experience[0];

    render(
      <ExperienceModeContext.Provider value="detailed">
        <ExperienceItem
          role={experienceStrings.items[key].role}
          companyId={companyId}
          companyName={companyName}
          year={year}
          description={experienceStrings.items[key].description}
          responsibilities={experienceStrings.items[key].responsibilities}
          biggestChallenge={experienceStrings.items[key].biggestChallenge}
          hasBlackLogo={hasBlackLogo}
        />
      </ExperienceModeContext.Provider>
    );

    const experienceItem = screen.getByTestId("experience-item");

    const firstResponsibilityElement = experienceItem.querySelector(
      "section:nth-of-type(2) > ul > li"
    );

    const challenge = experienceItem.querySelector(
      "section:nth-of-type(3) > p"
    );

    expect(experienceItem).toBeInTheDocument();

    expect(firstResponsibilityElement?.innerHTML).toContain(
      experienceStrings.items[key].responsibilities[0]
    );

    expect(challenge?.innerHTML).toContain(
      experienceStrings.items[key].biggestChallenge
    );
  });
});