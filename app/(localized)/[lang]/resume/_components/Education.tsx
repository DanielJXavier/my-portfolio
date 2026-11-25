import { useEducationContent } from "@/app/_hooks/useEducationContent";
import { useResumeContent } from "@/app/_hooks/useResumeContent";

import VisibilityControl from "./VisibiltyControl";

export default function Education() {
  const { items } = useEducationContent();
  const { sectionTitles } = useResumeContent();

  return (
    <section className="break-inside-avoid">
      <h2 className="text-[16pt] font-bold">{sectionTitles.education}</h2>
      <hr />
      <ul className="flex flex-col gap-y-3">
        {items.map(
          ({ schoolId, schoolName, endYear, degree, fieldOfStudy }) => (
            <VisibilityControl
              key={schoolId}
              className="items-baseline"
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
