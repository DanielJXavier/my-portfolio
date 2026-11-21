import { useSkillsContent } from "@/app/_hooks/useSkillsContent";
import { useResumeContent } from "@/app/_hooks/useResumeContent";

import VisibilityControl from "./VisibiltyControl";

export default function Skills() {
  const {
    hardSkills: allHardSkills,
    softSkills: softSkillsKeys,
    chosenHardSkills,
    chosenSoftSkills,
  } = useSkillsContent();

  const { sectionTitles } = useResumeContent();

  const hardSkills = allHardSkills.map((skill) => ({
    ...skill,
    visible: chosenHardSkills.some((key) => key === skill.key),
  }));

  const softSkills = softSkillsKeys.map((skill) => ({
    ...skill,
    visible: chosenSoftSkills.some((key) => key === skill.key),
  }));

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.skills}</h2>
      <hr />
      <ul className="grid grid-flow-row-dense grid-cols-2 print:flex print:gap-x-3.5 print:flex-wrap print:[&>li[data-visible]:not(:has(~_li[data-visible])):after]:content-none">
        {hardSkills.map(({ key, name, visible }) => (
          <VisibilityControl
            className="col-start-1 print:relative print:text-[12pt] print:after:content-['•'] print:after:absolute print:after:-right-2.5"
            key={key}
            defaultVisible={visible}
          >
            {name}
          </VisibilityControl>
        ))}
        {softSkills.map(({ key, name, visible }) => (
          <VisibilityControl
            className="col-start-2 print:relative print:text-[12pt] print:after:content-['•'] print:after:absolute print:after:-right-2.5"
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
