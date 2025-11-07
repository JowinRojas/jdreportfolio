"use client";

import { useLanguage } from "@/context/LanguageContext";
import { icons } from "@/utils/icons";
import { resumeData } from "@/data/resumeData";
import { useEffect, useRef } from "react";

export function ResumeSection() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cvPath =
    language === "en"
      ? "/cv/cv_en_jowin_rojas.pdf"
      : "/cv/cv_es_jowin_rojas.pdf";

  const title = t("resume", "title") as string;
  const downloadLabel = t("resume", "download") as string;

  const startYear = 1995;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - startYear + 1;
  const years = Array.from({ length: totalYears }, (_, i) => startYear + i);

  const sortedData = [...resumeData].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  // 🎨 Configuración visual
  const yearSpacing = 130;
  const horizontalPadding = 250;
  const sectionHeight = 480;

  // 🧠 Scroll horizontal solo cuando el mouse está sobre el timeline
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isHovering = false;

    const handleMouseEnter = () => (isHovering = true);
    const handleMouseLeave = () => (isHovering = false);

    const handleWheel = (e: WheelEvent) => {
      if (!isHovering) return; // Solo si el mouse está encima

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      // Solo hacer scroll horizontal si hay más contenido
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        scrollContainer.scrollTo({
          left: scrollLeft + e.deltaY * 0.8,
          behavior: "smooth",
        });
      }
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="bg-linear-to-b from-gray-950 to-gray-900 text-gray-200 py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* 🔹 Título */}
        <h2 className="text-3xl font-semibold text-center mb-16 text-white">
          {title}
        </h2>

        {/* 🔹 Scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden rounded-xl custom-scrollbar"
        >
          <div
            className="relative flex items-center"
            style={{
              height: `${sectionHeight}px`,
              minWidth: `${totalYears * yearSpacing + horizontalPadding * 2}px`,
              paddingLeft: `${horizontalPadding}px`,
              paddingRight: `${horizontalPadding}px`,
            }}
          >
            {/* Línea central */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" />

            {/* Marcas de año */}
            {years.map((year, index) => (
              <div
                key={year}
                className="absolute text-gray-500 text-[11px]"
                style={{
                  left: `${index * yearSpacing + horizontalPadding}px`,
                  top: "52%",
                  transform: "translateX(-50%)",
                }}
              >
                {year}
              </div>
            ))}

            {/* 🔹 Eventos */}
            {sortedData.map((item, index) => {
              const year = new Date(item.startDate).getFullYear();
              const yearOffset =
                (year - startYear) * yearSpacing + horizontalPadding;
              const top = index % 2 === 0; // alternar arriba/abajo

              return (
                <div
                  key={item.id}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${yearOffset}px`,
                    top: top ? "43%" : "57%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {/* 🔹 Línea conectora */}
                  <div
                    className={`absolute w-0.5 bg-blue-500/40 ${
                      top
                        ? "h-[38px] translate-y-[0%]"
                        : "h-[38px] -translate-y-[20%]"
                    }`}
                  />

                  {/* 🔹 Card */}
                  <div
                    className={`absolute ${
                      top ? "-translate-y-full" : "translate-y-[20%]"
                    } bg-gray-800 p-4 rounded-2xl w-64 text-center shadow-md border border-gray-700`}
                  >
                    <h3 className="font-semibold text-white text-sm mb-0.5">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs text-gray-400 mb-0.5">
                      {item.organization[language]}
                    </p>
                    <p className="text-[11px] text-gray-500 mb-1">
                      {new Date(item.startDate).getFullYear()} –{" "}
                      {item.endDate === "present"
                        ? language === "en"
                          ? "Present"
                          : "Presente"
                        : new Date(item.endDate).getFullYear()}
                    </p>
                    <p className="text-xs text-gray-400 leading-snug">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔹 Botón */}
        <div className="text-center mt-14">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition"
          >
            {icons.download}
            {downloadLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
