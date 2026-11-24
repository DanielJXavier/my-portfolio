import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import ThemeSwitcher from "./ThemeSwitcher";

jest.mock("@/app/_hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    themeSwitcher: {
      darkMode: "Dark mode",
      lightMode: "Light mode",
      toggleToDark: "Toggle to dark theme",
      toggleToLight: "Toggle to light theme",
    },
  }),
}));

describe("ThemeSwitcher component", () => {
  it("renders the component", () => {
    render(<ThemeSwitcher />);

    const themeSwitcher = screen.getByTestId("theme-switcher");

    expect(themeSwitcher).toBeInTheDocument();
  });

  it("changes the theme to dark", () => {
    render(<ThemeSwitcher />);

    expect(document.documentElement.className).not.toContain("dark");

    const themeSwitcher = screen.getByTestId("theme-switcher");

    fireEvent.click(themeSwitcher);

    expect(document.documentElement.className).toContain("dark");

    expect(window.localStorage.theme).toEqual("dark");
  });
});
