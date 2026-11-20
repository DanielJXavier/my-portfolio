import { getDictionary } from "@/get-dictionary";
import { useHomeContent } from "@/app/_hooks/useHomeContent";

import { maxSummaryParagraphs } from "../_config";
export default function Summary() {
  const { lang, summary: defaultSummary } = useHomeContent();
  const {
    resume: { sectionTitles },
  } = getDictionary(lang);

  const summary = defaultSummary.filter((_, i) => i < maxSummaryParagraphs);

  return (
    <section>
      <h2 className="text-[16pt] font-bold">{sectionTitles.summary}</h2>
      <hr />
      <textarea
        className="mt-1 w-full text-[12pt] text-justify align-top border border-primary print:mt-0 print:border-none print:resize-none"
        defaultValue={summary.join("\n\n")}
        rows={summary.reduce(
          (rows, paragraph) =>
            rows +
            (summary.length - 1) +
            Math.ceil(paragraph.length / 190),
          0
        )}
      />
    </section>
  );
}
