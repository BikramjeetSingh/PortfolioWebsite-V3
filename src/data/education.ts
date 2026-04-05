export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—2023",
    institution: "Simon Fraser University",
    degree: "Professional Masters in Computer Science",
  },
  {
    year: "2015—2019",
    institution: "Manipal Institute of Technology",
    degree: "BTech in Information Technology",
  },
];
