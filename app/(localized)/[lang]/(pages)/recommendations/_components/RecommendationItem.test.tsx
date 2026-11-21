import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { getRecommendationsContent } from "@/app/_content/recommendations";

import RecommendationItem from "./RecommendationItem";

describe("RecommendationItem component", () => {
  it("renders the component", () => {
    const { authorId, authorName, company, role, paragraphs, imageAltText } =
      getRecommendationsContent("en").items[0];

    const { container } = render(
      <RecommendationItem
        authorId={authorId}
        authorName={authorName}
        role={role}
        company={company}
        paragraphs={paragraphs}
        imageAltText={imageAltText}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
