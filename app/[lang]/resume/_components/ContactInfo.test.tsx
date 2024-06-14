import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import ContactInfo from "./ContactInfo";

describe("ContactInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<ContactInfo />);

    expect(container).toMatchSnapshot();
  });
});
