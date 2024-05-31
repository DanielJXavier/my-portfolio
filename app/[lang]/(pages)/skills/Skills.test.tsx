import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Skills from "./Skills";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Skills page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
