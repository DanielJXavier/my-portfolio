import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams, useSearchParams } from "next/navigation";

import en from "dictionaries/en.json";

import Page, { generateMetadata } from "./page";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(useSearchParams as jest.Mock).mockImplementation(() => ({
  get: jest.fn().mockImplementation((_) => null),
}));

describe("Skills page (Server-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata({
      params: {
        lang: "en",
      },
    });

    const {
      skills: { title },
    } = en;

    expect(metadata.title).toEqual(title);
  });
});
