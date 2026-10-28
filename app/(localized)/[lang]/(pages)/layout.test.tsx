import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams, usePathname } from "next/navigation";

import Layout from "./layout";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(usePathname as jest.Mock).mockImplementation(() => "/en");

describe("Pages layout", () => {
  it("renders the layout", () => {
    const { container } = render(<Layout>children</Layout>);

    expect(container).toMatchSnapshot();
  });
});
