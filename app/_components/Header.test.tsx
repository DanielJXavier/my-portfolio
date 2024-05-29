import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Header from "./Header";

const { usePathname, useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("Header component", () => {
  it("renders the component", () => {
    render(<Header />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("renders the component for home with the correct classes", () => {
    usePathname.mockImplementationOnce(() => "/en");

    render(<Header />);

    const headerLink = screen.getByTestId("header-link");

    expect(headerLink).toHaveClass("text-secondary cursor-default");
  });
});
