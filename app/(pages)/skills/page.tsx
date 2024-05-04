import { Metadata } from "next";

import Skills from "./Skills";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Page() {
  return <Skills />;
}
