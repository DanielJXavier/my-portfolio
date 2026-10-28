import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page from "./page";

describe("Home page", () => {
  it("renders the page", async () => {
    const page = await Page({ params: Promise.resolve({ lang: "en" }) });
    const { container } = render(page);

    expect(container).toMatchSnapshot();
  });
});
