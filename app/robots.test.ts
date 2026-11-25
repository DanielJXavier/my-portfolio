import robots from "./robots";

describe("robots route", () => {
  it("allows public pages and keeps the resume out of crawlers", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/resume/",
      },
      sitemap: "https://www.danielxavier.dev/sitemap.xml",
    });
  });
});
