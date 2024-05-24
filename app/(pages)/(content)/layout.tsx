import { ReactNode } from "react";

import Header from "@/components/Header";

import { author } from "@/data";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

const year = new Date().getFullYear();

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <footer className="absolute right-0 bottom-0 left-0 h-24 md:h-20 lg:h-16 flex items-center justify-center">
        <p className="text-xs md:text-sm text-center">
          Copyright © {year} {author.firstName} {author.lastName}.{" "}
          <br className="sm:hidden" />
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
