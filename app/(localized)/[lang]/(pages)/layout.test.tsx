import "tests/matchMedia.mock";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams, usePathname } from "next/navigation";

import Layout from "./layout";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/site").getSiteContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(usePathname as jest.Mock).mockImplementation(() => "/en");

describe("Pages layout", () => {
  it("renders the layout", () => {
    const { container } = render(<Layout>children</Layout>);

    expect(container).toMatchSnapshot();
  });
});
