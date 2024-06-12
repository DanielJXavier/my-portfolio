import { author } from "@/_config";

import { links } from "@/[lang]/(pages)/(home)/_config";

export default function ContactInfo() {
  return (
    <section>
      <h1 className="text-[18pt] font-bold">
        {author.firstName} {author.lastName}
      </h1>
      <p>{links.email}</p>
      <p>{links.whatsApp}</p>
      <p>
        <a
          className="underline"
          href={`https://www.linkedin.com/in/${links.linkedIn}/`}
          target="_blank"
        >
          linkedin.com/in/{links.linkedIn}
        </a>
      </p>
      <p>
        <a
          className="underline"
          href={`https://www.${links.site}/`}
          target="_blank"
        >
          {links.site}
        </a>
      </p>
    </section>
  );
}
