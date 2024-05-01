import { ReactNode } from "react";

type ResposibilitiesProps = {
  children: ReactNode;
};

export default function Resposibilities({ children }: ResposibilitiesProps) {
  return (
    <section className="mt-4 pl-14 xl:px-14">
      <h3 className="font-semibold xl:text-xl">
        My main responsibilities were:
      </h3>
      <ul className="pl-7 list-disc text-sm xl:text-base">{children}</ul>
    </section>
  );
}
