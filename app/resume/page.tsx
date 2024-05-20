import { Fragment } from "react";

import { author } from "@/data";
import { links, paragraphs } from "@/(pages)/(home)/data";
import { experience } from "@/(pages)/(content)/experience/data";
import { education } from "@/(pages)/(content)/education/data";
import { skills } from "@/(pages)/(content)/skills/data";

export default function Page() {
  return (
    <main className="w-[210mm] h-[297mm] font-serif p-[0.5in]">
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
      <section className="mt-4">
        <h2 className="text-[16pt] font-bold">Summary</h2>
        {paragraphs
          .filter(({ resume }) => resume)
          .map(({ text }, i) => (
            <p key={i} className="text-[12pt] text-justify">
              {text}
            </p>
          ))}
      </section>
      <section className="mt-4">
        <h2 className="text-[16pt] font-bold">Experience</h2>
        {experience
          .filter(({ resume }) => resume)
          .map(
            (
              { role, companyName, year, resposibilities, greatestChallenge },
              i
            ) => (
              <Fragment key={i}>
                <p className="text-[12pt] font-bold">
                  {role} @ {companyName}
                </p>
                <p className="text-[12pt]">{year}</p>
                <ul>
                  {resposibilities
                    .filter(({ resume }) => resume)
                    .map(({ text }, i) => (
                      <li key={i} className="text-[12pt] text-justify">
                        {text}
                      </li>
                    ))}
                </ul>
                <p className="text-[12pt] text-justify">{greatestChallenge}</p>
              </Fragment>
            )
          )}
      </section>
      <section className="mt-4">
        <h2 className="text-[16pt] font-bold">Education</h2>
        {education.map(({ schoolName, fieldOfStudy, degree, years }, i) => (
          <Fragment key={i}>
            <p className="text-[12pt] font-bold">
              {degree}, {fieldOfStudy}
            </p>
            <p className="text-[12pt]">{schoolName}</p>
            <p className="text-[12pt]">{years}</p>
          </Fragment>
        ))}
      </section>
      <section className="mt-4">
        <h2 className="text-[16pt] font-bold">Skills</h2>
        {skills
          .filter(({ size }) => size >= 4)
          .map(({ name }, i) => (
            <Fragment key={i}>
              <p className="text-[12pt]">{name}</p>
            </Fragment>
          ))}
      </section>
    </main>
  );
}
