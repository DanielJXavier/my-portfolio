import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Menu from "./Menu";

import { menu } from "@/data";

const { usePathname } = require("next/navigation");

jest.mock("next/navigation");

describe("Menu component", () => {
  it("renders the component", () => {
    render(<Menu />);

    const menu = screen.getByTestId("menu");

    expect(menu).toBeInTheDocument();
  });

  it("opens the menu and add the correct classes", () => {
    render(<Menu />);

    const menuButton = screen.getByTestId("menu-button");
    const menuList = screen.getByTestId("menu-list");

    expect(menuButton).not.toHaveClass("relative [&_hr]:border-t-secondary");
    expect(menuList).toHaveClass("hidden lg:flex");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveClass("relative [&_hr]:border-t-secondary");
    expect(menuList).not.toHaveClass("hidden lg:flex");
  });

  it("renders the component with the first link highlighted", () => {
    usePathname.mockImplementationOnce(() => menu[0].href);

    render(<Menu />);

    const menuList = screen.getByTestId("menu-list");

    expect(menuList.querySelector("a")?.className).toContain(
      "text-secondary cursor-default underline"
    );
  });

  it("closes the menu when pathname changes", () => {
    usePathname.mockImplementationOnce(() => menu[0].href);

    render(<Menu />);

    const menuButton = screen.getByTestId("menu-button");
    const menuList = screen.getByTestId("menu-list");

    fireEvent.click(menuButton);
    fireEvent.click(menuList.childNodes[1]);

    expect(menuButton).not.toHaveClass("relative [&_hr]:border-t-secondary");
    expect(menuList).toHaveClass("hidden lg:flex");
  });
});