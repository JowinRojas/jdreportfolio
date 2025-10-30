export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  tags: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: {
      es: "Portafolio",
      en: "Portfolio",
    },
    description: {
      es: "Mi portafolio personal hecho con Next.js, TailwindCSS y TypeScript, totalmente responsivo y con soporte para varios idiomas.",
      en: "My personal portfolio built with Next.js, TailwindCSS, and TypeScript — fully responsive and multilingual.",
    },
    image: "/images/portfolio.jpg",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://jdreportfolio.vercel.app",
  },
  {
    id: "2",
    title: {
      es: "AppNago",
      en: "AppNago",
    },
    description: {
      es: "Aplicación móvil construida con React Native y Expo, que permite gestionar inventario, propiedades y usuarios.",
      en: "Mobile app built with React Native and Expo, allowing inventory, property, and user management.",
    },
    image: "/images/appnago.jpg",
    tags: ["React Native", "Expo", "Redux"],
  },
];
