import Image from "next/image";
import { ReactNode } from "react";

type ExperienceItemProps = {
  logoPath: string;
  year: string;
  role: string;
  company: string;
  description: string;
  children: ReactNode;
};

export default function ExperienceItem({
  logoPath,
  year,
  role,
  company,
  description,
  children,
}: ExperienceItemProps) {
  return (
    <article className="my-6 sm:my-10 relative before:content-[''] before:absolute before:top-10 before:left-4 before:ml-0.5 before:w-1.5 before:h-5/6 before:bg-[#6d0ad5]">
      <header>
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold flex items-center gap-x-2">
          <Image
            src={logoPath}
            width={40}
            height={40}
            alt={`Logo of ${company} company`}
          />
          ({year}) {role} @ {company}
        </h2>
      </header>
      <section className="pl-14 lg:px-14">
        <h3 className="xl:text-xl">{description}</h3>
      </section>
      {children}
    </article>
  );
}
