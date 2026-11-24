import { useLanguagesContent } from "@/app/_hooks/useLanguagesContent";
import { useResumeContent } from "@/app/_hooks/useResumeContent";

import VisibilityControl from "./VisibiltyControl";

export default function Languages() {
  const { items } = useLanguagesContent();
  const { sectionTitles } = useResumeContent();

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.languages}</h2>
      <hr />
      <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-2.5">
        {items.map(({ languageId, name, level }) => (
          <VisibilityControl
            key={languageId}
            className="items-baseline break-inside-avoid"
          >
            <div>
              <p className="text-[12pt]">
                {name} ({level})
              </p>
            </div>
          </VisibilityControl>
        ))}
      </ul>
    </section>
  );
}
