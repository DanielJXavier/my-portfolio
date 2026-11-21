import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Summary from "./Summary";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useHomeContent", () => ({
  useHomeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/home").getHomeContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useResumeContent", () => ({
  useResumeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/resume").getResumeContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Summary component", () => {
  it("renders the component", () => {
    const { container } = render(<Summary />);

    expect(container).toMatchSnapshot();
  });
});
