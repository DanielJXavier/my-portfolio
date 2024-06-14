import { useRef } from "react";

import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import {
  hardSkills as allHardSkills,
  softSkills as softSkillsKeys,
} from "@/[lang]/(pages)/skills/_config";

import { chosenHardSkills, chosenSoftSkills } from "../_config";

import VisibilityControl from "./VisibiltyControl";

export default function Skills() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    skills: { soft: softSkillsStrings },
    resume: { sectionTitles },
  } = getDictionary(lang);

  const hardSkills = useRef(
    allHardSkills.map((skill) => ({
      ...skill,
      visible: chosenHardSkills.some((key) => key === skill.key),
    }))
  );

  const softSkills = useRef(
    softSkillsKeys.map((skill) => ({
      ...skill,
      name: softSkillsStrings[skill.key],
      visible: chosenSoftSkills.some((key) => key === skill.key),
    }))
  );

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.skills}</h2>
      <ul className="grid grid-flow-row-dense grid-cols-2 print:flex print:gap-x-3.5 print:flex-wrap">
        {hardSkills.current.map(({ key, name, visible }) => (
          <VisibilityControl
            className={`col-start-1 ${
              visible &&
              "print:relative print:text-[12pt] print:after:content-['•'] print:after:absolute print:after:-right-[10px]"
            }`}
            key={key}
            defaultVisible={visible}
          >
            {name}
          </VisibilityControl>
        ))}
        {softSkills.current.map(({ key, name, visible }) => (
          <VisibilityControl
            className={`col-start-2 ${
              visible &&
              "print:relative print:text-[12pt] print:after:content-['•'] print:after:absolute print:after:-right-[10px]"
            }`}
            key={key}
            defaultVisible={visible}
          >
            {name}
          </VisibilityControl>
        ))}
      </ul>
    </section>
  );
}
