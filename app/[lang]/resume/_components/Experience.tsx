import { useRef } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { experience } from "@/[lang]/(pages)/experience/_config";

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: { items: experienceStrings, previousItemsText },
    resume: { sectionTitles, biggestChallengeTitle },
  } = getDictionary(lang);

  const resumeExperience = useRef(experience.filter(({ resume }) => resume));

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.experience}</h2>
      <ul className="flex flex-col gap-y-3">
        {resumeExperience.current.map(
          ({ key, companyName, year, resumeResponsibilities }) => (
            <li key={key}>
              <p className="text-[12pt] font-bold">
                {experienceStrings[key].role} @ {companyName}
              </p>
              <p className="text-[12pt]">{year}</p>
              <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-[10px]">
                {experienceStrings[key].responsibilities
                  .filter((_, i) =>
                    resumeResponsibilities?.some(
                      (resumeResponsibility) => resumeResponsibility === i + 1
                    )
                  )
                  .map((responsibility, i) => (
                    <li key={`responsibility-${i}`}>{responsibility}</li>
                  ))}
                <li>
                  {biggestChallengeTitle}:{" "}
                  {experienceStrings[key].biggestChallenge}
                </li>
              </ul>
            </li>
          )
        )}
        {experience.length > resumeExperience.current.length && (
          <li>
            {previousItemsText.prefix}{" "}
            {experience.length - resumeExperience.current.length}{" "}
            {previousItemsText.sufix}
          </li>
        )}
      </ul>
    </section>
  );
}
