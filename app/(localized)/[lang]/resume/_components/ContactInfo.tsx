import { useSiteContent } from "@/app/_hooks/useSiteContent";
import { useResumeContent } from "@/app/_hooks/useResumeContent";

import VisibilityControl from "./VisibiltyControl";

const commonClassName =
  "print:relative print:flex print:items-center print:after:content-[''] print:after:absolute print:after:-right-2 print:after:w-px print:after:h-3 print:after:bg-primary";

export default function ContactInfo() {
  const { author, contact } = useSiteContent();
  const { locationInfo } = useResumeContent();

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
          {contact.email}
        </VisibilityControl>

        <VisibilityControl className={commonClassName}>
          {contact.whatsApp}
        </VisibilityControl>

        <VisibilityControl className={commonClassName}>
          <a
            className="underline"
            href={`https://www.linkedin.com/in/${contact.linkedIn}/`}
            target="_blank"
          >
            linkedin.com/in/{contact.linkedIn}
          </a>
        </VisibilityControl>

        <VisibilityControl>
          <a
            className="underline"
            href={`https://www.${contact.site}/`}
            target="_blank"
          >
            {contact.site}
          </a>
        </VisibilityControl>
      </ul>
    </section>
  );
}
