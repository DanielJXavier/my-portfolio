import Image from "next/image";

import Email from "./icons/Email";
import WhatsApp from "./icons/WhatsApp";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 md:px-5 xl:px-6 py-6 md:py-8 xl:py-12 grid grid-cols-1 lg:grid-cols-3 md:gap-x-12">
        <div className="lg:col-span-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 xl:mb-8">
            Hey I&apos;m Daniel
          </h1>
          <p className="mb-4 text-sm md:text-base text-justify">
            With over 10 years of web development experience and a master&apos;s
            degree in strategic people management, I am a passionate and skilled
            technical leader.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            My mission is to develop great solutions to complex problems in a
            simple way, using JavaScript or frameworks and libraries like
            React.js and Node.js, which I have mastered over the years. I also
            love teaching and helping others, so I lead and mentor teams of
            talented engineers who work on the search and recommendation systems
            and the design system of the OLX platform, the global leader in
            online classifieds.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            In my previous roles, I have learned and applied some management
            skills that gave me a huge advantage and made me an even better
            professional, such as emotional intelligence, collaborative design,
            and agile methodologies. I am always eager to learn new things and
            face new challenges, and I believe that technology can make a
            positive impact on people&apos;s lives and society.
          </p>
          <p className="mb-4 text-sm md:text-base text-justify">
            Besides technology, I enjoy photographing landscapes and playing
            sports. I speak Portuguese, English, and Spanish, and I am open to
            new opportunities and connections. Let&apos;s talk!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-48 md:w-60 lg:w-72 xl:w-80 2xl:w-96 h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
            <Image
              className="object-contain rounded-full"
              priority={true}
              src="/profile.jpg"
              fill
              sizes="48rem, (min-width: 768px): 60rem, (min-width: 1024px): 72rem, (min-width: 1280px): 80rem, (min-width: 1536px): 96rem"
              alt="Picture of the author (Daniel Xavier)"
            />
          </div>
        </div>
      </main>
      <section className="container mx-auto px-4 md:px-5 xl:px-6 py-4 md:py-8 flex flex-col lg:flex-row gap-y-3 md:gap-y-4 lg:gap-x-2 xl:gap-x-12 items-center">
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="mailto:dxdanielxavier@gmail.com"
        >
          <Email />
          dxdanielxavier@gmail.com
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://wa.me/5531997325804"
        >
          <WhatsApp />
          +55 31 99732-5804
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://www.linkedin.com/in/danieljxavier/"
        >
          <LinkedIn />
          @danieljxavier
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://github.com/DanielJXavier"
        >
          <GitHub />
          @DanielJXavier
        </a>
        <a
          className="flex gap-x-1.5 xl:gap-x-2 hover:text-[#fff] [&_svg]:hover:fill-[#fff] text-sm md:text-base"
          href="https://www.instagram.com/danieljxavier/"
        >
          <Instagram />
          @danieljxavier
        </a>
      </section>
    </>
  );
}
