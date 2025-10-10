import Image from "next/image";

type EducationItemPropsType = Readonly<{
  schoolId: string;
  schoolName: string;
  fieldOfStudy: string;
  degree: string;
  startYear: string;
  endYear: string;
  subjects: string[];
  imageAltText: {
    prefix: string;
    sufix: string;
  };
}>;

type MapSchoolIdToColorType = {
  [key: string]: string;
};

const mapSchoolIdToColor: MapSchoolIdToColorType = {
  estacio: "before:from-[#2f4ccc] before:via-[#2f4ccc]",
  fumec: "before:from-[#316ba9] before:via-[#316ba9]",
};

export default function EducationItem({
  schoolId,
  schoolName,
  fieldOfStudy,
  degree,
  startYear,
  endYear,
  subjects,
  imageAltText,
}: EducationItemPropsType) {
  return (
    <article
      className={`my-6 sm:my-10 relative before:content-[''] before:absolute before:top-[40px] before:bottom-[-21px] before:sm:bottom-[-36px] last-of-type:before:bottom-0 before:left-[16px] before:ml-0.5 before:w-1 before:bg-gradient-to-b ${mapSchoolIdToColor[schoolId]} before:to-background before:-z-10`}
      data-testid="education-item"
    >
      <header className="flex items-start gap-x-2">
        <Image
          className="rounded-full"
          src={`/images/education/${schoolId}.jpg`}
          width={40}
          height={40}
          alt={`${imageAltText.prefix}${schoolName}${imageAltText.sufix}`}
        />

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight">
          {fieldOfStudy} @ {schoolName}
          <span className="text-xs md:text-sm">
            {" "}
            ({startYear} ~ {endYear})
          </span>
        </h2>
      </header>

      <section className="pl-14 lg:px-14">
        <h3 className="xl:text-xl">{degree}</h3>
      </section>

      <section className="mt-4 pl-14 xl:px-14">
        <ul className="pl-7 list-disc text-sm xl:text-base">
          {subjects.map((subject, i) => (
            <li key={`subject-${i}`}>{subject}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
