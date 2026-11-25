/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      visitDarkTheme(url: string, isDarkTheme?: boolean): Chainable<void>;
      waitForProjectBadges(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("visitDarkTheme", (url, isDarkTheme = true) =>
  cy.visit(url, {
    onBeforeLoad(win) {
      cy.stub(win, "matchMedia")
        .withArgs("(prefers-color-scheme: dark)")
        .returns({
          matches: isDarkTheme,
        });
    },
  })
    .then(() => cy.get('[data-testid="title"]', { timeout: 15000 }))
    .should("be.visible")
    .then(() => cy.document())
    .its("fonts.status")
    .should("eq", "loaded")
    .then(() => undefined)
);

Cypress.Commands.add("waitForProjectBadges", () => {
  cy
    .get('section[aria-labelledby="about-project-heading"]', { timeout: 30000 })
    .scrollIntoView()
    .find("img")
    .should(($images) => {
      expect($images).to.have.length(12);

      $images.each((_, element) => {
        const image = element as HTMLImageElement;

        expect(
          image.complete && image.naturalWidth > 0,
          `${image.alt} loaded successfully`,
        ).to.be.true;
      });
    })
    .then(() => cy.scrollTo("top"));
});
