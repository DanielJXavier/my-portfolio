import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import EducationItem from "./EducationItem";

import { education } from "../_config";
import { education as educationStrings } from "dictionaries/en.json";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("EducationItem component", () => {
  it("renders the component", () => {
    const { schoolId, schoolName, startYear, endYear } = education[0];

    const { container } = render(
      <EducationItem
        schoolId={schoolId}
        schoolName={schoolName}
        fieldOfStudy={educationStrings.items[schoolId].fieldOfStudy}
        degree={educationStrings.items[schoolId].degree}
        startYear={startYear}
        endYear={endYear}
        subjects={educationStrings.items[schoolId].subjects}
        imageAltText={educationStrings.imageAltText}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
