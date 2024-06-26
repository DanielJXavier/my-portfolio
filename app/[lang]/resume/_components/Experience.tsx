import { useParams } from "next/navigation";

import { ExperienceItemsType, getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { experience } from "@/[lang]/(pages)/experience/_config";
import { hardSkills } from "@/[lang]/(pages)/skills/_config";

import VisibilityControl from "./VisibiltyControl";
import { useRef } from "react";

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: {
      items,
      previousItemsText,
      biggestChallengeTitle,
      mainStackTitle,
    },
    resume: { sectionTitles },
  } = getDictionary(lang);

  const experienceItems = useRef<ExperienceItemsType>(items);

  return (
    <section>
      <h2 className="mb-2 text-[16pt] font-bold">{sectionTitles.experience}</h2>
      <ul className="flex flex-col gap-y-3">
        {experience.map(
          ({
            key,
            companyName,
            year,
            mainStack,
            resumeAccomplishments,
            resume,
          }) => (
            <VisibilityControl
              key={key}
              className="items-baseline break-inside-avoid"
              defaultVisible={resume}
            >
              <div>
                <p className="text-[12pt]">
                  <span className="font-bold">
                    {experienceItems.current[key].role} @ {companyName}
                  </span>
                  <span> ({year})</span>
                </p>
                <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-[10px]">
                  {experienceItems.current[key].accomplishments.map(
                    (accomplishment, i) => (
                      <VisibilityControl
                        key={`accomplishment-${i}`}
                        className="items-baseline"
                        defaultVisible={resumeAccomplishments?.some(
                          (resumeAccomplishment) =>
                            resumeAccomplishment === i + 1
                        )}
                      >
                        {accomplishment}
                      </VisibilityControl>
                    )
                  )}
                  <VisibilityControl
                    className="mt-1 items-baseline"
                    defaultVisible={resume}
                  >
                    {biggestChallengeTitle}:{" "}
                    {experienceItems.current[key].biggestChallenge}
                  </VisibilityControl>
                  <VisibilityControl
                    className="mt-1 items-baseline"
                    defaultVisible={resume}
                  >
                    {mainStackTitle}:{" "}
                    {hardSkills
                      .filter(({ key }) =>
                        mainStack.some((stack) => stack === key)
                      )
                      .map(({ name }) => name)
                      .join(" | ")}
                  </VisibilityControl>
                </ul>
              </div>
            </VisibilityControl>
          )
        )}
        <li>
          {previousItemsText.prefix} {previousItemsText.sufix}
        </li>
      </ul>
    </section>
  );
}
