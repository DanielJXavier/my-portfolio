"use client";

import { createContext, useState } from "react";

import Resposibilities from "./components/Responsibilities";
import GreatestChallenge from "./components/GreatestChallenge";
import ExperienceItem from "./components/ExperienceItem";

export const ExperienceContext = createContext("");

export default function Experience() {
  const [experience, setExperience] = useState("simple");

  return (
    <ExperienceContext.Provider value={experience}>
      <main className="container mx-auto px-4 md:px-5 xl:px-6 pt-6 md:pt-8 xl:pt-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 xl:mb-8 flex items-center gap-x-3">
          <span>Experience</span>
          <span className="text-sm lg:text-base">
            (
            <button
              className={`${experience === "simple" ? "underline" : ""}`}
              onClick={() => setExperience("simple")}
            >
              simple
            </button>{" "}
            |{" "}
            <button
              className={`${experience === "detailed" ? "underline" : ""}`}
              onClick={() => setExperience("detailed")}
            >
              detailed
            </button>
            )
          </span>
        </h1>
        <ExperienceItem
          from="before:from-[#6d0ad5]"
          via="before:via-[#6d0ad5]"
          logoPath="/grupoolx_logo.jpg"
          year="2024"
          role="Software Engineering Manager"
          company="Grupo OLX"
          description="I was a leader of the &ldquo;Ads Seller Experience&rdquo; team."
        >
          <Resposibilities>
            <li>
              To directly lead all developers (9 devs) on the team, acting as a
              reference;
            </li>
            <li>
              To ensure delivery of the platform&apos;s registration and ad
              management system roadmap;
            </li>
            <li>To bring engagement to the team;</li>
            <li>
              To do &ldquo;1:1s&rdquo; and help those led to execute their
              performance cycle;
            </li>
            <li>To apply agile methodologies and conduct team ceremonies;</li>
            <li>
              To support the Product Manager to make the best decisions for the
              product;
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To handle the high expectations of leaders for short-term
            deliveries.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#6d0ad5]"
          via="before:via-[#6d0ad5]"
          logoPath="/grupoolx_logo.jpg"
          year="2023"
          role="Software Engineering Manager"
          company="Grupo OLX"
          description="I was a leader of the &ldquo;Search & Recommendation&rdquo; team&sup1; and the &ldquo;Design System&rdquo; chapter&sup2;."
        >
          <Resposibilities>
            <li>
              To directly lead all developers (8 devs) on the team, acting as a
              reference;&sup1;
            </li>
            <li>
              To ensure delivery of the search and recommendation systems
              roadmap;&sup1;
            </li>
            <li>
              To organize the team and propose a better structure to support the
              strategic plan for the next year;&sup1;
            </li>
            <li>
              To clarify the company&apos;s understanding of the search and
              recommendation subjects;&sup1;
            </li>
            <li>
              To indirectly lead all developers (9 devs) on the chapter;&sup2;
            </li>
            <li>
              To bring engagement to the chapter and make valuable deliveries by
              working just once a week;&sup2;
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To handle both big responsibilities (team&sup1; and chapter&sup2;)
            at the same time.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#6d0ad5]"
          via="before:via-[#6d0ad5]"
          logoPath="/grupoolx_logo.jpg"
          year="2022~2023"
          role="Software Engineering Manager"
          company="Grupo OLX"
          description="I was a leader of the &ldquo;Design System&rdquo; team."
        >
          <Resposibilities>
            <li>
              To directly lead all developers (9 devs) on the team, acting as a
              reference;
            </li>
            <li>
              To partner with the Design Manager to make the best decisions for
              the product and create a roadmap;
            </li>
            <li>To ensure delivery of the Design System script;</li>
            <li>
              To collect and analyze data to ensure the project was valuable to
              the company;
            </li>
            <li>
              To ensure that the Design System is evolving and is used by other
              teams;
            </li>
            <li>
              To create documentations and processes for contributing to the
              Design System project and managing its version;
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To perform several roles (Engineering Manager, Product Manager, Data
            Analyst, etc.) at the same time.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#6d0ad5]"
          via="before:via-[#6d0ad5]"
          logoPath="/grupoolx_logo.jpg"
          year="2021~2022"
          role="Software Engineering Manager"
          company="Grupo OLX"
          description="I was a leader of the &ldquo;Advertising&rdquo; team."
        >
          <Resposibilities>
            <li>
              To directly lead all developers (7 devs) on the team, acting as a
              reference;
            </li>
            <li>
              To ensure delivery of the platform&apos;s direct and indirect
              Advertising roadmap;
            </li>
            <li>
              To hire new professionals to get the necessary productive
              capacity;
            </li>
            <li>
              To partner actively with the Product Manager to prioritize and
              develop the best initiatives;
            </li>
            <li>
              To propose a new structure for the Advertising area to get better
              results;
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To manage high expectations regarding Advertising revenue results.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#8568ec]"
          via="before:via-[#8568ec]"
          logoPath="/meaning_logo.jpg"
          year="2023"
          role="CTO & Partner"
          company="Meaning"
          description="I was the CTO and partner at the startup."
        >
          <Resposibilities>
            <li>
              To create the technical vision and product strategy for the
              company;
            </li>
            <li>To architect the solution from scratch;</li>
            <li>To refine the technical requirements of the product;</li>
            <li>To create a Proof of Concept project;</li>
          </Resposibilities>
          <GreatestChallenge>
            To transform a very &ldquo;human&rdquo; project based on personal
            consultancy into a system.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#5d5ef1]"
          via="before:via-[#5d5ef1]"
          logoPath="/softplan_logo.jpg"
          year="2020~2021"
          role="Development Coordinator"
          company="Softplan"
          description="I was a leader of the &ldquo;Estônia&rdquo; team."
        >
          <Resposibilities>
            <li>
              To directly lead a multidisciplinary software development team,
              composed of Software Architects, Developers, Quality Insurance
              Analysts, Product Owners, Business Analysts, and Agile Masters;
            </li>
            <li>
              To mentor, and develop the employees (direct and indirect) using
              techniques such as One-on-One and feedforward;
            </li>
            <li>
              To plan and execute the deliveries of the most important modules
              of the &ldquo;SAJ&rdquo; system;
            </li>
            <li>
              To daily practice situational leadership to explore all the
              potential of those led in the best possible way;
            </li>
            <li>
              To structure (and continuously improve) the team&apos;s workflow
              using agile software development methodologies;
            </li>
            <li>
              To create formulas and metrics to identify the (realistic)
              capacity of the team, and bring predictability to deliveries;
            </li>
            <li>To map the most effective talent retention strategies;</li>
          </Resposibilities>
          <GreatestChallenge>
            To manage a huge team (28 professionals) and critical deliveries.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#5d5ef1]"
          via="before:via-[#5d5ef1]"
          logoPath="/softplan_logo.jpg"
          year="2019~2020"
          role="Tech Lead"
          company="Softplan"
          description="I was the technical leader of the Front-End chapter."
        >
          <Resposibilities>
            <li>
              To develop the new &ldquo;SAJ&rdquo; system, built using React JS,
              .Net, and GraphQL;
            </li>
            <li>
              To be responsible for the deliveries and deployment of 17 modules
              of the system;
            </li>
            <li>
              To provide training in HTML, CSS, JavaScript, React JS, GraphQL,
              and unit tests;
            </li>
            <li>To lead a team (10 devs) of Front-End React developers;</li>
            <li>To hire new employees to the company;</li>
            <li>To choose new contractor professionals;</li>
            <li>
              To develop the professionals (One-on-one, Feedbacks, Feedforwards,
              Mentoring);
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To learn leadership skills and people management.
          </GreatestChallenge>
        </ExperienceItem>
        <ExperienceItem
          from="before:from-[#5d5ef1]"
          via="before:via-[#5d5ef1]"
          logoPath="/softplan_logo.jpg"
          year="2018~2019"
          role="Tech Lead"
          company="Softplan"
          description="I was a Senior Front-End developer at the &ldquo;França&rdquo; team."
        >
          <Resposibilities>
            <li>
              To develop new features for the &ldquo;e-SAJ&rdquo; portal using
              React JS and GraphQL;
            </li>
            <li>
              To develop new features for the &ldquo;SAJ Tribunais&rdquo; system
              using React JS and GraphQL;
            </li>
          </Resposibilities>
          <GreatestChallenge>
            To do all the deliveries of the project as the only Front-End
            developer.
          </GreatestChallenge>
        </ExperienceItem>
      </main>
    </ExperienceContext.Provider>
  );
}
