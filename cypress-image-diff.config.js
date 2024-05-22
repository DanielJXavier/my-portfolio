const config = {
  ROOT_DIR: "cypress/visual-testing",
  FAILURE_THRESHOLD: 0.075,
  FAIL_ON_MISSING_BASELINE: true,
  JSON_REPORT: {
    FILENAME: "report",
    OVERWRITE: true,
  },
  REPORT_DIR: "",
  SCREENSHOTS_DIR: "",
};

module.exports = config;
