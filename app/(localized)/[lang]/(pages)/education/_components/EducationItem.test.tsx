import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { getEducationContent } from "@/app/_content/education";

import EducationItem from "./EducationItem";

describe("EducationItem component", () => {
  it("renders the component", () => {
    const content = getEducationContent("en");
    const educationItem = content.items[0];

    const { container } = render(
      <EducationItem
        {...educationItem}
        imageAltText={content.imageAltText}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
