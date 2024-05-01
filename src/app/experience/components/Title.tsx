import Image from "next/image";

type TitleProps = {
  logoPath: string;
  year: string;
  role: string;
  company: string;
};

export default function Title({ logoPath, year, role, company }: TitleProps) {
  return (
    <header>
      <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold flex items-center gap-x-2">
        <Image
          src={logoPath}
          width={40}
          height={40}
          alt={`Logo of ${company} company`}
        />
        ({year}) {role} @ {company}
      </h2>
    </header>
  );
}
