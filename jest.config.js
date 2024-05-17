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
      statements: 21.29,
      branches: 67.92,
      functions: 26.08,
      lines: 21.29,
    },
  },
};

module.exports = createJestConfig(config);
