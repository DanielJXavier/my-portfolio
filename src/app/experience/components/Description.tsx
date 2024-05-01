import { ReactNode } from "react";

type DescriptionProps = {
  children: ReactNode;
};

export default function Description({ children }: DescriptionProps) {
  return (
    <section className="pl-14 lg:px-14">
      <h3 className="xl:text-xl">{children}</h3>
    </section>
  );
}
