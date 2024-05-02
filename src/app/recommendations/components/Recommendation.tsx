type RecommendationProps = {
  author: string;
  role: string;
  company: string;
  paragraphs: string[];
};

export default function Recommendation({
  author,
  role,
  company,
  paragraphs,
}: RecommendationProps) {
  return (
    <article className={`my-6 sm:my-10`}>
      <header>
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold">
          {author}
        </h2>
      </header>
      <section>
        <h3 className="xl:text-xl">
          {role} @ {company}
        </h3>
      </section>
      <section className="mt-4 pl-4 border-l">
        {paragraphs.map((paragraph, i) => (
          <blockquote className="mb-4 text-sm xl:text-base" key={i}>
            {paragraph}
          </blockquote>
        ))}
      </section>
    </article>
  );
}
