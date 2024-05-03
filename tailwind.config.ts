import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      dropShadow: {
        shaped: [
          "2px 0 0 #bbb",
          "0 2px 0 #bbb",
          "-2px 0 0 #bbb",
          "0 -2px 0 #bbb",
        ],
      },
    },
  },
};

export default config;
