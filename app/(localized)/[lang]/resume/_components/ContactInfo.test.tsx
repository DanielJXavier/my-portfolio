import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import ContactInfo from "./ContactInfo";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

jest.mock("@/app/_hooks/useResumeContent", () => ({
  useResumeContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/resume").getResumeContent("en"),
  }),
}));

jest.mock("@/app/_hooks/useSiteContent", () => ({
  useSiteContent: () => ({
    lang: "en",
    ...jest.requireActual("@/app/_content/site").getSiteContent("en"),
  }),
}));

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("ContactInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<ContactInfo />);

    expect(container).toMatchSnapshot();
  });
});
