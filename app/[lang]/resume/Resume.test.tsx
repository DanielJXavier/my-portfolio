import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page from "./page";

import en from "dictionaries/en.json";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Resume page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it("changes the page title when prints the page", () => {
    const {
      global: { author },
    } = en;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    render(<Page />);

    const beforeprint = new Event("beforeprint");
    window.dispatchEvent(beforeprint);

    expect(document.title).toEqual(
      `Resume_${author.firstName}-${author.lastName}_${year}${month}${day}`
    );

    const afterprint = new Event("afterprint");
    window.dispatchEvent(afterprint);

    expect(document.title).toEqual("");
  });
});
