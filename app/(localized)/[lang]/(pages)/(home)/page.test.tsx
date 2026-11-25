import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

import Page, { generateMetadata } from "./page";

describe("Home page", () => {
  it("generates localized metadata", async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ lang: "en" }) }),
    ).resolves.toEqual({
      alternates: {
        canonical: "/en",
        languages: { en: "/en", pt: "/pt" },
      },
    });
  });

  it("renders the page", async () => {
    const page = await Page({ params: Promise.resolve({ lang: "en" }) });

    const { container } = render(page);

    expect(container).toMatchSnapshot();
  });

  it.each([
    [
      "en",
      "About this project",
      "View source on GitHub",
      "Technologies and tools",
      "Code quality metrics",
    ],
    [
      "pt",
      "Sobre este projeto",
      "Ver código-fonte no GitHub",
      "Tecnologias e ferramentas",
      "Métricas de qualidade do código",
    ],
  ] as const)(
    "renders the localized project section for %s",
    async (
      lang,
      title,
      sourceLinkLabel,
      toolsLabel,
      metricsLabel,
    ) => {
      const page = await Page({ params: Promise.resolve({ lang }) });
      render(page);

      const section = screen.getByRole("region", { name: title });
      expect(section).toHaveTextContent(title);
      expect(
        within(section).getByRole("link", { name: sourceLinkLabel }),
      ).toHaveAttribute("href", "https://github.com/DanielJXavier/my-portfolio");

      const tools = within(section).getByRole("group", {
        name: toolsLabel,
      });
      const toolBadges = within(tools).getAllByRole("img");
      expect(toolBadges.map((badge) => badge.getAttribute("alt"))).toEqual([
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Vercel",
        "Jest",
        "Testing Library",
        "Cypress",
        "GitHub Actions",
      ]);
      expect(within(tools).getAllByRole("list")).toHaveLength(1);
      expect(
        toolBadges.every(
          (badge) => badge.getAttribute("loading") === "lazy",
        ),
      ).toBe(true);

      const metrics = within(section).getByRole("list", { name: metricsLabel });
      const badges = within(metrics).getAllByRole("img");
      expect(badges).toHaveLength(5);
      expect(
        within(metrics).getAllByRole("link").map((link) => link.getAttribute("href")),
      ).toEqual(
        Array(5).fill(
          "https://sonarcloud.io/summary/overall?id=DanielJXavier_my-portfolio&branch=main",
        ),
      );
      expect(
        badges.every((badge) => badge.getAttribute("loading") === "lazy"),
      ).toBe(true);
      expect(badges.map((badge) => badge.getAttribute("src"))).toEqual(
        expect.arrayContaining([
          expect.stringContaining("metric=alert_status"),
          expect.stringContaining("metric=coverage"),
          expect.stringContaining("metric=security_rating"),
          expect.stringContaining("metric=reliability_rating"),
          expect.stringContaining("metric=sqale_rating"),
        ]),
      );
    },
  );
});
