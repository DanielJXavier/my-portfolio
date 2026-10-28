import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { renderToStaticMarkup } from "react-dom/server";

import en from "@/dictionaries/en.json";

import { author } from "@/app/_config";

import RootLayout, { generateMetadata, generateStaticParams } from "./layout";

jest.mock("next/headers", () => ({
  headers: jest.fn().mockImplementation(async () => ({
    get: jest.fn().mockImplementation((header) => {
      switch (header) {
        case "x-lang":
          return "en";
        case "x-href":
          return "http://localhost:3000/en/experience";
        default:
          return null;
      }
    }),
  })),
}));

jest.mock("@vercel/analytics/react", () => ({
  Analytics: jest.fn(),
}));

jest.mock("@vercel/speed-insights/next", () => ({
  SpeedInsights: jest.fn(),
}));

describe("Root layout", () => {
  it("renders the layout", async () => {
    const layout = await RootLayout({ children: "children" });
    const markup = renderToStaticMarkup(layout);

    expect(markup).toMatchSnapshot();
  });

  it("generate the static params", async () => {
    const staticParams = await generateStaticParams();

    expect(staticParams).toEqual([{ lang: "en" }, { lang: "pt" }]);
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata();

    const {
      global: {
        author: { headline },
      },
    } = en;

    expect(metadata.title.template).toEqual(
      `%s | ${author.firstName} ${author.lastName}`
    );

    expect(metadata.title.default).toEqual(
      `<${author.firstName}${author.lastName} />`
    );

    expect(metadata.description).toEqual(headline);
  });
});
