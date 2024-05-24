import { ReactNode } from "react";

import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
