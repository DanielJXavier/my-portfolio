/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      visitDarkTheme(url: string, isDarkTheme?: boolean): Chainable<void>;
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
