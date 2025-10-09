import { useRef } from "react";
import { useParams } from "next/navigation";

import { ExperienceItemsType, getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { experience } from "@/[lang]/(pages)/experience/_config";
import { hardSkills } from "@/[lang]/(pages)/skills/_config";

import VisibilityControl from "./VisibiltyControl";

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: {
      dateSeparatorText,
      endDateText,
      mainStackTitle,
      items,
      previousItemsText,
    },
    resume: { sectionTitles },
  } = getDictionary(lang);

  const visibleExperience = experience.filter(({ hidden }) => !hidden);

  const visibleExperienceResume = visibleExperience.filter(
    ({ resume }) => resume
  );

  const experienceItems = useRef<ExperienceItemsType>(items);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.experience}</h2>
      <hr />
      <ul className="flex flex-col gap-y-3">
        {visibleExperience.map(
          ({
            key,
            companyName,
            startDate,
            endDate,
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
                  <span>
                    {" "}
                    ({startDate} {dateSeparatorText} {endDate ?? endDateText})
                  </span>
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
        <VisibilityControl
          defaultVisible={
            visibleExperience.length > visibleExperienceResume.length
          }
        >
          {previousItemsText.prefix} {previousItemsText.sufix}
        </VisibilityControl>
      </ul>
    </section>
  );
}
