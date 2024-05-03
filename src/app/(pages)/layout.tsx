import { ReactNode } from "react";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return <main className="main-container">{children}</main>;
}
