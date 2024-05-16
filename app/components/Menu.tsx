import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { menu } from "@/data";

export default function Menu() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "visible";
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(!menuOpen);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className="order-last lg:order-none" data-testid="menu">
      <button
        className={`w-8 h-[26px] p-1.5 flex items-center justify-center gap-y-1 flex-col [&_hr]:hover:border-t-secondary ${
          menuOpen ? "relative [&_hr]:border-t-secondary" : ""
        } lg:hidden`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        aria-label="Menu"
        data-testid="menu-button"
      >
        <hr
          className={`w-5 border-t-2 border-t-primary ${
            menuOpen ? "absolute right-1.5 rotate-45" : ""
          }`}
        />
        <hr
          className={`w-5 border-t-2 border-t-primary ${
            menuOpen ? "hidden" : ""
          }`}
        />
        <hr
          className={`w-5 border-t-2 border-t-primary ${
            menuOpen ? "absolute right-1.5 rotate-[-45deg]" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute md:relative top-[38px] md:top-0 right-0 left-0 h-[calc(100vh-46px)] md:h-auto px-4 md:px-0 py-2 bg-background md:bg-transparent z-50 text-lg lg:text-xl font-light ${
          !menuOpen ? "hidden lg:flex" : ""
        } flex flex-col md:flex-row gap-y-2 md:gap-x-3`}
        data-testid="menu-list"
      >
        {menu.map(({ href, title }, i) => (
          <li key={i}>
            <Link
              className={`${
                pathname === href
                  ? "text-secondary cursor-default underline"
                  : ""
              } decoration-0 underline-offset-2 hover:text-secondary hover:underline`}
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
