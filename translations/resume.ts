export const resumeTranslations = {
  es: {
    title: "Trayectoria profesional",
    download: "Descargar hoja de vida",
  },
  en: {
    title: "Professional Journey",
    download: "Download Resume",
  },
};

export type ResumeLang = keyof typeof resumeTranslations;
export type ResumeTranslation = (typeof resumeTranslations)[ResumeLang];
