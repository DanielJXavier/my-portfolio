"use client";

import { useEffect, useRef } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

import { links } from "@/(pages)/(home)/_config";
import { experience } from "@/(pages)/(content)/experience/_config";
import { education } from "@/(pages)/(content)/education/_config";

import {
  hardSkills as allHardSkills,
  softSkills as softSkillsKeys,
} from "@/(pages)/(content)/skills/_config";

import {
  maxSummaryParagraphs,
  chosenHardSkills,
  chosenSoftSkills,
} from "./_config";

export default function Resume() {
  const { lang } = useParams<{ lang: Locale }>();

  const {
    global: { author },
    home: { summary },
    experience: experienceStrings,
    education: educationStrings,
    skills: { softSkills: softSkillsStrings },
  } = getDictionary(lang);

  useEffect(() => {
    if (typeof window !== undefined) {
      const title = document.title;

      window.addEventListener("beforeprint", () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        document.title = `Resume_${author.firstName}-${author.lastName}_${year}${month}${day}`;
      });

      window.addEventListener("afterprint", () => {
        document.title = title;
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const hardSkills = useRef(
    allHardSkills.filter(({ name }) =>
      chosenHardSkills.some((hardSkill) => name === hardSkill)
    )
  );

  const softSkills = useRef(
    softSkillsKeys
      .filter(({ key }) =>
        chosenSoftSkills.some((softSkill) => key === softSkill)
      )
      .map(({ key, size }) => ({
        name: softSkillsStrings[key],
        size,
      }))
  );

  const skills = useRef([...hardSkills.current, ...softSkills.current]);

  return (
    <main className="max-w-[210mm] print:w-[210mm] flex flex-col gap-y-4 font-serif p-[0.5in]">
      <section>
        <h1 className="text-[18pt] font-bold">
          {author.firstName} {author.lastName}
        </h1>
        <p>{links.email}</p>
        <p>{links.whatsApp}</p>
        <p>
          <a
            className="underline"
            href={`https://www.linkedin.com/in/${links.linkedIn}/`}
            target="_blank"
          >
            linkedin.com/in/{links.linkedIn}
          </a>
        </p>
        <p>
          <a
            className="underline"
            href={`https://www.${links.site}/`}
            target="_blank"
          >
            {links.site}
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Summary</h2>
        {summary
          .filter((_, i) => i < maxSummaryParagraphs)
          .map((paragraph, i) => (
            <p key={i} className="text-[12pt] text-justify">
              {paragraph}
            </p>
          ))}
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Skills</h2>
        <ul className="flex gap-x-3.5 flex-wrap">
          {skills.current.map(({ name }, i) => (
            <li
              key={i}
              className="relative text-[12pt] after:content-['•'] after:absolute after:-right-[10px] last-of-type:after:content-['']"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Experience</h2>
        <div className="flex flex-col gap-y-3">
          {experience
            .filter(({ resume }) => resume)
            .map(({ key, companyName, year, resumeResponsibilities }, i) => (
              <div key={i}>
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
                      <li key={i}>{responsibility}</li>
                    ))}
                  <li>
                    Biggest challenge: {experienceStrings[key].biggestChallenge}
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Education</h2>
        <div className="flex flex-col gap-y-3">
          {education.map(({ schoolId, schoolName }, i) => (
            <div key={i}>
              <p className="text-[12pt] font-bold">
                {educationStrings[schoolId].degree},{" "}
                {educationStrings[schoolId].fieldOfStudy}
              </p>
              <p className="text-[12pt]">{schoolName}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
