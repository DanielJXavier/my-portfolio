import React, { useState, useEffect } from "react";

import DarkMode from "@/_icons/DarkMode";
import LightMode from "@/_icons/LightMode";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState<boolean>(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");

      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      className="p-1 rounded-full bg-[#e6eaee] dark:bg-[#444547] [&_svg]:lg:w-6 [&_svg]:lg:h-6 [&_svg]:hover:fill-secondary"
      onClick={() => setDark(!dark)}
      aria-label={`Toggle to ${dark ? "light" : "dark"} theme`}
      data-testid="theme-switcher"
    >
      {dark ? <LightMode /> : <DarkMode />}
    </button>
  );
};

export default ThemeSwitcher;
