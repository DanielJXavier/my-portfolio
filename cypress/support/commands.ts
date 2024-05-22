/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      compareSnapshot(options: string): Chainable<Element>;
      visitDarkTheme(url: string, isDarkTheme?: boolean): void;
    }
  }
}

Cypress.Commands.add("visitDarkTheme", (url, isDarkTheme = true) => {
  cy.visit(url, {
    onBeforeLoad(win) {
      cy.stub(win, "matchMedia")
        .withArgs("(prefers-color-scheme: dark)")
        .returns({
          matches: isDarkTheme,
        });
    },
  });
});
