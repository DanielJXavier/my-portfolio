describe("Resume", () => {
  it("should open the page", () => {
    cy.visitDarkTheme("/en/resume", false);

    cy.matchImageSnapshot("resume-page");
  });
});
