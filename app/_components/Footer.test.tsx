import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { useParams, usePathname } from "next/navigation";

import Footer from "./Footer";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/site").getSiteContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(usePathname as jest.Mock).mockImplementation(() => "/en");

describe("Footer component", () => {
  it("renders the component", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
