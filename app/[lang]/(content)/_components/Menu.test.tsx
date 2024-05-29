import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Menu from "./Menu";

const menuItems = [
  { text: "Item 1", value: "1" },
  { text: "Item 2", value: "2" },
];

describe("Menu component", () => {
  it("renders the component", () => {
    render(<Menu items={menuItems} activeItem="" handleClick={jest.fn()} />);

    const menu = screen.getByTestId("menu");

    expect(menu).toBeInTheDocument();
  });

  it("renders the component with an active item", () => {
    render(<Menu items={menuItems} activeItem="1" handleClick={jest.fn()} />);

    const menu = screen.getByTestId("menu");
    const activeItem = menu.childNodes[0].childNodes[0];

    expect(activeItem).toHaveClass("text-secondary underline cursor-default");
    expect(activeItem).toBeDisabled();
  });

  it("calls the handleClick function", () => {
    const handleClick = jest.fn();

    render(<Menu items={menuItems} activeItem="" handleClick={handleClick} />);

    const menu = screen.getByTestId("menu");

    fireEvent.click(menu.childNodes[0].childNodes[0]);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith("1");
  });
});
