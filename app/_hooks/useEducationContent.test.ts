import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useEducationContent } from "@/app/_hooks/useEducationContent";

jest.mock("next/navigation");

describe("useEducationContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useEducationContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.items.length).toBeGreaterThan(0);
  });
});
