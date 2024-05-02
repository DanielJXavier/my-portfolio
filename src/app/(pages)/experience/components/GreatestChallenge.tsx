import { ReactNode } from "react";

type GreatestChallengeProps = {
  children: ReactNode;
};

export default function GreatestChallenge({
  children,
}: GreatestChallengeProps) {
  return (
    <section className="mt-4 pl-14 xl:px-14">
      <h3 className="font-semibold xl:text-xl">
        And my greatest challenge was:
      </h3>
      <p className="text-sm xl:text-base">{children}</p>
    </section>
  );
}
