import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import EducationItem from "./EducationItem";

import { education } from "../data";

describe("EducationItem component", () => {
  it("renders the component", () => {
    const { schoolId, schoolName, fieldOfStudy, degree, years, subjects } =
      education[0];

    render(
      <EducationItem
        schoolId={schoolId}
        schoolName={schoolName}
        fieldOfStudy={fieldOfStudy}
        degree={degree}
        years={years}
        subjects={subjects}
      />
    );

    const educationItem = screen.getByTestId("education-item");
    const image = educationItem.querySelector("header > img");
    const title = educationItem.querySelector("header > h2");
    const titleSpan = educationItem.querySelector("header > h2 > span");
    const desc = educationItem.querySelector("section > h3");
    const firstSubject = educationItem.querySelector(
      "section:nth-of-type(2) > ul > li"
    );

    expect(educationItem).toBeInTheDocument();
    expect(image?.getAttribute("src")).toContain(schoolId);
    expect(image?.getAttribute("alt")).toContain(schoolName);
    expect(title?.innerHTML).toContain(fieldOfStudy);
    expect(title?.innerHTML).toContain(schoolName);
    expect(titleSpan?.innerHTML).toContain(years);
    expect(desc?.innerHTML).toContain(degree);
    expect(firstSubject?.innerHTML).toContain(subjects[0]);
  });
});
