import { getLocalizedAlternates, type LocalizedPage } from "./_metadata";

const localizedPaths = [
  ["home", "", ""],
  ["resume", "/resume", "/resume"],
  ["experience", "/experience", "/experiencia"],
  ["education", "/education", "/formacao-academica"],
  ["skills", "/skills", "/competencias"],
  ["recommendations", "/recommendations", "/recomendacoes"],
] as const;

describe("getLocalizedAlternates", () => {
  it.each(localizedPaths)(
    "returns localized paths for %s",
    (page, path, translatedPath) => {
      expect(getLocalizedAlternates(page, "en")).toEqual({
        canonical: `/en${path}`,
        languages: { en: `/en${path}`, pt: `/pt${translatedPath}` },
      });
    },
  );

  it("uses an empty path if a page is missing from the menu", () => {
    const unknownPage = "unknown" as LocalizedPage;

    expect(getLocalizedAlternates(unknownPage, "en")).toEqual({
      canonical: "/en",
      languages: { en: "/en", pt: "/pt" },
    });
  });
});
