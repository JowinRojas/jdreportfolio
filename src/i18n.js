import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: false,
  lng: "es", // Idioma por defecto
  fallbackLng: "es", // Idioma por defecto si no detecta otro
  interpolation: {
    escapeValue: false, // caracteres especiales no necesitan ser escapados en React
  },
  resources: {
    en: {
      translation: {
        nav: {
          projects: "Projects",
          skills: "Skills",
          aboutme: "About",
          experience: "Experience",
          contact: "Contact",
        },
        hero: {
          greeting: "Hi, my name is",
          subtitle: "I build robust software solutions.",
          description:
            "Developer focused on the .NET and React ecosystem. Specialized in creating scalable apps with clean design.",
          cta: "View my projects",
        },
        projects: {
          label: "Projects",
          title: "My Featured Projects",
        },
        skills: {
          label: "Skills",
          title: "My Skills",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools",
          },
        },
        aboutme: {
          label: "Who I am",
          title: "About Me",
          role: "Full Stack Developer",
          description:
            "Full Stack Developer with 3 years of experience in web development with JavaScript and React, mobile apps with React Native (Expo), and backend development with Node.js, Express, and MongoDB. Experienced in state management with Redux, REST API integration, and scalable architecture design. Focused on clean code, performance, and best practices.",
          languages: "Languages",
        },
        experience: {
          label: "My path",
          title: "Experience",
          work: "Work",
          education: "Education",
          present: "Present",
          hint: "Hover to explore · Drag to scroll",
          download: "Download CV",
        },
      },
    },
    es: {
      translation: {
        nav: {
          projects: "Proyectos",
          skills: "Habilidades",
          aboutme: "Sobre mí",
          contact: "Contacto",
          experience: "Experiencia",
        },
        hero: {
          greeting: "Hola, mi nombre es",
          subtitle: "Construyo soluciones de software robustas.",
          description:
            "Desarrollador enfocado en el ecosistema .NET y React. Especializado en crear aplicaciones escalables con diseño limpio.",
          cta: "Ver mis proyectos",
        },
        projects: {
          label: "Proyectos",
          title: "Mis Proyectos Destacados",
        },
        skills: {
          label: "Habilidades",
          title: "Mis Habilidades",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas",
          },
        },
        aboutme: {
          label: "Quién soy",
          title: "Sobre mí",
          role: "Desarrollador Full Stack",
          description:
            "Desarrollador Full Stack con 3 años de experiencia en desarrollo web con JavaScript y React, aplicaciones móviles con React Native (Expo) y desarrollo backend con Node.js, Express y MongoDB. Experiencia en gestión de estado con Redux, integración de APIs REST y diseño de arquitecturas escalables. Enfocado en código limpio, rendimiento y buenas prácticas.",
          languages: "Idiomas",
        },
        experience: {
          label: "Mi trayecto",
          title: "Experiencia",
          work: "Trabajo",
          education: "Educación",
          present: "Presente",
          hint: "Hover para explorar · Arrastra para navegar",
          download: "Descargar CV",
        },
      },
    },
  },
});

export default i18n;
