import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Download, Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import timelineData from "../data/timeline.json";

const formatDate = (dateStr, present) => {
  if (!dateStr) return present;
  const d = new Date(dateStr);
  return `${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;
};

// ── Card ──────────────────────────────────────────────────────────
const TimelineCard = ({ event, index, present, t }) => {
  const [expanded, setExpanded] = useState(false);
  const isWork  = event.type === "work";
  const isLeft  = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex items-start gap-0 w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Card */}
      <div className={`w-[calc(50%-28px)] ${isLeft ? "pr-6 text-right" : "pl-6 text-left"}`}>
        <motion.div
          layout
          onClick={() => setExpanded(!expanded)}
          className={`rounded-xl border p-4 cursor-pointer transition-all duration-300 bg-white dark:bg-slate-900
            hover:shadow-lg hover:-translate-y-0.5
            ${isWork
              ? "border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/10"
              : "border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10"
            }`}
        >
          {/* Tipo */}
          <div className={`flex items-center gap-1.5 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
            {isWork
              ? <Briefcase size={11} className="text-blue-400 shrink-0" />
              : <GraduationCap size={11} className="text-emerald-400 shrink-0" />
            }
            <span className={`text-[10px] font-bold uppercase tracking-wider
              ${isWork ? "text-blue-400" : "text-emerald-400"}`}>
              {isWork ? t("experience.work") : t("experience.education")}
            </span>
          </div>

          {/* Título */}
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight mb-1">
            {event.title}
          </p>

          {/* Entidad */}
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
            {event.entity}
          </p>

          {/* Fechas */}
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            {formatDate(event.startDate, present)} — {formatDate(event.endDate, present)}
          </p>

          {/* Descripción expandible */}
          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3 pt-3 border-t
                  ${isWork ? "border-blue-500/20" : "border-emerald-500/20"}`}
              >
                {event.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Chevron */}
          <div className={`flex mt-2 ${isLeft ? "justify-end" : "justify-start"}`}>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={14} className="text-slate-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dot central */}
      <div className="relative flex flex-col items-center" style={{ width: 56 }}>
        {/* Línea superior */}
        {index !== 0 && (
          <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mb-1" style={{ minHeight: 16 }} />
        )}

        {/* Dot */}
        <div className={`w-4 h-4 rounded-full border-2 z-10 shrink-0
          ${isWork
            ? "bg-blue-500 border-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            : "bg-emerald-500 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          }`}
        />

        {/* Línea inferior */}
        <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-1" style={{ minHeight: 16 }} />
      </div>

      {/* Espacio vacío lado opuesto */}
      <div className="w-[calc(50%-28px)]" />
    </motion.div>
  );
};

// ── Componente principal ──────────────────────────────────────────
const Experience = () => {
  const { t } = useTranslation();
  const present = t("experience.present");

  return (
    <section id="experience" className="relative py-24 px-6 bg-slate-50 dark:bg-[#080f1a] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">
            {t("experience.label")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("experience.title")}
          </h2>
        </motion.div>

        {/* Leyenda */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            {t("experience.work")}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            {t("experience.education")}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {timelineData.timeline.map((event, index) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={index}
              present={present}
              t = {t}
            />
          ))}
        </div>

      </div>

      {/* Botón flotante descarga CV */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
       <a 
          href="/cv_es_jowin_rojas_15.pdf"
          download
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
        >
          <Download size={16} />
          {t("experience.download")}
        </a>
      </motion.div>

    </section>
  );
};

export default Experience;