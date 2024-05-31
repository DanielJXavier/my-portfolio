import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import RootLayout, { generateMetadata } from "./layout";

import en from "dictionaries/en.json";

jest.mock("next/headers", () => ({
  headers: jest.fn().mockImplementation(() => ({
    get: jest.fn(),
  })),
}));

jest.mock("@vercel/analytics/react", () => ({
  Analytics: jest.fn(),
}));

jest.mock("@vercel/speed-insights/next", () => ({
  SpeedInsights: jest.fn(),
}));

describe("Root layout", () => {
  it("renders the layout", () => {
    const { container } = render(<RootLayout>children</RootLayout>);

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata();

    const {
      global: { author },
    } = en;

    expect(metadata.title.template).toEqual(
      `%s | ${author.firstName} ${author.lastName}`
    );

    expect(metadata.title.default).toEqual(
      `<${author.firstName}${author.lastName} />`
    );

    expect(metadata.description).toEqual(author.headline);
  });
});
