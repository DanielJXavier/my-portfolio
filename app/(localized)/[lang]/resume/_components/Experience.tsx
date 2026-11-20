import { useParams } from "next/navigation";

import { getDictionary } from "@/get-dictionary";
import { Lang } from "@/i18n-config";

import { getExperienceContent } from "@/app/_content/experience";
import { hardSkills } from "@/app/(localized)/[lang]/(pages)/skills/_config";

import VisibilityControl from "./VisibiltyControl";

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    dateSeparatorText,
    endDateText,
    mainStackTitle,
    previousItemsText,
    items,
  } = getExperienceContent(lang);
  const {
    resume: { sectionTitles },
  } = getDictionary(lang);

  const visibleExperience = items.filter(({ hidden }) => !hidden);

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
            role,
            accomplishments,
          }) => (
            <VisibilityControl
              key={key}
              className="items-baseline break-inside-avoid"
              defaultVisible={resume}
            >
              <div>
                <p className="text-[12pt]">
                  <span className="font-bold">
                    {role} @ {companyName}
                  </span>
                  <span>
                    {" "}
                    ({startDate} {dateSeparatorText} {endDate ?? endDateText})
                  </span>
                </p>
                <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-2.5">
                  {accomplishments.map((accomplishment, i) => (
                    <VisibilityControl
                      key={`accomplishment-${i}`}
                      className="items-baseline"
                      defaultVisible={resumeAccomplishments?.some(
                        (resumeAccomplishment) =>
                          resumeAccomplishment === i + 1,
                      )}
                    >
                      {accomplishment}
                    </VisibilityControl>
                  ))}
                  <VisibilityControl
                    className="mt-1 items-baseline"
                    defaultVisible={resumeAccomplishments.length > 0}
                  >
                    <p>
                      <span className="font-bold">{mainStackTitle}</span>:
                      <span>
                        {" "}
                        {hardSkills
                          .filter(({ key }) =>
                            mainStack.some((stack) => stack === key),
                          )
                          .map(({ name }) => name)
                          .join(" | ")}
                      </span>
                    </p>
                  </VisibilityControl>
                </ul>
              </div>
            </VisibilityControl>
          ),
        )}
        <VisibilityControl defaultVisible={false}>
          {previousItemsText.prefix} {previousItemsText.sufix}
        </VisibilityControl>
      </ul>
    </section>
  );
}
