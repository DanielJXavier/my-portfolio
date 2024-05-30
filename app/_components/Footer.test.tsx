import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

const { useParams, usePathname } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));
usePathname.mockImplementation(() => "/en");

describe("Footer component", () => {
  it("renders the component", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
