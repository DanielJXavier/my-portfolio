import Image from "next/image";

type EducationItemProps = {
  from: string;
  via: string;
  logoPath: string;
  school: string;
  fieldOfStudy: string;
  degree: string;
  years: string;
  disciplines: string[];
};

export default function EducationItem({
  from,
  via,
  logoPath,
  school,
  fieldOfStudy,
  degree,
  years,
  disciplines,
}: EducationItemProps) {
  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-[40px] before:bottom-[-21px] before:sm:bottom-[-36px] last-of-type:before:bottom-0 before:left-[16px] before:ml-0.5 before:w-1 before:bg-gradient-to-b ${from} ${via} before:to-[#000] before:-z-10`}
    >
      <header className="flex items-start gap-x-2">
        <Image
          className="rounded-full"
          src={logoPath}
          width={40}
          height={40}
          alt={`Logo of ${school} school`}
        />
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight">
          {fieldOfStudy} @ {school}
          <span className="text-xs md:text-sm"> ({years})</span>
        </h2>
      </header>
      <section className="pl-14 lg:px-14">
        <h3 className="xl:text-xl">{degree}</h3>
      </section>
      <section className="mt-4 pl-14 xl:px-14">
        <ul className="pl-7 list-disc text-sm xl:text-base">
          {disciplines.map((discipline, i) => (
            <li key={i}>{discipline}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
