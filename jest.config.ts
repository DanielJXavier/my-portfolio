import type { Config } from "jest";

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
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
      statements: 99.03,
      branches: 98.8,
      functions: 100,
      lines: 99.03,
    },
  },
};

export default createJestConfig(config);
