import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Header from "./Header";

import { usePathname, useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Header component", () => {
  it("renders the component", () => {
    render(<Header />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("renders the component for home with the correct classes", () => {
    (usePathname as jest.Mock).mockImplementationOnce(() => "/en");

    render(<Header />);

    const headerLink = screen.getByTestId("header-link");

    expect(headerLink).toHaveClass("text-secondary cursor-default");
  });
});
