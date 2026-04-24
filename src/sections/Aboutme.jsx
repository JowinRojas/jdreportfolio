import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MapPin, Languages } from "lucide-react";

const languages = [
  { name: "Español", level: { es: "Nativo", en: "Native" }, percent: 100 },
  { name: "English", level: { es: "Intermedio", en: "Intermediate" }, percent: 55 },
];

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <section id="aboutme" className="relative py-24 px-6 bg-slate-50 dark:bg-[#080f1a] transition-colors duration-500">
      <div className="max-w-3xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">
            {t("aboutme.label")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("aboutme.title")}
          </h2>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col gap-8"
        >
          {/* Encabezado */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Jowin Rojas
            </h3>
            <p className="text-blue-500 font-medium text-sm">
              {t("aboutme.role")}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
              <MapPin size={12} />
              Medellín, Colombia
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-slate-100 dark:border-slate-800" />

          {/* Descripción */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            {t("aboutme.description")}
          </p>

          {/* Separador */}
          <div className="border-t border-slate-100 dark:border-slate-800" />

          {/* Idiomas */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Languages size={13} />
              {t("aboutme.languages")}
            </div>
            <div className="flex flex-col gap-3">
              {languages.map((lng) => (
                <div key={lng.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {lng.name}
                    </span>
                    <span className="text-slate-400">
                      {lng.level[lang]}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lng.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;