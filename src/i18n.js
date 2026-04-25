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
            "Full Stack Developer with 3+ years of experience building web apps with React and Node.js, mobile apps with React Native, and backend services with Express and MongoDB. Focused on clean code, scalable architecture and good practices.",
          cta: "View projects",
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
        contact: {
          label: "Get in touch",
          title: "Contact",
          subtitle:
            "Have a project in mind or want to work together? Send me a message.",
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          message: "Message",
          messagePlaceholder: "Tell me about your project...",
          send: "Send message",
          sent: "Opening mail client...",
          linksText:
            "You can also find me on these platforms. I usually respond within 24 hours.",
          mailSubject: "Portfolio contact from",
          mailFrom: "From:",
        },
        footer: { madeWith: "Built with React & Tailwind" },
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
            "Desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web con React y Node.js, apps móviles con React Native y servicios backend con Express y MongoDB. Enfocado en código limpio, arquitectura escalable y buenas prácticas.",
          cta: "Ver proyectos",
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
        contact: {
          label: "Hablemos",
          title: "Contacto",
          subtitle:
            "¿Tienes un proyecto en mente o quieres trabajar juntos? Envíame un mensaje.",
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Correo",
          emailPlaceholder: "tu@correo.com",
          message: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto...",
          send: "Enviar mensaje",
          sent: "Abriendo cliente de correo...",
          linksText:
            "También puedes encontrarme en estas plataformas. Normalmente respondo en menos de 24 horas.",
          mailSubject: "Contacto portfolio de",
          mailFrom: "De:",
        },
        footer: { madeWith: "Hecho con React & Tailwind" },
      },
    },
  },
});

export default i18n;
