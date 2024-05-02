"use client";

import EducationItem from "./components/EducationItem";

export default function Page() {
  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 xl:mb-8 flex items-center gap-x-3">
        Education
      </h1>
      <EducationItem
        from="before:from-[#2f4ccc]"
        via="via:from-[#2f4ccc]"
        logoPath="/estacio_logo.jpg"
        school="Estácio"
        fieldOfStudy="Strategic People Management"
        degree="Master of Business Administration - MBA"
        years="2020~2021"
        disciplines={[
          "Coaching and Leadership",
          "Communication in Organizations",
          "Conflict Management and Negotiation",
          "Corporative Education",
          "Creativity and Organizational Innovation",
          "Finance Principles",
          "Knowledge Management",
          "Strategic Vision in People Management",
          "Theory of Organizational Development",
        ]}
      />
      <EducationItem
        from="before:from-[#316ba9]"
        via="via:from-[#316ba9]"
        logoPath="/fumec_logo.jpg"
        school="Universidade FUMEC"
        fieldOfStudy="Computer Science"
        degree="Bachelor"
        years="2010~2014"
        disciplines={[
          "Analytical Algebra and Geometry",
          "Programming Language and Techniques I",
          "Computer Architecture",
          "Fundamentals of Distributed Systems",
          "Calculus I",
          "Introduction to Logical Systems",
          "Programming Language and Techniques II",
          "Computer Networks",
          "Data Structures I",
          "Calculus II",
          "Programming Language and Techniques III",
          "Data Structures II",
          "Introduction to Robotics",
          "Statistics",
          "Programming Language and Techniques IV",
          "Human Resources Administration",
          "Connectivity",
          "Algorithm Analysis",
          "Operating Systems and Basic Software",
          "Introduction to Administration",
          "Fundamentals of Physics",
          "Human-Machine Interface",
          "Theoretical Foundations of Computing",
          "Telecommunications",
          "Analysis and Systems Design",
          "Software Engineering I",
          "Database I",
          "Compilers",
          "Computer Graphics",
          "Software Engineering II",
          "Law Applied to Informatics",
          "Database II",
          "Numerical Calculus",
          "Information Systems Administration",
          "Information Technology Project Management",
          "Security in Computer Networks",
          "Final Course Work",
          "Artificial Intelligence",
          "Web Development",
          "Development of Distributed Systems",
        ]}
      />
    </>
  );
}
