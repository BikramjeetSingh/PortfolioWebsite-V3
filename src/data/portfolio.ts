export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Uptime Monitor",
    description:
      "A scalable, configurable cloud-based monitoring solution with automated workflows and infrastructure managed as code.",
    technologies: ["Python", "Terraform", "AWS"],
    codeUrl: "https://github.com/BikramjeetSingh/UptimeMonitor",
  },
];
