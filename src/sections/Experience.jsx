import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import timelineData from "../data/timeline.json";

// ── Constantes de layout ──────────────────────────────────────────
const YEAR_START  = 2000;
const YEAR_END    = new Date().getFullYear();
const YEAR_RANGE  = YEAR_END - YEAR_START;
const TRACK_PX    = 140;
const TRACK_WIDTH = YEAR_RANGE * TRACK_PX;
const LINE_Y      = 160;
const PADDING_X   = 100;
const SVG_WIDTH   = TRACK_WIDTH + PADDING_X * 2;
const SVG_HEIGHT  = 420;
const CARD_W      = 220;
const CARD_H      = 150;

// ── Helpers ───────────────────────────────────────────────────────
const dateToX = (dateStr) => {
  if (!dateStr) return PADDING_X + YEAR_RANGE * TRACK_PX;
  const d = new Date(dateStr);
  return PADDING_X + ((d.getFullYear() - YEAR_START) + d.getMonth() / 12) * TRACK_PX;
};

const formatDate = (dateStr, present) => {
  if (!dateStr) return present;
  const d = new Date(dateStr);
  return `${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;
};

// ── Card de evento ────────────────────────────────────────────────
const EventCard = ({ event, index, hoveredId, setHoveredId, present }) => {
  const isWork   = event.type === "work";
  const isAbove  = index % 2 === 0;
  const startX   = dateToX(event.startDate);
  const endX     = dateToX(event.endDate);
  const barW     = Math.max(endX - startX, 8);
  const isHovered = hoveredId === event.id;
  const isDimmed  = hoveredId !== null && !isHovered;

  const cardX    = startX - CARD_W / 2;
  const cardY    = isAbove ? LINE_Y - CARD_H - 36 : LINE_Y + 36;
  const lineY1   = isAbove ? LINE_Y - 10 : LINE_Y + 10;
  const lineY2   = isAbove ? cardY + CARD_H : cardY;

  return (
    <g
      onMouseEnter={() => setHoveredId(event.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{
        opacity: isDimmed ? 0.25 : 1,
        transition: "opacity 0.25s",
        cursor: "default",
      }}
    >
      {/* Barra de duración */}
      <rect
        x={startX}
        y={LINE_Y - 4}
        width={barW}
        height={8}
        rx={4}
        className={isWork ? "fill-blue-500/25" : "fill-emerald-500/25"}
      />

      {/* Línea vertical dot → card */}
      <line
        x1={startX} y1={lineY1}
        x2={startX} y2={lineY2}
        strokeWidth={1}
        strokeDasharray="4 3"
        className={isWork ? "stroke-blue-500/40" : "stroke-emerald-500/40"}
      />

      {/* Dot exterior */}
      <circle cx={startX} cy={LINE_Y} r={isHovered ? 12 : 9}
        className={isWork ? "fill-blue-500/20" : "fill-emerald-500/20"}
        style={{ transition: "r 0.2s" }}
      />
      {/* Dot interior */}
      <circle cx={startX} cy={LINE_Y} r={isHovered ? 7 : 5}
        className={isWork ? "fill-blue-500" : "fill-emerald-500"}
        style={{ transition: "r 0.2s" }}
      />

      {/* Card via foreignObject */}
      <foreignObject
        x={cardX}
        y={cardY}
        width={CARD_W}
        height={CARD_H}
        style={{
          overflow: "visible",
          zIndex: isHovered ? 10 : 1,
          transform: isHovered ? `scale(1.08)` : "scale(1)",
          transformOrigin: `${startX}px ${isAbove ? cardY + CARD_H : cardY}px`,
          transition: "transform 0.2s ease",
          filter: isHovered ? "drop-shadow(0 8px 24px rgba(0,0,0,0.25))" : "none",
        }}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={`w-full h-full rounded-xl border p-3 text-left bg-white dark:bg-slate-900
            ${isWork
              ? "border-blue-500/40 shadow-blue-500/10"
              : "border-emerald-500/40 shadow-emerald-500/10"}
            shadow-lg`}
        >
          {/* Tipo */}
          <div className="flex items-center gap-1.5 mb-1.5">
            {isWork
              ? <Briefcase size={11} className="text-blue-400 shrink-0" />
              : <GraduationCap size={11} className="text-emerald-400 shrink-0" />
            }
            <span className={`text-[9px] font-bold uppercase tracking-wider
              ${isWork ? "text-blue-400" : "text-emerald-400"}`}>
              {isWork ? "Work" : "Education"}
            </span>
          </div>

          {/* Título */}
          <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-tight mb-1">
            {event.title}
          </p>

          {/* Entidad */}
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1.5">
            {event.entity}
          </p>

          {/* Fechas */}
          <p className="text-[9px] text-slate-400 dark:text-slate-500">
            {formatDate(event.startDate, present)} — {formatDate(event.endDate, present)}
          </p>

          {/* Descripción — solo visible en hover */}
          {isHovered && (
            <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
              {event.description}
            </p>
          )}
        </div>
      </foreignObject>
    </g>
  );
};

// ── Componente principal ──────────────────────────────────────────
const Experience = () => {
  const { t } = useTranslation();
  const scrollRef  = useRef(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const scrollLeft = useRef(0);
  const [hoveredId, setHoveredId] = useState(null);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current     = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const present = t("experience.present");
  const years   = Array.from({ length: YEAR_RANGE + 1 }, (_, i) => YEAR_START + i);

  return (
    <section id="experience" className="relative py-24 px-6 bg-white dark:bg-deep-navy transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
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
          className="flex justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            {t("experience.work")}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            {t("experience.education")}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 italic">
            {t("experience.hint")}
          </div>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          {/* Fades laterales */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-white dark:from-deep-navy to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-white dark:from-deep-navy to-transparent" />

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden select-none cursor-grab"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <svg width={SVG_WIDTH} height={SVG_HEIGHT} className="block">

              {/* Línea principal */}
              <line
                x1={PADDING_X} y1={LINE_Y}
                x2={SVG_WIDTH - PADDING_X} y2={LINE_Y}
                strokeWidth={2}
                className="stroke-slate-200 dark:stroke-slate-700"
              />

              {/* Años */}
              {years.map((year) => {
                const x = PADDING_X + (year - YEAR_START) * TRACK_PX;
                return (
                  <g key={year}>
                    <line
                      x1={x} y1={LINE_Y - 6}
                      x2={x} y2={LINE_Y + 6}
                      strokeWidth={1}
                      className="stroke-slate-300 dark:stroke-slate-600"
                    />
                    <text
                      x={x} y={LINE_Y + 22}
                      textAnchor="middle"
                      fontSize={10}
                      className="fill-slate-400 dark:fill-slate-500 font-mono select-none"
                    >
                      {year}
                    </text>
                  </g>
                );
              })}

              {/* Eventos */}
              {timelineData.timeline.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  present={present}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Botón descarga CV */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <a
            href="/cv_es_jowin_rojas_15.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 transition-all text-sm font-medium"
            >
            <Download size={16} />
            {t("experience.download")}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;