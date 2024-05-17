import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import RootLayout from "./layout";

jest.mock("@vercel/analytics/react", () => ({
  Analytics: jest.fn(),
}));

jest.mock("@vercel/speed-insights/next", () => ({
  SpeedInsights: jest.fn(),
}));

describe("Root layout", () => {
  it("renders the layout", () => {
    const { container } = render(<RootLayout>layout</RootLayout>);

    expect(container).toMatchSnapshot();
  });
});
