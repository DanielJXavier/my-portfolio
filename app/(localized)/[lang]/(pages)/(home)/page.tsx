import Image from "next/image";
import { Metadata } from "next";

import { getHomeContent } from "@/app/_content/home";
import { Lang } from "@/i18n-config";
import { getLocalizedAlternates } from "@/app/_metadata";

import Title from "@/app/_components/Title";

import Email from "@/app/_icons/Email";
import GitHub from "@/app/_icons/GitHub";
import Instagram from "@/app/_icons/Instagram";
import KeepPublic from "@/app/_icons/KeepPublic";
import LinkedIn from "@/app/_icons/LinkedIn";
import WhatsApp from "@/app/_icons/WhatsApp";

const SONAR_PROJECT = "DanielJXavier_my-portfolio";
const SONAR_BADGES = [
  { key: "qualityGate", metric: "alert_status", width: 148 },
  { key: "coverage", metric: "coverage", width: 127 },
  { key: "security", metric: "security_rating", width: 94 },
  { key: "reliability", metric: "reliability_rating", width: 101 },
  { key: "maintainability", metric: "sqale_rating", width: 133 },
] as const;
const CORE_TECHNOLOGY_BADGES = [
  { name: "React", badge: "react", logo: "react", width: 86 },
  { name: "Next.js", badge: "next.js", logo: "next.js", width: 99 },
  {
    name: "Tailwind CSS",
    badge: "tailwindcss",
    logo: "tailwindcss",
    width: 139,
  },
  {
    name: "TypeScript",
    badge: "typescript",
    logo: "typescript",
    width: 127,
  },
] as const;
const TESTING_TOOL_BADGES = [
  { name: "Jest", badge: "jest", logo: "jest", width: 82 },
  {
    name: "Testing Library",
    badge: "testinglibrary",
    logo: "testinglibrary",
    width: 156,
  },
  { name: "Cypress", badge: "cypress", logo: "cypress", width: 104 },
] as const;
const PROJECT_TOOL_BADGES = [...CORE_TECHNOLOGY_BADGES, ...TESTING_TOOL_BADGES];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return { alternates: getLocalizedAlternates("home", lang) };
}

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params;
  const { author, contact: links, greeting, aboutProject, summary, image } =
    getHomeContent(lang);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-12">
        <div className="lg:col-span-2">
          <Title
            icon={<KeepPublic />}
          >{`${greeting} ${author.firstName}!`}</Title>
          {summary.map((paragraph) => (
            <p
              key={paragraph}
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
              src={image.src}
              fill
              sizes="(min-width: 1536px) 384px, (min-width: 1280px) 320px, (min-width: 1024px) 288px, (min-width: 768px) 240px, 192px"
              alt={`${image.alt} (${author.firstName} ${author.lastName})`}
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

      <section
        className="mt-4 border-t border-primary/30 pt-6"
        aria-labelledby="about-project-heading"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-between">
          <h2 id="about-project-heading" className="text-base font-medium">
            {aboutProject.title}
          </h2>
          <a
            className="group/svg flex items-center gap-x-1.5 text-sm text-primary/75 hover:text-secondary"
            href="https://github.com/DanielJXavier/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
            {aboutProject.sourceLinkLabel}
          </a>
        </div>

        <div className="mt-3" role="group" aria-label={aboutProject.toolsLabel}>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
            {PROJECT_TOOL_BADGES.map(({ name, badge, logo, width }) => (
              <li key={badge} className="relative block h-7" style={{ width }}>
                <Image
                  src={`https://shields.io/badge/${badge}-black?logo=${logo}&style=for-the-badge`}
                  alt={name}
                  fill
                  sizes={`${width}px`}
                  unoptimized
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-md bg-primary/5 py-2 lg:justify-start"
          aria-label={aboutProject.metricsLabel}
        >
          {SONAR_BADGES.map(({ key, metric, width }) => (
            <li key={metric}>
              <a
                className="block rounded focus-visible:outline focus-visible:outline-offset-2"
                href={`https://sonarcloud.io/summary/overall?id=${SONAR_PROJECT}&branch=main`}
                aria-label={aboutProject.badges[key]}
              >
                <span
                  className="relative block h-5"
                  style={{ width }}
                >
                  <Image
                    src={`https://sonarcloud.io/api/project_badges/measure?project=${SONAR_PROJECT}&metric=${metric}`}
                    alt={aboutProject.badges[key]}
                    fill
                    sizes={`${width}px`}
                    unoptimized
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
