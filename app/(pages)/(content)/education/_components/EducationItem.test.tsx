import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import EducationItem from "./EducationItem";

import { education } from "../_config";
import { education as educationStrings } from "dictionaries/en.json";

const { useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("EducationItem component", () => {
  it("renders the component", () => {
    const { schoolId, schoolName, years } = education[0];

    render(
      <EducationItem
        schoolId={schoolId}
        schoolName={schoolName}
        fieldOfStudy={educationStrings[schoolId].fieldOfStudy}
        degree={educationStrings[schoolId].degree}
        years={years}
        subjects={educationStrings[schoolId].subjects}
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
    expect(title?.innerHTML).toContain(educationStrings[schoolId].fieldOfStudy);
    expect(title?.innerHTML).toContain(schoolName);
    expect(titleSpan?.innerHTML).toContain(years);
    expect(desc?.innerHTML).toContain(educationStrings[schoolId].degree);
    expect(firstSubject?.innerHTML).toContain(
      educationStrings[schoolId].subjects[0]
    );
  });
});
