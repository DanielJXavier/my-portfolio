describe("Theme", () => {
  it("should open the page with dark theme", () => {
    cy.visitDarkTheme("/");

    cy.get("*").should("have.css", "color", "rgb(187, 187, 187)");

    cy.get("html").should(
      "have.css",
      "scrollbar-color",
      "rgb(187, 187, 187) rgb(34, 34, 34)"
    );

    cy.get("body").should("have.css", "background-color", "rgb(0, 0, 0)");
  });

  it("should open the page with light theme", () => {
    cy.visitDarkTheme("/", false);

    cy.get("*").should("have.css", "color", "rgb(68, 68, 68)");

    cy.get("html").should(
      "have.css",
      "scrollbar-color",
      "rgb(68, 68, 68) rgb(221, 221, 221)"
    );

    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
  });
});
