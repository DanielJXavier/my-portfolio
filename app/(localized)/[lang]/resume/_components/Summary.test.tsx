import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Summary from "./Summary";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Summary component", () => {
  it("renders the component", () => {
    const { container } = render(<Summary />);

    expect(container).toMatchSnapshot();
  });
});
