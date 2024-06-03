import { resolutions, pages } from "./_config";

describe("Desktop", () => {
  resolutions.desktop.forEach((resolution, i) => {
    context(`Resolution #${i + 1} (${resolution[0]}x${resolution[1]})`, () => {
      pages.forEach(({ name, path }) => {
        it(`${name} page`, () => {
          cy.viewport(resolution[0], resolution[1]);

          cy.visitDarkTheme(path, false);

          cy.matchImageSnapshot(`desktop-${i + 1}-${name.toLowerCase()}-page`);
        });
      });
    });
  });
});
