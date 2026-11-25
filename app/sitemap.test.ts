import sitemap from "./sitemap";

const siteUrl = "https://www.danielxavier.dev";

describe("sitemap", () => {
  it("lists both localized URLs with reciprocal alternates", () => {
    const expectedPages = [
      { en: "/en", pt: "/pt", priority: 1 },
      {
        en: "/en/experience",
        pt: "/pt/experiencia",
        priority: 0.5,
      },
      {
        en: "/en/education",
        pt: "/pt/formacao-academica",
        priority: 0.5,
      },
      { en: "/en/skills", pt: "/pt/competencias", priority: 0.5 },
      {
        en: "/en/recommendations",
        pt: "/pt/recomendacoes",
        priority: 0.5,
      },
      { en: "/en/resume", pt: "/pt/resume", priority: 0.5 },
    ];
    const entries = sitemap();

    expect(entries).toHaveLength(expectedPages.length * 2);

    for (const { en, pt, priority } of expectedPages) {
      const englishEntry = entries.find(({ url }) => url === `${siteUrl}${en}`);
      const portugueseEntry = entries.find(
        ({ url }) => url === `${siteUrl}${pt}`,
      );
      const languageAlternates = {
        en: `${siteUrl}${en}`,
        pt: `${siteUrl}${pt}`,
      };

      expect(englishEntry).toMatchObject({
        alternates: { languages: languageAlternates },
        changeFrequency: "daily",
        priority,
      });
      expect(portugueseEntry).toMatchObject({
        alternates: { languages: languageAlternates },
        changeFrequency: "daily",
        priority,
      });
      expect(englishEntry?.lastModified).toBeInstanceOf(Date);
      expect(portugueseEntry?.lastModified).toBe(englishEntry?.lastModified);
    }
  });
});
