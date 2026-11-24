import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Languages from "./Languages";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useLanguagesContent", () => ({
  useLanguagesContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/languages").getLanguagesContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useResumeContent", () => ({
  useResumeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/resume").getResumeContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Languages component", () => {
  it("renders the component", () => {
    const { container } = render(<Languages />);

    expect(container).toMatchSnapshot();
  });
});
