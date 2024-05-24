import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the component", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
