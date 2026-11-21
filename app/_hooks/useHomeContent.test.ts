import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useHomeContent } from "@/app/_hooks/useHomeContent";

jest.mock("next/navigation");

describe("useHomeContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useHomeContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.greeting).toBeTruthy();
  });
});
