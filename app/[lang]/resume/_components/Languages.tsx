import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { languages } from "@/[lang]/resume/_config";

import VisibilityControl from "./VisibiltyControl";

export default function Languages() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    languages: { items: languagesStrings },
    resume: { sectionTitles },
  } = getDictionary(lang);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.languages}</h2>
      <hr />
      <ul className="pl-3.5 [&_li]:relative [&_li]:text-[12pt] [&_li]:text-justify [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:-left-[10px]">
        {languages.map(({ languageId }, i) => (
          <VisibilityControl
            key={`language-item-${i}`}
            className="items-baseline break-inside-avoid"
          >
            <div>
              <p className="text-[12pt]">
                {languagesStrings[languageId].name} (
                {languagesStrings[languageId].level})
              </p>
            </div>
          </VisibilityControl>
        ))}
      </ul>
    </section>
  );
}
