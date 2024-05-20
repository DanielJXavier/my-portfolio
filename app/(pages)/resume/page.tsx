import { Metadata } from "next";

import Resume from "./Resume";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Page() {
  return <Resume />;
}
