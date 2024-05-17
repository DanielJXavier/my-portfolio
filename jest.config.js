const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["app/**/*.{ts,tsx}", "!app/**/data.ts", "!app/icons/*"],
  coverageThreshold: {
    global: {
      statements: 51.96,
      branches: 82.25,
      functions: 50.0,
      lines: 51.96,
    },
  },
};

module.exports = createJestConfig(config);
