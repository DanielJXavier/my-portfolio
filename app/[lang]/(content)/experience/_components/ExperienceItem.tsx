import { useContext } from "react";

import Image from "next/image";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import { ExperienceModeContext } from "../Experience";

type ExperienceItemPropsType = Readonly<{
  role: string;
  companyId: string;
  companyName: string;
  year: string;
  description: string;
  responsibilities: string[];
  biggestChallenge: string;
  hasBlackLogo?: boolean;
  resume?: boolean;
}>;

type MapCompanyIdToColorType = {
  [key: string]: string;
};

const mapCompanyIdToColor: MapCompanyIdToColorType = {
  olx: "before:from-[#6d0ad5] before:via-[#6d0ad5]",
  meaning: "before:from-[#8568ec] before:via-[#8568ec]",
  softplan: "before:from-[#5d5ef1] before:via-[#5d5ef1]",
  hotmart: "before:from-[#ee4e21] before:via-[#ee4e21]",
  sydle: "before:from-secondary before:via-secondary",
};

export default function ExperienceItem({
  role,
  companyId,
  companyName,
  year,
  description,
  responsibilities,
  biggestChallenge,
  hasBlackLogo,
}: ExperienceItemPropsType) {
  const { lang } = useParams<{ lang: Locale }>();

  const {
    experience: { responsibilitiesTitle, biggestChallengeTitle },
  } = getDictionary(lang);

  const experienceMode = useContext(ExperienceModeContext);

  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-[40px] before:bottom-[-21px] before:sm:bottom-[-36px] last-of-type:before:bottom-0 before:left-[16px] before:ml-0.5 before:w-1 before:bg-gradient-to-b ${mapCompanyIdToColor[companyId]} before:to-background before:-z-10`}
      data-testid="experience-item"
    >
      <header className="flex items-start gap-x-2">
        <Image
          className={`rounded-full ${
            hasBlackLogo ? "border-2 border-solid border-secondary" : ""
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
      {experienceMode === "detailed" && (
        <>
          <section className="mt-4 pl-14 xl:px-14">
            <h3 className="font-semibold xl:text-xl">
              {responsibilitiesTitle}:
            </h3>
            <ul className="pl-7 list-disc text-sm xl:text-base">
              {responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </section>
          <section className="mt-4 pl-14 xl:px-14">
            <h3 className="font-semibold xl:text-xl">
              {biggestChallengeTitle}:
            </h3>
            <p className="text-sm xl:text-base">{biggestChallenge}</p>
          </section>
        </>
      )}
    </article>
  );
}
