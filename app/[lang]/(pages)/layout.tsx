import { ReactNode } from "react";

import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="main-container">{children}</main>

      <Footer />
    </>
  );
}
