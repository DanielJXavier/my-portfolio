import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { maxSummaryParagraphs } from "../_config";

export default function Summary() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    home: { summary },
    resume: { sectionTitles },
  } = getDictionary(lang);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.summary}</h2>
      {summary
        .filter((_, i) => i < maxSummaryParagraphs)
        .map((paragraph, i) => (
          <p key={`paragraph-${i}`} className="text-[12pt] text-justify">
            {paragraph}
          </p>
        ))}
    </section>
  );
}
