import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { usePathname } from "next/navigation";

import GlobalNotFoundShell from "./GlobalNotFoundShell";

jest.mock("next/navigation");

jest.mock("@/app/(localized)/[lang]/not-found", () => {
  function MockNotFound() {
    return <div>Not found</div>;
  }

  return MockNotFound;
});

describe("GlobalNotFoundShell", () => {
  const mockUsePathname = usePathname as jest.Mock;

  it("uses the language from the current route", () => {
    mockUsePathname.mockReturnValue("/pt/missing-page");

    render(<GlobalNotFoundShell fontClassName="font" />);

    expect(document.documentElement.lang).toBe("pt");
    expect(screen.getByText("Not found")).toBeInTheDocument();
  });

  it.each([null, "/unknown/missing-page"])(
    "falls back to English for pathname %s",
    (pathname) => {
      mockUsePathname.mockReturnValue(pathname);

      render(<GlobalNotFoundShell fontClassName="font" />);

      expect(document.documentElement.lang).toBe("en");
    },
  );
});
