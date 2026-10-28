import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { usePathname, useParams } from "next/navigation";

import { menu } from "@/app/_config";

import Menu from "./Menu";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

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
    (usePathname as jest.Mock).mockImplementationOnce(
      () => `/en${menu[0].href}`
    );

    render(<Menu />);

    const menuList = screen.getByTestId("menu-list");

    expect(menuList.querySelector("a")?.className).toContain(
      "text-secondary pointer-events-none cursor-default underline"
    );
  });

  it("closes the menu when pathname changes", () => {
    const pathname = usePathname as jest.Mock;
    pathname.mockReturnValue(menu[0].href);

    const { rerender } = render(<Menu />);

    const menuButton = screen.getByTestId("menu-button");

    fireEvent.click(menuButton);

    pathname.mockReturnValue(menu[1].href);
    rerender(<Menu />);

    expect(screen.getByTestId("menu-button")).not.toHaveClass(
      "relative [&_hr]:border-t-secondary"
    );

    expect(screen.getByTestId("menu-list")).toHaveClass("hidden md:flex");
  });
});
