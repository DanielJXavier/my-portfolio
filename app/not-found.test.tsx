import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import NotFound from "./not-found";

describe("NotFound page", () => {
  it("renders the page", () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
