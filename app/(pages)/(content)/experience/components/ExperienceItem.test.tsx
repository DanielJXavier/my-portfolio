import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ExperienceItem from "./ExperienceItem";

import { ExperienceModeContext } from "../Experience";
import { experience } from "../data";

describe("ExperienceItem component", () => {
  it("renders the component", () => {
    const {
      role,
      companyId,
      companyName,
      year,
      description,
      responsibilities,
      biggestChallenge,
      hasBlackLogo,
    } = experience[0];

    render(
      <ExperienceItem
        role={role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={description}
        responsibilities={responsibilities}
        biggestChallenge={biggestChallenge}
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
    expect(title?.innerHTML).toContain(role);
    expect(title?.innerHTML).toContain(companyName);
    expect(titleSpan?.innerHTML).toContain(year);
    expect(desc?.innerHTML).toContain(description);
  });

  it("renders the component with black logo style", () => {
    const {
      role,
      companyId,
      companyName,
      year,
      description,
      responsibilities,
      biggestChallenge,
    } = experience[0];

    render(
      <ExperienceItem
        role={role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={description}
        responsibilities={responsibilities}
        biggestChallenge={biggestChallenge}
        hasBlackLogo={true}
      />
    );

    const experienceItem = screen.getByTestId("experience-item");

    expect(experienceItem.querySelector("header > img")?.className).toContain(
      "border-2 border-solid border-secondary"
    );
  });

  it("renders the component in the detailed mode", () => {
    const {
      role,
      companyId,
      companyName,
      year,
      description,
      responsibilities,
      biggestChallenge,
      hasBlackLogo,
    } = experience[0];

    render(
      <ExperienceModeContext.Provider value="detailed">
        <ExperienceItem
          role={role}
          companyId={companyId}
          companyName={companyName}
          year={year}
          description={description}
          responsibilities={responsibilities}
          biggestChallenge={biggestChallenge}
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
      responsibilities[0].text
    );

    expect(challenge?.innerHTML).toContain(biggestChallenge);
  });
});
