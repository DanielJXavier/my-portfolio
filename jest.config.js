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
      statements: 22.75,
      branches: 70.37,
      functions: 30.43,
      lines: 22.75,
    },
  },
};

module.exports = createJestConfig(config);
