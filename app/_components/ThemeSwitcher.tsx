import { useEffect, useState } from "react";

import DarkMode from "@/app/_icons/DarkMode";
import LightMode from "@/app/_icons/LightMode";
import { useSiteContent } from "@/app/_hooks/useSiteContent";

const ThemeSwitcher = () => {
  const { themeSwitcher } = useSiteContent();
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
      className="group/svg p-1 rounded-full bg-[#e6eaee] dark:bg-[#444547]"
      onClick={() => setDark(!dark)}
      aria-label={
        dark ? themeSwitcher.toggleToLight : themeSwitcher.toggleToDark
      }
      data-testid="theme-switcher"
    >
      {dark ? (
        <LightMode title={themeSwitcher.lightMode} />
      ) : (
        <DarkMode title={themeSwitcher.darkMode} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
