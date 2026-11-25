import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

describe("Home page", () => {
  it("generates localized metadata", async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ lang: "en" }) }),
    ).resolves.toEqual({
      alternates: {
        canonical: "/en",
        languages: { en: "/en", pt: "/pt" },
      },
    });
  });

  it("renders the page", async () => {
    const page = await Page({ params: Promise.resolve({ lang: "en" }) });

    const { container } = render(page);

    expect(container).toMatchSnapshot();
  });
});
