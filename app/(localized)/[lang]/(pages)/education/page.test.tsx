import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { getEducationContent } from "@/app/_content/education";

import Page, { generateMetadata } from "./page";

describe("Education page", () => {
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

    expect(metadata.title).toEqual(getEducationContent("en").title);
  });
});
