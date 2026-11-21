import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useExperienceContent } from "@/app/_hooks/useExperienceContent";

jest.mock("next/navigation");

describe("useExperienceContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useExperienceContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.items.length).toBeGreaterThan(0);
  });
});
