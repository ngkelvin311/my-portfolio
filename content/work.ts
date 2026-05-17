export type WorkEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
};

export const work: WorkEntry[] = [
  {
    role: "Senior Product Designer",
    company: "Fitness Passport",
    period: "2025 - Present",
    description:
      "Leading product design for the employer experience at Fitness Passport, working across teams and stakeholders from small businesses to large corporates. I own the design system end to end, from zero to adoption across design and engineering. Beyond the system, I mentor junior designers and ship measurable work: a redesigned onboarding flow that improved conversion by 10% and reduced legal risk, a rebuilt map built for scale and mobile, and an internal tool that cut operational costs by over $20k a year.",
      link: "/work/fitness-passport",
  },
  {
    role: "UX Designer",
    company: "reecetech",
    period: "2021 - 2024",
    description:
      "Led UX across the Finding Products and Ordering Products teams at Reece, helping customers find what they need from a catalogue of over 300,000 products. Worked across research, design operations, and education, running governance practices, facilitating stakeholder workshops, and delivering UX programs for both staff and placement students.Shipped across the full maX platform: a data-driven substitutions solution for discontinued products, a visual overhaul of the maX web and mobile experience, and a product information management system built with cross-functional teams. Hackathon 2023 winner, People's Choice 1st and 2nd place.",
    link: "/work/reecetech",
},
  {
    role: "Architectural Assistant",
    company: "Denton Corker Marshall",
    period: "2019 - 2021",
    description:
      "At DCM I worked across large scale infrastructure, education, and architectural competition projects in China. My most significant contribution was as part of the team that delivered the bid for North East Link, Victoria's largest infrastructure project, where I held ownership of the structural, noise wall, and buildings packages end to end. Alongside delivery I managed documentation control, produced presentations, and developed standard drawing packages across plans, sections, elevations, and details for multiple concurrent projects.",
      link: "/work/dcm",
  },
 {
    role: "Photographer",
    company: "Freelance",
    period: "2016 - Present",
    description:
      "",
      link: "/work/dcm",
  },
];

export type EducationEntry = {
  institution: string;
  period: string;
  qualification: string;
};

export const education: EducationEntry[] = [
  {
    institution: "General Assembly",
    period: "2021",
    qualification: "UX Design Immersive",
  },
  {
    institution: "The University of Melbourne",
    period: "2016 - 2019",
    qualification: "Bachelors of Environments (Architecture)",
  },
];
