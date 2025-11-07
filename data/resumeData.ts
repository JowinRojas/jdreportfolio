// data/resumeData.ts
export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  title: { en: string; es: string };
  organization: { en: string; es: string };
  description: { en: string; es: string };
  startDate: string; // formato YYYY-MM-DD
  endDate: string | "present";
}

export const resumeData: TimelineItem[] = [
  {
    id: "frontend-developer",
    type: "experience",
    title: {
      en: "Frontend Developer",
      es: "Desarrollador Frontend",
    },
    organization: {
      en: "Company X",
      es: "Empresa X",
    },
    description: {
      en: "Development of web interfaces using React, Next.js and TailwindCSS.",
      es: "Desarrollo de interfaces web usando React, Next.js y TailwindCSS.",
    },
    startDate: "2022-01-01",
    endDate: "present",
  },
  {
    id: "web-designer",
    type: "experience",
    title: {
      en: "Web Designer",
      es: "Diseñador Web",
    },
    organization: {
      en: "Freelance",
      es: "Freelance",
    },
    description: {
      en: "Freelance projects focused on UX/UI design and website development.",
      es: "Proyectos freelance enfocados en diseño UX/UI y desarrollo web.",
    },
    startDate: "2020-03-01",
    endDate: "2021-12-31",
  },
  {
    id: "software-engineering",
    type: "education",
    title: {
      en: "Software Engineering",
      es: "Ingeniería de Software",
    },
    organization: {
      en: "University Y",
      es: "Universidad Y",
    },
    description: {
      en: "Bachelor's degree focused on software architecture and agile methodologies.",
      es: "Título en ingeniería de software con enfoque en arquitectura y metodologías ágiles.",
    },
    startDate: "2018-01-01",
    endDate: "2023-06-01",
  },
];
