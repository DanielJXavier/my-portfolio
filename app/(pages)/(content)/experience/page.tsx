import { Metadata } from "next";

import Experience from "./Experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Page() {
  return <Experience />;
}
