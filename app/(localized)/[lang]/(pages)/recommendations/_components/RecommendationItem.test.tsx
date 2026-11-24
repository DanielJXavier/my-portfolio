import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { getRecommendationsContent } from "@/app/_content/recommendations";

import RecommendationItem from "./RecommendationItem";

describe("RecommendationItem component", () => {
  it("renders the component", () => {
    const recommendations = getRecommendationsContent("en");
    const { authorId, authorName, company, role, paragraphs } =
      recommendations.items[0];

    const { container } = render(
      <RecommendationItem
        authorId={authorId}
        authorName={authorName}
        role={role}
        company={company}
        paragraphs={paragraphs}
        imageAltText={recommendations.imageAltText}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
