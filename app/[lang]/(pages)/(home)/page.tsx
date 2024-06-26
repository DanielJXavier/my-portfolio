import Image from "next/image";

import { getDictionary } from "get-dictionary";
import { Lang } from "i18n-config";

import Title from "@/_components/Title";

import { author } from "@/_config";

import KeepPublic from "@/_icons/KeepPublic";
import Email from "@/_icons/Email";
import WhatsApp from "@/_icons/WhatsApp";
import LinkedIn from "@/_icons/LinkedIn";
import GitHub from "@/_icons/GitHub";
import Instagram from "@/_icons/Instagram";

import { links } from "./_config";

export default function Page({ params: { lang } }: { params: { lang: Lang } }) {
  const {
    home: { greeting, summary, imageAltText },
  } = getDictionary(lang);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-12">
        <div className="lg:col-span-2">
          <Title
            icon={<KeepPublic />}
          >{`${greeting} ${author.firstName}!`}</Title>
          {summary.map((paragraph, i) => (
            <p
              key={`paragraph-${i}`}
              className="mt-4 text-sm md:text-base text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-6 lg:mt-0 flex items-center justify-center">
          <div className="relative w-48 md:w-60 lg:w-72 xl:w-80 2xl:w-96 h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
            <Image
              className="object-contain rounded-full"
              priority={true}
              src="/images/profile.jpg"
              fill
              sizes="50vw, (min-width: 768px): 33vw, (min-width: 1024px): 30vw, (min-width: 1280px): 25vw, (min-width: 1536px): 20vw"
              alt={`${imageAltText} (${author.firstName} ${author.lastName})`}
            />
          </div>
        </div>
      </section>
      <section className="mt-4 py-4 md:py-8 flex flex-col lg:flex-row gap-y-3 md:gap-y-4 lg:gap-x-2 xl:gap-x-12 items-center">
        {links.email && (
          <a
            className="group/svg flex gap-x-1.5 xl:gap-x-2 hover:text-secondary text-sm md:text-base"
            href={`mailto:${links.email}`}
            target="_blank"
          >
            <Email />
            {links.email}
          </a>
        )}
        {links.whatsApp && (
          <a
            className="group/svg flex gap-x-1.5 xl:gap-x-2 hover:text-secondary text-sm md:text-base"
            href={`https://wa.me/${links.whatsApp.replaceAll(/\+|\s|-/g, "")}`}
            target="_blank"
          >
            <WhatsApp />
            {links.whatsApp}
          </a>
        )}
        {links.linkedIn && (
          <a
            className="group/svg flex gap-x-1.5 xl:gap-x-2 hover:text-secondary text-sm md:text-base"
            href={`https://www.linkedin.com/in/${links.linkedIn}/`}
            target="_blank"
          >
            <LinkedIn />@{links.linkedIn}
          </a>
        )}
        {links.gitHub && (
          <a
            className="group/svg flex gap-x-1.5 xl:gap-x-2 hover:text-secondary text-sm md:text-base"
            href={`https://github.com/${links.gitHub}`}
            target="_blank"
          >
            <GitHub />@{links.gitHub}
          </a>
        )}
        {links.instagram && (
          <a
            className="group/svg flex gap-x-1.5 xl:gap-x-2 hover:text-secondary text-sm md:text-base"
            href={`https://www.instagram.com/${links.instagram}/`}
            target="_blank"
          >
            <Instagram />@{links.instagram}
          </a>
        )}
      </section>
    </>
  );
}
