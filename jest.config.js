const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/data.ts",
    "!app/icons/*",
    "!app/sitemap.ts",
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 98.8,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = createJestConfig(config);
