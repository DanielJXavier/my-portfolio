import { renderHook } from "@testing-library/react";
import { useParams } from "next/navigation";

import {
  getLocalizedContent,
  useLocalizedContent,
} from "@/app/_hooks/useLocalizedContent";
import type { Lang } from "@/i18n-config";

jest.mock("next/navigation");

const mockUseParams = useParams as jest.Mock;

describe("useLocalizedContent", () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({ lang: "pt" });
  });

  it("adds the requested language to localized content", () => {
    const getContent = jest.fn((lang: Lang) => ({ title: `${lang} title` }));

    expect(getLocalizedContent("pt", getContent)).toEqual({
      lang: "pt",
      title: "pt title",
    });
    expect(getContent).toHaveBeenCalledWith("pt");
  });

  it("uses the route language when resolving content", () => {
    const getContent = jest.fn((lang: Lang) => ({ title: `${lang} title` }));

    const { result } = renderHook(() => useLocalizedContent(getContent));

    expect(result.current).toEqual({ lang: "pt", title: "pt title" });
    expect(getContent).toHaveBeenCalledWith("pt");
  });
});
