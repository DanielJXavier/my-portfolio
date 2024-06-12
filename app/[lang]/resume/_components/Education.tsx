import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { education } from "@/[lang]/(pages)/education/_config";

export default function Education() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    education: { items: educationStrings },
    resume: { sectionTitles },
  } = getDictionary(lang);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.education}</h2>
      <div className="flex flex-col gap-y-3">
        {education.map(({ schoolId, schoolName }, i) => (
          <div key={`education-item-${i}`}>
            <p className="text-[12pt] font-bold">
              {educationStrings[schoolId].degree},{" "}
              {educationStrings[schoolId].fieldOfStudy}
            </p>
            <p className="text-[12pt]">{schoolName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
