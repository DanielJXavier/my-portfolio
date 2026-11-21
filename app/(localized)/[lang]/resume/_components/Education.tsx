import { getDictionary } from "@/get-dictionary";
import { useEducationContent } from "@/app/_hooks/useEducationContent";

import VisibilityControl from "./VisibiltyControl";

export default function Education() {
  const { lang, items } = useEducationContent();

  const {
    resume: { sectionTitles },
  } = getDictionary(lang);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.education}</h2>
      <hr />
      <ul className="flex flex-col gap-y-3">
        {items.map(
          ({ schoolName, endYear, degree, fieldOfStudy }, i) => (
            <VisibilityControl
              key={`education-item-${i}`}
              className="items-baseline break-inside-avoid"
            >
              <div>
                <p className="text-[12pt]">
                  <span className="font-bold">
                    {degree}, {fieldOfStudy} @ {schoolName}
                  </span>
                  <span> ({endYear})</span>
                </p>
              </div>
            </VisibilityControl>
          ),
        )}
      </ul>
    </section>
  );
}
