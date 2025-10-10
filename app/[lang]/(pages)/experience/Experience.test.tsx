import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import Experience from "./Experience";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Experience page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Experience />);

    expect(container).toMatchSnapshot();
  });
});
