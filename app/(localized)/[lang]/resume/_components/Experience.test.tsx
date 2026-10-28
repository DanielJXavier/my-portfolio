import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Experience from "./Experience";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Experience component", () => {
  it("renders the component", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
