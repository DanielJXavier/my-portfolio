import "./commands";

import { addMatchImageSnapshotCommand } from "@simonsmith/cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  comparisonMethod: "ssim",
  customSnapshotsDir: "cypress/visual-testing",
  failureThreshold: Cypress.env("failureThreshold") || 0.025,
  failureThresholdType: "percent",
});
