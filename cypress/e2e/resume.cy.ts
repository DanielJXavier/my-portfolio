describe("Resume", () => {
  it("should open the page", () => {
    cy.visitDarkTheme("/resume", false);

    cy.matchImageSnapshot("resume-page");
  });
});
