import { defineConfig } from "cypress";

import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push("--force-device-scale-factor=1");
        }

        return launchOptions;
      });
    },
  },
});
