import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { maxSummaryParagraphs } from "../_config";
import { useRef } from "react";

export default function Summary() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    home: { summary: defaultSummary },
    resume: { sectionTitles },
  } = getDictionary(lang);

  const summary = useRef(
    defaultSummary.filter((_, i) => i < maxSummaryParagraphs)
  );

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.summary}</h2>
      <textarea
        className="w-full text-[12pt] text-justify align-top border border-primary print:border-none print:resize-none"
        defaultValue={summary.current.join("\n\n")}
        rows={summary.current.reduce(
          (rows, paragraph) =>
            rows +
            (summary.current.length - 1) +
            Math.ceil(paragraph.length / 160),
          0
        )}
      />
    </section>
  );
}
