import { author } from "@/_config";

import { links } from "@/[lang]/(pages)/(home)/_config";

import VisibilityControl from "./VisibiltyControl";

export default function ContactInfo() {
  return (
    <section>
      <h1 className="text-[18pt] font-bold">
        {author.firstName} {author.lastName}
      </h1>
      <ul>
        <VisibilityControl>{links.email}</VisibilityControl>
        <VisibilityControl>{links.whatsApp}</VisibilityControl>
        <VisibilityControl>
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
