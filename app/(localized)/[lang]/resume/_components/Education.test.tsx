import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Education from "./Education";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Education component", () => {
  it("renders the component", () => {
    const { container } = render(<Education />);

    expect(container).toMatchSnapshot();
  });
});
