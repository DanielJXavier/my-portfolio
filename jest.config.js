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
      statements: 48.81,
      branches: 80.7,
      functions: 43.47,
      lines: 48.81,
    },
  },
};

module.exports = createJestConfig(config);
