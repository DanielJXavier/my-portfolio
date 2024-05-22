import { defineConfig } from "cypress";

import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--window-size=1920,1080");
          launchOptions.args.push("--force-device-scale-factor=1");
        }

        return launchOptions;
      });
    },
  },
});
