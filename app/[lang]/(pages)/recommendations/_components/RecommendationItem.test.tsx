import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { recommendations as recommendationsStrings } from "dictionaries/en.json";

import { recommendations } from "../_config";

import RecommendationItem from "./RecommendationItem";

describe("RecommendationItem component", () => {
  it("renders the component", () => {
    const { authorId, authorName, company } = recommendations[0];

    const { container } = render(
      <RecommendationItem
        authorId={authorId}
        authorName={authorName}
        role={recommendationsStrings.items[authorId].role}
        company={company}
        paragraphs={recommendationsStrings.items[authorId].paragraphs}
        imageAltText={recommendationsStrings.imageAltText}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
