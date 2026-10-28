import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Loading from "./loading";

describe("Loading page", () => {
  it("renders the page", () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
