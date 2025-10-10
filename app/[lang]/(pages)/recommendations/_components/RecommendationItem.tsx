import Image from "next/image";

type RecommendationItemPropsType = Readonly<{
  authorId: string;
  authorName: string;
  role: string;
  company: string;
  paragraphs: string[];
  imageAltText: string;
}>;

export default function RecommendationItem({
  authorId,
  authorName,
  role,
  company,
  paragraphs,
  imageAltText,
}: RecommendationItemPropsType) {
  return (
    <article className={`my-6 sm:my-10`} data-testid="recommendation-item">
      <header className="grid grid-cols-[auto_1fr] gap-x-3">
        <Image
          className="rounded-full"
          src={`/images/recommendations/${authorId}.jpeg`}
          width={64}
          height={64}
          alt={`${imageAltText} (${authorName})`}
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
            key={`paragraph-${i}`}
          >
            {paragraph}
          </blockquote>
        ))}
      </section>
    </article>
  );
}
