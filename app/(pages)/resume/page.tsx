import { Metadata } from "next";

import { author } from "@/data";
import { links, paragraphs } from "@/(pages)/(home)/data";
import { experience } from "@/(pages)/(content)/experience/data";
import { education } from "@/(pages)/(content)/education/data";
import { skills } from "@/(pages)/(content)/skills/data";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Page() {
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
        {paragraphs
          .filter(({ resume }) => resume)
          .map(({ text }, i) => (
            <p key={i} className="text-[12pt] text-justify">
              {text}
            </p>
          ))}
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Skills</h2>
        <ul className="flex gap-x-3.5 flex-wrap">
          {skills
            .filter(({ resume }) => resume)
            .map(({ name }, i) => (
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
            .map(
              (
                { role, companyName, year, responsibilities, biggestChallenge },
                i
              ) => (
                <div key={i}>
                  <p className="text-[12pt] font-bold">
                    {role} @ {companyName}
                  </p>
                  <p className="text-[12pt]">{year}</p>
                  <ul className="pl-3.5">
                    {responsibilities
                      .filter(({ resume }) => resume)
                      .map(({ text }, i) => (
                        <li
                          key={i}
                          className="relative text-[12pt] text-justify before:content-['•'] before:absolute before:-left-[10px]"
                        >
                          {text}
                        </li>
                      ))}
                  </ul>
                  <p className="text-[12pt] text-justify">
                    Biggest challenge: {biggestChallenge}
                  </p>
                </div>
              )
            )}
        </div>
      </section>
      <section>
        <h2 className="text-[16pt] font-bold">Education</h2>
        <div className="flex flex-col gap-y-3">
          {education.map(({ schoolName, fieldOfStudy, degree }, i) => (
            <div key={i}>
              <p className="text-[12pt] font-bold">
                {degree}, {fieldOfStudy}
              </p>
              <p className="text-[12pt]">{schoolName}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
