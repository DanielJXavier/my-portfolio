import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

import { useParams, usePathname } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));
(usePathname as jest.Mock).mockImplementation(() => "/en");

describe("Footer component", () => {
  it("renders the component", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
