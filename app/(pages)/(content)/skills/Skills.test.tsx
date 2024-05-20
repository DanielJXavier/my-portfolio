import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Skills from "./Skills";

describe("Skills page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
