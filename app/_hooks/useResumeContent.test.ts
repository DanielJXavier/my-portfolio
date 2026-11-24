import { renderHook } from "@testing-library/react";

import { useParams } from "next/navigation";

import { useResumeContent } from "@/app/_hooks/useResumeContent";

jest.mock("next/navigation");

describe("useResumeContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useResumeContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.maxSummaryParagraphs).toBeGreaterThan(0);
  });
});
