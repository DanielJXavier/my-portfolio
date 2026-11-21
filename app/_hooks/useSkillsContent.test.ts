import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useSkillsContent } from "@/app/_hooks/useSkillsContent";

jest.mock("next/navigation");

describe("useSkillsContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useSkillsContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.hardSkills.length).toBeGreaterThan(0);
  });
});
