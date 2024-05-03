"use client";

import { createContext, useState } from "react";

import Title from "@/app/components/Title";
import Resposibilities from "./components/Responsibilities";
import GreatestChallenge from "./components/GreatestChallenge";
import ExperienceItem from "./components/ExperienceItem";

export const ExperienceContext = createContext("");

export default function Experience() {
  const [experience, setExperience] = useState("simple");

  return (
    <ExperienceContext.Provider value={experience}>
      <Title>Experience</Title>
      <menu className="text-sm lg:text-base flex gap-x-1">
        <li>
          <button
            className={`${
              experience === "simple" ? "text-[#fff] underline" : ""
            } hover:text-[#fff] hover:underline`}
            onClick={() => setExperience("simple")}
          >
            simple
          </button>
        </li>
        <li>|</li>
        <li>
          <button
            className={`${
              experience === "detailed" ? "text-[#fff] underline" : ""
            } hover:text-[#fff] hover:underline`}
            onClick={() => setExperience("detailed")}
          >
            detailed
          </button>
        </li>
      </menu>
      <ExperienceItem
        from="before:from-[#6d0ad5]"
        via="before:via-[#6d0ad5]"
        logoPath="/olx_logo.jpg"
        year="2024"
        role="Software Engineering Manager"
        company="OLX"
        description='I was the leader of the "Ads Seller Experience" team.'
      >
        <Resposibilities
          items={[
            "Spearheading a team of 9 developers, serving as a mentor and guiding light;",
            "Guaranteeing the successful execution of the platform's registration and ad management system roadmap;",
            "Cultivating a high level of engagement within the team;",
            'Conducting personalized "1:1s" to guide team members through their performance cycles;',
            "Implementing agile methodologies and leading team ceremonies to ensure a streamlined workflow;",
            "Collaborating closely with the Product Manager to facilitate informed and effective product decisions;",
          ]}
        />
        <GreatestChallenge text="Navigating the high-pressure demands of leadership for swift deliveries." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#6d0ad5]"
        via="before:via-[#6d0ad5]"
        logoPath="/olx_logo.jpg"
        year="2023"
        role="Software Engineering Manager"
        company="OLX"
        description='I was the leader of the "Search & Recommendation" team&sup1; and the "Design System" chapter&sup2;.'
      >
        <Resposibilities
          items={[
            "Spearheading a team of 8 developers, serving as a mentor and guiding light;¹",
            "Ensuring the successful execution of the search and recommendation systems roadmap;¹",
            "Structuring the team and proposing an optimized framework to support the strategic plan for the upcoming year;¹",
            "Demystifying the company's understanding of search and recommendation subjects;¹",
            "Indirectly supervising all developers (9 devs) in the chapter, fostering a sense of unity and direction;²",
            "Cultivating engagement within the chapter and ensuring valuable deliveries despite working only once a week;²",
          ]}
        />
        <GreatestChallenge text="Balancing the substantial responsibilities of both the team¹ and the chapter² simultaneously." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#6d0ad5]"
        via="before:via-[#6d0ad5]"
        logoPath="/olx_logo.jpg"
        year="2022~2023"
        role="Software Engineering Manager"
        company="OLX"
        description='I was the leader of the "Design System" team.'
      >
        <Resposibilities
          items={[
            "Leading a team of 9 developers, serving as a point of reference;",
            "Collaborating with the Design Manager to make optimal product decisions and establish a roadmap;",
            "Guaranteeing the delivery of the Design System roadmap;",
            "Collecting and analyzing data to validate the project's value to the company;",
            "Ensuring the continuous evolution of the Design System and its adoption by other teams;",
            "Developing documentation and processes for contributing to the Design System project and managing its version;",
          ]}
        />
        <GreatestChallenge text="Simultaneously assuming multiple roles, including Engineering Manager, Product Manager, Data Analyst, among others." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#6d0ad5]"
        via="before:via-[#6d0ad5]"
        logoPath="/olx_logo.jpg"
        year="2021~2022"
        role="Software Engineering Manager"
        company="OLX"
        description='I was the leader of the "Advertising" team.'
      >
        <Resposibilities
          items={[
            "Directly leading a team of 7 developers, serving as a key reference;",
            "Ensuring the delivery of both direct and indirect Advertising roadmaps for the platform;",
            "Recruiting new professionals to increase productive capacity;",
            "Actively partnering with the Product Manager to prioritize and develop optimal initiatives;",
            "Proposing a new structure for the Advertising area to enhance results;",
          ]}
        />
        <GreatestChallenge text="Managing high expectations related to Advertising revenue results." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#8568ec]"
        via="before:via-[#8568ec]"
        logoPath="/meaning_logo.jpg"
        year="2023"
        role="CTO & Partner"
        company="Meaning"
        description="I held the position of CTO and co-founder at the startup."
      >
        <Resposibilities
          items={[
            "Crafting the company's technical vision and product strategy;",
            "Architecting the solution from the ground up;",
            "Refining the product's technical specifications;",
            "Developing a Proof of Concept project;",
          ]}
        />
        <GreatestChallenge text='Converting a highly "human-centric" project, rooted in personal consultancy, into a systematic approach.' />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#5d5ef1]"
        via="before:via-[#5d5ef1]"
        logoPath="/softplan_logo.jpg"
        year="2020~2021"
        role="Development Coordinator"
        company="Softplan"
        description='I was the leader of the "Estônia" team.'
      >
        <Resposibilities
          items={[
            "Direct leadership of a multidisciplinary software development team, inclusive of Software Architects, Developers, Quality Assurance Analysts, Product Owners, Business Analysts, and Agile Masters;",
            "Mentoring and development of both direct and indirect employees, utilizing techniques such as One-on-One and feedforward;",
            'Planning and execution of deliveries for the most critical modules of the "SAJ" system;',
            "Daily application of situational leadership to maximize the potential of those under my guidance;",
            "Structuring and continuous enhancement of the team's workflow using agile software development methodologies;",
            "Creation of formulas and metrics to accurately gauge the team's capacity, thereby bringing predictability to deliveries;",
            "Mapping of effective talent retention strategies;",
          ]}
        />
        <GreatestChallenge text="Managing a large team (comprising 28 professionals) and overseeing critical deliveries." />
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
        <Resposibilities
          items={[
            'Development of the new "SAJ" system, constructed using React JS, .Net, and GraphQL;',
            "Oversight of the deliveries and deployment of 17 modules of the system;",
            "Provision of training in HTML, CSS, JavaScript, React JS, GraphQL, and unit tests;",
            "Leadership of a team of 10 Front-End React developers;",
            "Recruitment of new employees for the company;",
            "Selection of new contractor professionals;",
            "Professional development through One-on-one sessions, Feedbacks, Feedforwards, and Mentoring;",
          ]}
        />
        <GreatestChallenge text="Acquiring leadership skills and mastering people management." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#5d5ef1]"
        via="before:via-[#5d5ef1]"
        logoPath="/softplan_logo.jpg"
        year="2018~2019"
        role="Senior Front-End Developer"
        company="Softplan"
        description='I was a Senior Front-End developer at the "França" team.'
      >
        <Resposibilities
          items={[
            'Development of new features for the "e-SAJ" portal utilizing React JS and GraphQL;',
            'Creation of new features for the "SAJ Tribunais" system using React JS and GraphQL;',
          ]}
        />
        <GreatestChallenge text="Managing all the deliveries of the project as the sole Front-End developer." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#ee4e21]"
        via="before:via-[#ee4e21]"
        logoPath="/hotmart_logo.jpg"
        year="2018"
        role="Senior Front-End Developer"
        company="Hotmart"
        description='I was a Senior Front-End developer at the "Growth Hacking" team.'
      >
        <Resposibilities
          items={[
            "Developing systems to address the company's internal needs and automate tasks, leveraging technologies such as Vue.js, and Node.js;",
            "Creating a Proof of Concept (POC) that introduced a simplified method for product registration on the platform;",
          ]}
        />
        <GreatestChallenge text="Balancing the need to comprehend customer requirements clearly while simultaneously coding." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#ee4e21]"
        via="before:via-[#ee4e21]"
        logoPath="/hotmart_logo.jpg"
        year="2017~2018"
        role="Mid Level Front-End Developer"
        company="Hotmart"
        description='I was a Mid Level Front-End developer at the "User Acquisition" team.'
      >
        <Resposibilities
          items={[
            "Designing a system to generate blog post images using components and pre-defined templates, thereby enhancing the productivity of the design team;",
            'Developing a high-performance caching system for the "Hotmart blog" (WordPress), which resulted in a 300% increase in performance;',
            'Implementing the Arabic version of the "Hotmart blog";',
          ]}
        />
        <GreatestChallenge text="Conceptualizing and developing complex solutions from the ground up." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#ee4e21]"
        via="before:via-[#ee4e21]"
        logoPath="/hotmart_logo.jpg"
        year="2016~2017"
        role="Entry Level Front-End Developer"
        company="Hotmart"
        description='I was an Entry Level Front-End developer at the "User Acquisition" team.'
      >
        <Resposibilities
          items={[
            'Developing a new WordPress theme for the "Hotmart blog" utilizing only HTML5, CSS Grid Layout, and Vanilla JS;',
            'Implementing the new layout for the "Hotmart blog";',
            "Creating custom features within the WordPress admin interface;",
          ]}
        />
        <GreatestChallenge text="Acquiring new development skills and applying them to complex projects." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#fff]"
        via="before:via-[#fff]"
        logoPath="/sydle_logo.jpg"
        year="2014~2016"
        role="Support Analyst"
        company="Sydle"
        description='I was a Support Analyst at the "Suporte & Sustentação" team.'
        hasBlackLogo={true}
      >
        <Resposibilities
          items={[
            "Spearheading the development of web projects utilizing WordPress and Magento;",
            "Facilitating the modeling and automation of the company's internal processes through BPMN;",
            "Providing comprehensive technical support to users of the company's systems;",
            "Overseeing the configuration and monitoring of both Linux and Windows servers.",
          ]}
        />
        <GreatestChallenge text="Rapidly acquiring development skills and contributing to legacy projects." />
      </ExperienceItem>
      <ExperienceItem
        from="before:from-[#fff]"
        via="before:via-[#fff]"
        logoPath="/sydle_logo.jpg"
        year="2012~2014"
        role="Support Intern"
        company="Sydle"
        description='I was a Support Intern at the "Suporte & Sustentação" team.'
        hasBlackLogo={true}
      >
        <Resposibilities
          items={[
            "Providing technical support to users of the company's systems;",
            "Configuring and monitoring infrastructure on Linux and Windows servers;",
            "Compiling team reports;",
            "Offering infrastructure support to the company's employees.",
          ]}
        />
        <GreatestChallenge text="Simultaneously learning a multitude of new concepts and balancing them with my university commitments." />
      </ExperienceItem>
    </ExperienceContext.Provider>
  );
}
