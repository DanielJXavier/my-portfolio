import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import { useSiteContent } from "@/app/_hooks/useSiteContent";

jest.mock("next/navigation");

describe("useSiteContent", () => {
  it("returns content in the route language", () => {
    (useParams as jest.Mock).mockReturnValue({ lang: "pt" });

    const { result } = renderHook(() => useSiteContent());

    expect(result.current.lang).toBe("pt");
    expect(result.current.author.headline).toBeTruthy();
  });
});
