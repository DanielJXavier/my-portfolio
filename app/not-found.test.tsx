import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import NotFound from "./not-found";

describe("NotFound page", () => {
  it("renders the page", () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });

  it("renders the page with dark theme", () => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn().mockImplementation(() => ({
        matches: true,
      })),
    });

    render(<NotFound />);

    expect(document.documentElement.className).toContain("dark");
  });
});
