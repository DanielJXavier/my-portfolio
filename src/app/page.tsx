import Image from "next/image";

import Title from "./components/Title";

import Email from "./icons/Email";
import WhatsApp from "./icons/WhatsApp";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";

export default function Page() {
  return (
    <>
      <main className="container mx-auto px-4 md:px-5 xl:px-6 pt-6 md:pt-8 xl:pt-12 grid grid-cols-1 lg:grid-cols-3 md:gap-x-12">
        <div className="lg:col-span-2">
          <Title>Hey I&apos;m Daniel</Title>
          <p className="mb-4 text-sm md:text-base text-justify">
            With a decade-long web development journey and an MBA in strategic
            people management, I&apos;ve honed my skills to become a dedicated
            technical leader.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            My mission is to craft elegant solutions to intricate problems,
            leveraging my expertise in JavaScript and its associated frameworks
            and libraries such as React.js and Node.js. My passion extends
            beyond development; I thrive on imparting knowledge and fostering
            growth, leading me to mentor a team of exceptional engineers at OLX,
            a global frontrunner in online classifieds. Our team is responsible
            for the search and recommendation systems and the design system of
            the platform.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            In my past roles, I&apos;ve acquired and applied pivotal management
            skills such as emotional intelligence, collaborative design, and
            agile methodologies. These skills have not only given me a
            competitive edge but also shaped me into a well-rounded
            professional. I am driven by an insatiable curiosity to learn and a
            readiness to take on new challenges. I firmly believe in the
            transformative power of technology and its potential to positively
            impact society.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            Besides technology, I find joy in capturing the beauty of landscapes
            through my lens and staying active with sports. I am always open to
            exploring new opportunities and forging meaningful connections.
            Let&apos;s engage in a conversation!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-48 md:w-60 lg:w-72 xl:w-80 2xl:w-96 h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
            <Image
              className="object-contain rounded-full pointer-events-none"
              priority={true}
              src="/profile.jpg"
              fill
              sizes="50vw, (min-width: 768px): 33vw, (min-width: 1024px): 30vw, (min-width: 1280px): 25vw, (min-width: 1536px): 20vw"
              alt="Photo of the author (Daniel Xavier)"
            />
          </div>
        </div>
      </main>
      <section className="container mx-auto px-4 md:px-5 xl:px-6 py-4 md:py-8 flex flex-col lg:flex-row gap-y-3 md:gap-y-4 lg:gap-x-2 xl:gap-x-12 items-center">
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="mailto:dxdanielxavier@gmail.com"
          target="_blank"
        >
          <Email />
          dxdanielxavier@gmail.com
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://wa.me/5531997325804"
          target="_blank"
        >
          <WhatsApp />
          +55 31 99732-5804
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://www.linkedin.com/in/danieljxavier/"
          target="_blank"
        >
          <LinkedIn />
          @danieljxavier
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://github.com/DanielJXavier"
          target="_blank"
        >
          <GitHub />
          @DanielJXavier
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://www.instagram.com/danieljxavier/"
          target="_blank"
        >
          <Instagram />
          @danieljxavier
        </a>
      </section>
    </>
  );
}
