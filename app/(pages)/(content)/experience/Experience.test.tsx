import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Experience from "./Experience";

const { useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("Experience page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
