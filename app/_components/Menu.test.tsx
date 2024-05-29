import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Menu from "./Menu";

import { menu } from "@/_config";

const { usePathname, useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

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
    expect(menuList).toHaveClass("hidden md:flex");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveClass("relative [&_hr]:border-t-secondary");
    expect(menuList).not.toHaveClass("hidden md:flex");
  });

  it("renders the component with the first link highlighted", () => {
    usePathname.mockImplementationOnce(() => `/en${menu[0].href}`);

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
    expect(menuList).toHaveClass("hidden md:flex");
  });
});
