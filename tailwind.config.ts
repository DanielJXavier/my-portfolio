import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
      },
      dropShadow: {
        shaped: [
          "2px 0 0 var(--primary)",
          "0 2px 0 var(--primary)",
          "-2px 0 0 var(--primary)",
          "0 -2px 0 var(--primary)",
        ],
      },
    },
  },
};

export default config;
