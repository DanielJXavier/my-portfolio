import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import MenuItem from "./MenuItem";

export default function Menu() {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "visible";
  }, [menu]);

  useEffect(() => {
    if (menu) {
      setMenu(!menu);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav>
      <button
        className={`p-1.5 flex items-center justify-center gap-y-1 flex-col [&_hr]:hover:border-t-[#fff] ${
          menu ? "relative [&_hr]:border-t-[#fff]" : ""
        } md:hidden`}
        onClick={() => {
          setMenu(!menu);
        }}
        aria-label="Menu"
      >
        <hr
          className={`w-5 border-t-2 border-t-[#bbb] ${
            menu ? "absolute rotate-45" : ""
          }`}
        />
        <hr
          className={`w-5 border-t-2 border-t-[#bbb] ${menu ? "hidden" : ""}`}
        />
        <hr
          className={`w-5 border-t-2 border-t-[#bbb] ${
            menu ? "absolute rotate-[-45deg]" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute md:relative top-[38px] md:top-0 right-0 left-0 h-[calc(100vh-46px)] md:h-auto px-4 md:px-0 py-2 bg-[#000] md:bg-transparent z-50 text-lg lg:text-xl font-light ${
          !menu ? "hidden md:flex" : ""
        } flex flex-col md:flex-row gap-y-2 md:gap-x-3`}
      >
        <MenuItem href="/experience">Experience</MenuItem>
        <MenuItem href="/education">Education</MenuItem>
        <MenuItem href="/skills">Skills</MenuItem>
        <MenuItem href="/recommendations">Recommendations</MenuItem>
      </ul>
    </nav>
  );
}
