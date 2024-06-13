import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import VisibiltyControl from "./VisibiltyControl";

describe("VisibiltyControl component", () => {
  it("renders the component", () => {
    const { container } = render(<VisibiltyControl>children</VisibiltyControl>);

    expect(container).toMatchSnapshot();
  });

  it("hide the children when printing", () => {
    render(<VisibiltyControl>children</VisibiltyControl>);

    const visibilityControl = screen.getByTestId("visibility-control");

    fireEvent.click(visibilityControl.childNodes[0]);

    expect(visibilityControl).toHaveClass(
      "opacity-50 line-through print:hidden"
    );
  });
});
