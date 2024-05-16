import Image from "next/image";

import { RecommendationsType } from "../data";

export default function RecommendationItem({
  authorId,
  authorName,
  role,
  company,
  paragraphs,
}: RecommendationsType) {
  return (
    <article className={`my-6 sm:my-10`}>
      <header className="grid grid-cols-[auto_1fr] gap-x-3">
        <Image
          className="rounded-full"
          src={`/recommendations/${authorId}.jpeg`}
          width={64}
          height={64}
          alt={`Photo of the author (${authorName})`}
        />
        <div>
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold">
            {authorName}
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg xl:text-xl">
            {role} @ {company}
          </h3>
        </div>
      </header>
      <section className="mt-4 pl-4 border-l">
        {paragraphs.map((paragraph, i) => (
          <blockquote
            className="mb-4 text-sm xl:text-base text-justify"
            key={i}
          >
            {paragraph}
          </blockquote>
        ))}
      </section>
    </article>
  );
}
