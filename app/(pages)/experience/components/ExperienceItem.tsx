import { ReactNode, useContext } from "react";

import Image from "next/image";

import { ExperienceContext } from "../Experience";

type ExperienceItemProps = Readonly<{
  role: string;
  companyId: "olx" | "meaning" | "softplan" | "hotmart" | "sydle";
  companyName: string;
  year: string;
  description: string;
  children: ReactNode;
  hasBlackLogo?: boolean;
}>;

const mapCompanyIdToColor = {
  olx: "before:from-[#6d0ad5] before:via-[#6d0ad5]",
  meaning: "before:from-[#8568ec] before:via-[#8568ec]",
  softplan: "before:from-[#5d5ef1] before:via-[#5d5ef1]",
  hotmart: "before:from-[#ee4e21] before:via-[#ee4e21]",
  sydle: "before:from-[#fff] before:via-[#fff]",
};

export default function ExperienceItem({
  role,
  companyId,
  companyName,
  year,
  description,
  children,
  hasBlackLogo,
}: ExperienceItemProps) {
  const experience = useContext(ExperienceContext);

  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-[40px] before:bottom-[-21px] before:sm:bottom-[-36px] last-of-type:before:bottom-0 before:left-[16px] before:ml-0.5 before:w-1 before:bg-gradient-to-b ${mapCompanyIdToColor[companyId]} before:to-[#000] before:-z-10`}
    >
      <header className="flex items-start gap-x-2">
        <Image
          className={`rounded-full ${
            hasBlackLogo ? "border-2 border-solid border-white" : ""
          }`}
          src={`/experience/${companyId}.jpg`}
          width={40}
          height={40}
          alt={`Logo of ${companyName} company`}
        />
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight">
          {role} @ {companyName}
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
