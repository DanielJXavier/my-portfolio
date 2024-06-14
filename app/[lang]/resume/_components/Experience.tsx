import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { experience } from "@/[lang]/(pages)/experience/_config";

import VisibilityControl from "./VisibiltyControl";

export default function Experience() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    experience: { items: experienceStrings, previousItemsText },
    resume: { sectionTitles, biggestChallengeTitle },
  } = getDictionary(lang);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.experience}</h2>
      <ul className="flex flex-col gap-y-3">
        {experience.map(
          ({ key, companyName, year, resumeResponsibilities, resume }) => (
            <VisibilityControl
              key={key}
              className="items-baseline break-inside-avoid"
              defaultVisible={resume}
            >
              <div>
                <p className="text-[12pt] font-bold">
                  {experienceStrings[key].role} @ {companyName}
                </p>
                <p className="text-[12pt]">{year}</p>
                <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-[10px]">
                  {experienceStrings[key].responsibilities.map(
                    (responsibility, i) => (
                      <VisibilityControl
                        key={`responsibility-${i}`}
                        className="items-baseline"
                        defaultVisible={resumeResponsibilities?.some(
                          (resumeResponsibility) =>
                            resumeResponsibility === i + 1
                        )}
                      >
                        {responsibility}
                      </VisibilityControl>
                    )
                  )}
                  <VisibilityControl
                    className="items-baseline"
                    defaultVisible={resume}
                  >
                    {biggestChallengeTitle}:{" "}
                    {experienceStrings[key].biggestChallenge}
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
