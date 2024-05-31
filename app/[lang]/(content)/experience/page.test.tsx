import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

import en from "dictionaries/en.json";

const { useParams } = require("next/navigation");

jest.mock("next/navigation");

useParams.mockImplementation(() => ({ lang: "en" }));

describe("Experience page (Server-side)", () => {
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
      experience: { title },
    } = en;

    expect(metadata.title).toEqual(title);
  });
});
