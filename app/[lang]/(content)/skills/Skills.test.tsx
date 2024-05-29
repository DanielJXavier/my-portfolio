import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Skills from "./Skills";

const { useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("Skills page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
