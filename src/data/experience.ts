export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2022-Present",
    title: "Web Application Developer",
    company: "Celayix",
    companyUrl: "https://www.celayix.com",
    description: "Led the design and development of multiple core platform features, improving system security, user experience, performance, and operational visibility across the application.",
  },
  {
    date: "Apr 2021-Sep 2021",
    title: "Senior Software Engineer",
    company: "HomeLane",
    companyUrl: "https://www.homelane.com",
    description: "Modernized legacy systems and improved overall application performance through backend architecture enhancements and database optimization."
  },
  {
    date: "Jan 2019-Mar 2021",
    title: "Software Engineer",
    company: "Instamojo",
    companyUrl: "https://www.instamojo.com",
    description: "Built and maintained scalable backend services while improving system efficiency and reliability through performance optimizations."
  },
];
