import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Layout from "./layout";

const { useParams, usePathname } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));
usePathname.mockImplementation(() => "/en");

describe("Pages layout", () => {
  it("renders the layout", () => {
    const { container } = render(<Layout>children</Layout>);

    expect(container).toMatchSnapshot();
  });
});
