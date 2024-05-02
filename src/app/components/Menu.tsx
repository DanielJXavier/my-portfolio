"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      setMenu(!menu);
    }

    console.log(pathname);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    document.body.style.overflow = menu ? "visible" : "hidden";

    setMenu(!menu);
  };

  return (
    <nav>
      <button
        className={`p-1.5 flex items-center justify-center gap-y-1 flex-col [&_hr]:hover:border-t-[#fff] ${
          menu ? "relative [&_hr]:border-t-[#fff]" : ""
        } md:hidden`}
        onClick={handleClick}
      >
        <hr
          className={`w-5 border-t-2 border-t-[#888] ${
            menu ? "absolute rotate-45" : ""
          }`}
        />
        <hr
          className={`w-5 border-t-2 border-t-[#888] ${menu ? "hidden" : ""}`}
        />
        <hr
          className={`w-5 border-t-2 border-t-[#888] ${
            menu ? "absolute rotate-[-45deg]" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute md:relative top-[38px] md:top-0 right-0 left-0 h-[calc(100vh-46px)] md:h-auto px-4 py-2 bg-[#000] z-50 text-xl lg:text-2xl font-light ${
          !menu ? "hidden md:flex" : ""
        } flex flex-col md:flex-row gap-y-2 md:gap-x-4`}
      >
        <li>
          <Link
            className={`${
              pathname === "/experience"
                ? "text-[#fff] cursor-default underline"
                : ""
            } decoration-0 underline-offset-2 hover:text-[#fff] hover:underline`}
            href="/experience"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/recommendations"
                ? "text-[#fff] cursor-default underline"
                : ""
            } decoration-0 underline-offset-2 hover:text-[#fff] hover:underline`}
            href="/recommendations"
          >
            Recommendations
          </Link>
        </li>
      </ul>
    </nav>
  );
}
