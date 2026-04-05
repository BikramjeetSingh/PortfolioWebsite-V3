export interface AboutMe {
  name: string;
  title: string;
  institution?: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Bikramjeet Singh",
  title: "Software Engineer",
  // Note that links work in the description
  description:
    "I'm a <strong>Web Developer</strong>, <strong>Software</strong> & <strong>Cloud Engineer</strong> based in <strong>Vancouver</strong> with 4+ years of experience building performant, scalable web applications using modern technology stacks.",
  email: "singhbikramjeet@outlook.com",
  imageUrl:
    "/bikramjeet.jpeg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "BikramjeetSingh",
  linkedinUsername: "singh-bikramjeet",
  twitterUsername: "bikramjtsingh",
  blogUrl: "https://dev.to/bikramjeetsingh",
  cvUrl: "https://drive.google.com/file/d/144G2L5H2TkTFQUWbiH1pz5LHhh9cvbs2/view?usp=sharing",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
