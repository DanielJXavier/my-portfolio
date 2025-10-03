import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import ContactInfo from "./ContactInfo";

import { useParams } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

describe("ContactInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<ContactInfo />);

    expect(container).toMatchSnapshot();
  });
});
