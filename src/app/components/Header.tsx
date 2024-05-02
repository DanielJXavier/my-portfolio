"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Menu from "./Menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-2 md:py-3 lg:py-4 shadow-sm shadow-[#bbb]">
      <div className="relative container mx-auto px-4 md:px-5 xl:px-6 grid grid-cols-[1fr_auto] items-center">
        <Link
          className={`text-xl md:text-2xl lg:text-3xl font-light hover:text-[#fff] ${
            pathname === "/" ? "text-[#fff] cursor-default" : ""
          }`}
          href="/"
        >
          &lt;DanielXavier /&gt;
        </Link>
        <Menu />
      </div>
    </header>
  );
}
