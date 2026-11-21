import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

import { getResumeContent } from "@/app/_content/resume";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Resume page (Server-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it("generate the page metadata", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        lang: "en",
      }),
    });

    const { title } = getResumeContent("en");

    expect(metadata.title).toEqual(title);
  });
});
