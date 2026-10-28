import "./commands";

import { addMatchImageSnapshotCommand } from "@simonsmith/cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  capture: "fullPage",
  comparisonMethod: "ssim",
  customSnapshotsDir: "cypress/screenshots",
  failureThreshold: Cypress.expose("failureThreshold") || 0.025,
  failureThresholdType: "percent",
});
