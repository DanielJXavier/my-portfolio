"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Menu from "./Menu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="py-2 md:py-3 lg:py-4 shadow-sm shadow-primary"
      data-testid="header"
    >
      <div className="relative container mx-auto px-4 md:px-5 xl:px-6 grid grid-cols-[auto_1fr_auto] items-center justify-between justify-items-end gap-x-2 md:gap-x-3 lg:gap-x-8">
        <Link
          className={`text-xl lg:text-3xl font-light hover:text-secondary ${
            pathname === "/" ? "text-secondary cursor-default" : ""
          }`}
          href="/"
          data-testid="header-link"
        >
          {"<DanielXavier />"}
        </Link>
        <Menu />
        <ThemeSwitcher />
      </div>
    </header>
  );
}