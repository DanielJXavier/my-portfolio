import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useLanguagesContent } from "@/app/_hooks/useLanguagesContent";

jest.mock("next/navigation");

describe("useLanguagesContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useLanguagesContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.items.length).toBeGreaterThan(0);
  });
});
