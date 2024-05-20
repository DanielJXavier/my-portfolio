export interface EducationInterface {
  schoolId: string;
  schoolName: string;
  fieldOfStudy: string;
  degree: string;
  years: string;
  subjects: string[];
}

export const education: EducationInterface[] = [
  {
    schoolId: "estacio",
    schoolName: "Estácio",
    fieldOfStudy: "Strategic People Management",
    degree: "Master of Business Administration - MBA",
    years: "2020~2021",
    subjects: [
      "Coaching and Leadership",
      "Communication in Organizations",
      "Conflict Management and Negotiation",
      "Corporative Education",
      "Creativity and Organizational Innovation",
      "Finance Principles",
      "Knowledge Management",
      "Strategic Vision in People Management",
      "Theory of Organizational Development",
    ],
  },
  {
    schoolId: "fumec",
    schoolName: "Universidade FUMEC",
    fieldOfStudy: "Computer Science",
    degree: "Bachelor",
    years: "2010~2014",
    subjects: [
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
    ],
  },
];
