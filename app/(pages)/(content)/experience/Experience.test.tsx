import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Experience from "./Experience";

describe("Experience page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
