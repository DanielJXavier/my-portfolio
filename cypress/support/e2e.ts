import "./commands";

import { addMatchImageSnapshotCommand } from "@simonsmith/cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  comparisonMethod: "ssim",
  customSnapshotsDir: "cypress/visual-testing",
});
