import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Skills from "./Skills";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Skills component", () => {
  it("renders the component", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
