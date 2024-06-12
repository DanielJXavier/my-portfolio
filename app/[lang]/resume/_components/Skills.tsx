import { useRef } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import {
  hardSkills as allHardSkills,
  softSkills as softSkillsKeys,
} from "@/[lang]/(pages)/skills/_config";

import { chosenHardSkills, chosenSoftSkills } from "../_config";

export default function Skills() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    skills: { soft: softSkillsStrings },
    resume: { sectionTitles },
  } = getDictionary(lang);

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
      .map((skill) => ({
        ...skill,
        name: softSkillsStrings[skill.key],
      }))
  );

  const skills = useRef([...hardSkills.current, ...softSkills.current]);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.skills}</h2>
      <ul className="flex gap-x-3.5 flex-wrap">
        {skills.current.map(({ key, name }) => (
          <li
            key={key}
            className="relative text-[12pt] after:content-['•'] after:absolute after:-right-[10px] last-of-type:after:content-['']"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
