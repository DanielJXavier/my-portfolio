import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ThemeSwitcher from "./ThemeSwitcher";

describe("ThemeSwitcher component", () => {
  it("renders the component", () => {
    render(<ThemeSwitcher />);

    const themeSwitcher = screen.getByTestId("theme-switcher");

    expect(themeSwitcher).toBeInTheDocument();
  });
});
