import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { getRecommendationsContent } from "@/app/_content/recommendations";

import Page, { generateMetadata } from "./page";

describe("Recommendations page", () => {
  it("renders the page", async () => {
    const page = await Page({ params: Promise.resolve({ lang: "en" }) });
    const { container } = render(page);

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        lang: "en",
      }),
    });

    const { title } = getRecommendationsContent("en");

    expect(metadata.title).toEqual(title);
  });
});
