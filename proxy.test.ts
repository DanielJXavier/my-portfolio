import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { proxy } from "./proxy";

jest.mock("@formatjs/intl-localematcher", () => ({
  match: jest.fn((languages: string[], _supported: string[], fallback: string) =>
    languages[0] ?? fallback,
  ),
}));

jest.mock("next/server", () => ({
  NextResponse: {
    next: jest.fn(),
    redirect: jest.fn(),
  },
}));

const makeRequest = (pathname: string, acceptLanguage?: string) => ({
  nextUrl: { pathname },
  headers: new Map(acceptLanguage ? [["accept-language", acceptLanguage]] : []),
  url: `https://portfolio.example${pathname}`,
}) as unknown as NextRequest;

describe("proxy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("continues when the request path already has a supported locale", () => {
    const response = { type: "next" };
    (NextResponse.next as jest.Mock).mockReturnValue(response);

    expect(proxy(makeRequest("/pt/resume"))).toBe(response);
    expect(NextResponse.next).toHaveBeenCalledTimes(1);
    expect(NextResponse.redirect).not.toHaveBeenCalled();
  });

  it.each([
    ["/", "pt-BR,pt;q=0.9,en;q=0.8", "https://portfolio.example/pt"],
    ["/resume/", "en-US,en;q=0.9,pt;q=0.8", "https://portfolio.example/en/resume"],
    ["/experience", "pt-BR,pt;q=0.9,en;q=0.8", "https://portfolio.example/pt/experience"],
  ])(
    "redirects %s to the best supported language",
    (pathname, acceptLanguage, destination) => {
      const response = { type: "redirect" };
      (NextResponse.redirect as jest.Mock).mockReturnValue(response);

      expect(proxy(makeRequest(pathname, acceptLanguage))).toBe(response);
      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL(destination));
      expect(NextResponse.next).not.toHaveBeenCalled();
    },
  );

  it("falls back to the default locale when no language is requested", () => {
    const response = { type: "redirect" };
    (NextResponse.redirect as jest.Mock).mockReturnValue(response);

    expect(proxy(makeRequest("/resume"))).toBe(response);
    expect(NextResponse.redirect).toHaveBeenCalledWith(
      new URL("https://portfolio.example/en/resume"),
    );
  });
});
