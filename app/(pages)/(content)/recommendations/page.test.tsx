import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page from "./page";

describe("Recommendations page", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
