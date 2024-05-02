import { ReactNode, useContext } from "react";

import Image from "next/image";

import { ExperienceContext } from "../Experience";

type ExperienceItemProps = {
  from: string;
  via: string;
  logoPath: string;
  year: string;
  role: string;
  company: string;
  description: string;
  children: ReactNode;
};

export default function ExperienceItem({
  from,
  via,
  logoPath,
  year,
  role,
  company,
  description,
  children,
}: ExperienceItemProps) {
  const experience = useContext(ExperienceContext);

  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-[40px] before:bottom-[-21px] before:sm:bottom-[-36px] last-of-type:before:bottom-0 before:left-[16px] before:ml-0.5 before:w-1 before:bg-gradient-to-b ${from} ${via} before:to-[#000] before:-z-10`}
    >
      <header className="flex items-start gap-x-2">
        <Image
          className="rounded-full"
          src={logoPath}
          width={40}
          height={40}
          alt={`Logo of ${company} company`}
        />
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight">
          {role} @ {company}
          <span className="text-xs md:text-sm"> ({year})</span>
        </h2>
      </header>
      <section className="pl-14 lg:px-14">
        <h3 className="xl:text-xl">{description}</h3>
      </section>
      {experience === "detailed" && children}
    </article>
  );
}
