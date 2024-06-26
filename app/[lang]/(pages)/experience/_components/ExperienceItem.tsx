import { useContext } from "react";

import Image from "next/image";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { hardSkills } from "../../skills/_config";

import { ExperienceInterface } from "../_config";
import { ExperienceModeContext } from "../Experience";

type ExperienceConfigType = Omit<
  ExperienceInterface,
  "key" | "resume" | "resumeAccomplishments"
>;
interface ExperienceItemPropsInterface extends ExperienceConfigType {
  role: string;
  description: string;
  accomplishments: string[];
  biggestChallenge: string;
  imageAltText: {
    prefix: string;
    sufix: string;
  };
}

type MapCompanyIdToColorType = {
  [key: string]: string;
};

const mapCompanyIdToColor: MapCompanyIdToColorType = {
  danielxavier: "before:from-secondary before:via-secondary",
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
  accomplishments,
  biggestChallenge,
  mainStack,
  imageAltText,
  hasBlackLogo,
}: ExperienceItemPropsInterface) {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: { accomplishmentsTitle, biggestChallengeTitle, mainStackTitle },
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
          src={`/images/experience/${companyId}.jpg`}
          width={40}
          height={40}
          alt={`${imageAltText.prefix}${companyName}${imageAltText.sufix}`}
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
              {accomplishmentsTitle}:
            </h3>
            <ul className="pl-7 list-disc text-sm xl:text-base">
              {accomplishments.map((accomplishment, i) => (
                <li key={`accomplishment-${i}`}>{accomplishment}</li>
              ))}
            </ul>
          </section>
          <section className="mt-4 pl-14 xl:px-14">
            <h3 className="font-semibold xl:text-xl">
              {biggestChallengeTitle}:
            </h3>
            <p className="text-sm xl:text-base">{biggestChallenge}</p>
          </section>
          <section className="mt-4 pl-14 xl:px-14">
            <h3 className="font-semibold xl:text-xl">{mainStackTitle}:</h3>
            <p className="text-sm xl:text-base">
              {hardSkills
                .filter(({ key }) => mainStack.some((stack) => stack === key))
                .map(({ name }) => name)
                .join(" | ")}
            </p>
          </section>
        </>
      )}
    </article>
  );
}
