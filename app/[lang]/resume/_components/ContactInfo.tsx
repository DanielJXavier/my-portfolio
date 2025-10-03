import { useParams } from "next/navigation";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import { author } from "@/_config";

import { links } from "@/[lang]/(pages)/(home)/_config";

import VisibilityControl from "./VisibiltyControl";

const commonClassName =
  "print:relative print:flex print:items-center print:after:content-[''] print:after:absolute print:after:-right-2 print:after:w-px print:after:h-3 print:after:bg-primary";

export default function ContactInfo() {
  const { lang } = useParams<{ lang: Lang }>();

  const {
    resume: { locationInfo },
  } = getDictionary(lang);

  return (
    <section>
      <h1 className="text-[18pt] font-bold text-center">
        {author.firstName} {author.lastName}
      </h1>

      <p className="text-center">
        {locationInfo.city}, {locationInfo.state}, {locationInfo.country}
      </p>

      <ul className="print:flex print:gap-x-4 print:justify-center">
        <VisibilityControl className={commonClassName}>
          {links.email}
        </VisibilityControl>

        <VisibilityControl className={commonClassName}>
          {links.whatsApp}
        </VisibilityControl>

        <VisibilityControl className={commonClassName}>
          <a
            className="underline"
            href={`https://www.linkedin.com/in/${links.linkedIn}/`}
            target="_blank"
          >
            linkedin.com/in/{links.linkedIn}
          </a>
        </VisibilityControl>

        <VisibilityControl>
          <a
            className="underline"
            href={`https://www.${links.site}/`}
            target="_blank"
          >
            {links.site}
          </a>
        </VisibilityControl>
      </ul>
    </section>
  );
}
