import { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = Readonly<{
  href: string;
  children: ReactNode;
}>;

export default function MenuItem({ href, children }: MenuItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={`${
          pathname === href ? "text-[#fff] cursor-default underline" : ""
        } decoration-0 underline-offset-2 hover:text-[#fff] hover:underline`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
