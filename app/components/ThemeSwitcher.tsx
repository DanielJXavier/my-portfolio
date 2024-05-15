import React, { useState, useEffect } from "react";

import DarkMode from "@/icons/DarkMode";
import LightMode from "@/icons/LightMode";

type DarkType = null | boolean;

const ThemeSwitcher = () => {
  const [dark, setDark] = useState<DarkType>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className={`p-1 rounded-full bg-[#e6eaee] dark:bg-[#444547] [&_svg]:hover:fill-secondary ${
        dark === null ? "invisible" : ""
      }`}
      onClick={() => setDark(!dark)}
    >
      {dark ? <LightMode /> : <DarkMode />}
    </button>
  );
};

export default ThemeSwitcher;
