import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import skillsData from "../data/skills.json";
import { TECH_ICONS } from "../components/Icons";

const AURA = {
  bronze:   "shadow-[0_0_10px_2px_rgba(205,127,50,0.1)]  border-[#cd7f32]/50",
  silver:   "shadow-[0_0_10px_2px_rgba(100,180,255,0.3)] border-blue-400/40",
  gold:     "shadow-[0_0_10px_2px_rgba(245,158,11,0.5)]  border-amber-400/50",
  platinum: "shadow-[0_0_12px_3px_rgba(167,139,250,0.7)] border-violet-400/50",
};

const AURA_LABEL = {
  bronze:   { es: "Básico",      en: "Basic"    },
  silver:   { es: "Intermedio",  en: "Mid"      },
  gold:     { es: "Avanzado",    en: "Advanced" },
  platinum: { es: "Experto",     en: "Expert"   },
};

const AURA_BARS = {
  bronze:   { count: 1, color: "bg-[#cd7f32]" },
  silver:   { count: 2, color: "bg-blue-400"  },
  gold:     { count: 3, color: "bg-amber-400" },
  platinum: { count: 4, color: "bg-violet-400" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SkillCard = ({ skill, lang }) => {
  const Icon = TECH_ICONS[skill.icon];
  const label = AURA_LABEL[skill.level][lang] ?? AURA_LABEL[skill.level].es;
  const { count, color } = AURA_BARS[skill.level];

  return (
    <motion.div
      variants={cardVariants}
      title={label}
      className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${AURA[skill.level]} transition-all duration-300 hover:scale-105 cursor-default`}
    >
      {/* Icono */}
      <span className="text-xl flex items-center">
        {Icon ? <Icon /> : null}
      </span>

      {/* Nombre */}
      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight flex-1">
        {skill.name}
      </span>

      {/* Franjas de nivel */}
      <div className="flex items-center gap-0.75">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`w-0.75 h-4 rounded-full transition-all ${i < count ? color : "bg-slate-200 dark:bg-slate-700"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-50 dark:bg-[#080f1a] transition-colors duration-500">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">
            {t("skills.label")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("skills.title")}
          </h2>
        </motion.div>

        {/* Leyenda */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(AURA_LABEL).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <span className={`w-2 h-2 rounded-full ${AURA_BARS[key].color}`} />
              {val[lang]}
            </div>
          ))}
        </motion.div>

        {/* 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.categories.map((category, catIndex) => (
            <div key={category.id}>
              {/* Título categoría */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="flex items-center gap-2 mb-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {t(`skills.categories.${category.id}`) || category.label}
                </h3>
                <span className="text-xs text-slate-400 dark:text-slate-600">
                  ({category.skills.length})
                </span>
              </motion.div>

              {/* Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col gap-2"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} lang={lang} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;