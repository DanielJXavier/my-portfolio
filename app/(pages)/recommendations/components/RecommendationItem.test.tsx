import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import RecommendationItem from "./RecommendationItem";

import { recommendations } from "../data";

describe("RecommendationItem component", () => {
  it("renders the component", () => {
    const { authorId, authorName, role, company, paragraphs } =
      recommendations[0];

    render(
      <RecommendationItem
        authorId={authorId}
        authorName={authorName}
        role={role}
        company={company}
        paragraphs={paragraphs}
      />
    );

    const recommendationItem = screen.getByTestId("recommendation-item");
    const image = recommendationItem.querySelector("header > img");
    const title = recommendationItem.querySelector("header > div > h2");
    const subtitle = recommendationItem.querySelector("header > div > h3");
    const firstParagraph = recommendationItem.querySelector(
      "section > blockquote"
    );

    expect(recommendationItem).toBeInTheDocument();
    expect(image?.getAttribute("src")).toContain(authorId);
    expect(image?.getAttribute("alt")).toContain(authorName);
    expect(title?.innerHTML).toContain(authorName);
    expect(subtitle?.innerHTML).toContain(role);
    expect(subtitle?.innerHTML).toContain(company);
    expect(firstParagraph?.innerHTML).toContain(paragraphs[0]);
  });
});
