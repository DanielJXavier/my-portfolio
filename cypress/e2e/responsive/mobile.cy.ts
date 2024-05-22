import { resolutions, pages } from "./_config";

describe("Mobile", () => {
  resolutions.mobile.forEach((resolution, i) => {
    context(`Resolution #${i + 1} (${resolution[0]}x${resolution[1]})`, () => {
      pages.forEach(({ name, path }) => {
        it(`${name} page`, () => {
          cy.viewport(resolution[0], resolution[1]);

          cy.visit(`/${path}`);

          cy.compareSnapshot(`mobile-${i + 1}-${name.toLowerCase()}-page`);
        });
      });
    });
  });
});
