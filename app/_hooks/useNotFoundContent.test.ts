import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";

import { useNotFoundContent } from "@/app/_hooks/useNotFoundContent";

jest.mock("next/navigation");

describe("useNotFoundContent", () => {
  it("uses the locale from the current path", () => {
    (usePathname as jest.Mock).mockReturnValue("/pt/nao-encontrado");

    const { result } = renderHook(() => useNotFoundContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.text).toBeTruthy();
  });

  it("falls back to English when the current path has no locale", () => {
    (usePathname as jest.Mock).mockReturnValue("/pagina-inexistente");

    const { result } = renderHook(() => useNotFoundContent());

    expect(result.current.lang).toBe("en");
    expect(result.current.text).toBeTruthy();
  });
});
