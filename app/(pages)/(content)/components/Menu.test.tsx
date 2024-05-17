import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Menu from "./Menu";

describe("Menu component", () => {
  it("renders the component", () => {
    render(
      <Menu
        items={["Item 1", "Item 2"]}
        activeItem=""
        setActiveItem={jest.fn()}
      />
    );

    const menu = screen.getByTestId("menu");

    expect(menu).toBeInTheDocument();
  });

  it("renders the component with an active item", () => {
    render(
      <Menu
        items={["Item 1", "Item 2"]}
        activeItem="Item 1"
        setActiveItem={jest.fn()}
      />
    );

    const menu = screen.getByTestId("menu");
    const activeItem = menu.childNodes[0].childNodes[0];

    expect(activeItem).toHaveClass("text-secondary underline cursor-default");
    expect(activeItem).toBeDisabled();
  });

  it("calls the setActiveItem function", () => {
    const setActiveItem = jest.fn();

    render(
      <Menu
        items={["Item 1", "Item 2"]}
        activeItem=""
        setActiveItem={setActiveItem}
      />
    );

    const menu = screen.getByTestId("menu");

    fireEvent.click(menu.childNodes[0].childNodes[0]);

    expect(setActiveItem).toHaveBeenCalledTimes(1);
    expect(setActiveItem).toHaveBeenCalledWith("Item 1");
  });
});
