import { useContext } from "react";

import Image from "next/image";

import { useSkillsContent } from "@/app/_hooks/useSkillsContent";

import type { ExperienceInterface } from "@/app/_content/experience/shared";
import { ExperienceModeContext } from "../Experience";

type ExperienceConfigType = Omit<
  ExperienceInterface,
  "key" | "resume" | "resumeAccomplishments"
>;

type ExperienceItemPropsType = Readonly<
  Omit<ExperienceConfigType, "hidden"> & {
    role: string;
    accomplishments: string[];
    imageAltText: {
      prefix: string;
      sufix: string;
    };
    dateSeparatorText: string;
    endDateText: string;
    mainStackTitle: string;
  }
>;

type MapCompanyIdToColorType = {
  [key: string]: string;
};

const mapCompanyIdToColor: MapCompanyIdToColorType = {
  lovevery: "before:from-secondary before:via-secondary",
  constructor: "before:from-[#0e62bb] before:via-[#0e62bb]",
  yestechnology: "before:from-secondary before:via-secondary",
  pdsacademy: "before:from-secondary before:via-secondary",
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
  startDate,
  endDate,
  accomplishments,
  mainStack,
  imageAltText,
  hasBlackLogo,
  dateSeparatorText,
  endDateText,
  mainStackTitle,
}: ExperienceItemPropsType) {
  const { hardSkills } = useSkillsContent();
  const experienceMode = useContext(ExperienceModeContext);

  const relatedHardSkills = hardSkills.filter(({ key }) => mainStack.includes(key));

  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-10 before:-bottom-5.25 before:sm:-bottom-9 last-of-type:before:bottom-0 before:left-4 before:ml-0.5 before:w-1 before:bg-linear-to-b ${mapCompanyIdToColor[companyId]} before:to-background before:-z-10`}
      data-testid="experience-item"
    >
      <header className="flex items-start gap-x-2">
        <span className="relative block size-10 shrink-0">
          <Image
            className={`size-10 rounded-full ${
              hasBlackLogo ? "border-2 border-solid border-secondary" : ""
            }`}
            src={`/images/experience/${companyId}.jpg`}
            fill
            sizes="40px"
            alt={`${imageAltText.prefix}${companyName}${imageAltText.sufix}`}
          />
        </span>

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight">
          {role} @ {companyName}
          <span className="text-xs md:text-sm">
            {" "}
            ({startDate} {dateSeparatorText} {endDate ?? endDateText})
          </span>
        </h2>
      </header>

      {experienceMode === "detailed" && (
        <>
          <section className="pl-14 xl:px-14">
            <ul className="pl-7 list-disc text-sm xl:text-base">
              {accomplishments.map((accomplishment) => (
                <li key={accomplishment}>{accomplishment}</li>
              ))}
            </ul>
          </section>

          {relatedHardSkills.length > 0 && (
            <section className="mt-4 pl-14 xl:px-14">
              <h3 className="font-semibold xl:text-xl">{mainStackTitle}:</h3>

              <p className="text-sm xl:text-base">
                {relatedHardSkills.map(({ name }) => name).join(" | ")}
              </p>
            </section>
          )}
        </>
      )}
    </article>
  );
}
