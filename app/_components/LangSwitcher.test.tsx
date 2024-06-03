import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import LangSwitcher from "./LangSwitcher";

import { useParams, usePathname } from "next/navigation";

jest.mock("next/navigation");

(useParams as jest.Mock).mockImplementation(() => ({ lang: "en" }));
(usePathname as jest.Mock).mockImplementation(() => "/en");

describe("LangSwitcher component", () => {
  it("renders the component", () => {
    render(<LangSwitcher />);

    const langSwitcher = screen.getByTestId("lang-switcher");

    expect(langSwitcher).toBeInTheDocument();
  });

  it("changes the page lang when clicking in a different language", () => {
    render(<LangSwitcher />);

    const langSwitcher = screen.getByTestId("lang-switcher");

    fireEvent.click(langSwitcher.childNodes[1].childNodes[0]);

    expect(document.documentElement.lang).toEqual("pt");
  });
});
