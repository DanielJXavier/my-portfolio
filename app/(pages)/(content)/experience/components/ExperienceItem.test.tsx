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
      resposibilities,
      greatestChallenge,
      hasBlackLogo,
    } = experience[0];

    render(
      <ExperienceItem
        role={role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={description}
        resposibilities={resposibilities}
        greatestChallenge={greatestChallenge}
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
      resposibilities,
      greatestChallenge,
    } = experience[0];

    render(
      <ExperienceItem
        role={role}
        companyId={companyId}
        companyName={companyName}
        year={year}
        description={description}
        resposibilities={resposibilities}
        greatestChallenge={greatestChallenge}
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
      resposibilities,
      greatestChallenge,
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
          resposibilities={resposibilities}
          greatestChallenge={greatestChallenge}
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
    expect(firstResponsibilityElement?.innerHTML).toContain(resposibilities[0]);
    expect(challenge?.innerHTML).toContain(greatestChallenge);
  });
});
