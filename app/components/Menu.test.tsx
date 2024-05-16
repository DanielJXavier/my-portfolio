import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Menu from "./Menu";

describe("Menu component", () => {
  it("renders the component", () => {
    render(<Menu />);

    const menu = screen.getByTestId("menu");

    expect(menu).toBeInTheDocument();
  });
});
