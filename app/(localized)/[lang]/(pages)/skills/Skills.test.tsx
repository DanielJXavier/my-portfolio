import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { useParams, useSearchParams } from "next/navigation";

import Skills from "./Skills";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));

(useSearchParams as jest.Mock).mockImplementation(() => ({
  get: jest.fn().mockImplementation((_) => null),
}));

describe("Skills page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });

  it("renders the page with random=0 param", () => {
    (useSearchParams as jest.Mock).mockImplementationOnce(() => ({
      get: jest.fn().mockImplementationOnce((_) => "0"),
    }));

    const { container } = render(<Skills />);

    expect(container).toMatchSnapshot();
  });

  it("calls the handleClick function", () => {
    const { container } = render(<Skills />);

    const menu = screen.getByTestId("menu");

    // Hard skills
    fireEvent.click(menu.childNodes[2].childNodes[0]);
    expect(container).toMatchSnapshot();

    // Soft skills
    fireEvent.click(menu.childNodes[4].childNodes[0]);
    expect(container).toMatchSnapshot();

    // All skills
    fireEvent.click(menu.childNodes[0].childNodes[0]);
    expect(container).toMatchSnapshot();
  });
});
