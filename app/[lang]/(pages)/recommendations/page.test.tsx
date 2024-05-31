import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

import en from "dictionaries/en.json";

describe("Recommendations page", () => {
  it("renders the page", () => {
    const { container } = render(
      <Page
        params={{
          lang: "en",
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata({
      params: {
        lang: "en",
      },
    });

    const {
      recommendations: { title },
    } = en;

    expect(metadata.title).toEqual(title);
  });
});
