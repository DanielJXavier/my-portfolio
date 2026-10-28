import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import en from "@/dictionaries/en.json";

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

    const {
      recommendations: { title },
    } = en;

    expect(metadata.title).toEqual(title);
  });
});
