import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title component", () => {
  it("renders the component", () => {
    render(<Title>sample title</Title>);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
