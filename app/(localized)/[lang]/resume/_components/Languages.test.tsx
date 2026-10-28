import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Languages from "./Languages";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("Languages component", () => {
  it("renders the component", () => {
    const { container } = render(<Languages />);

    expect(container).toMatchSnapshot();
  });
});
