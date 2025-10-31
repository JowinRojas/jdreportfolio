"use client";

import { useLanguage } from "@/context/LanguageContext";
import { icons } from "@/utils/icons";

export function CurriculumSection() {
  const { language, t } = useLanguage();

  // 🧠 Selecciona el archivo correcto según el idioma
  const cvPath =
    language === "en"
      ? "/cv/cv_en_jowin_rojas.pdf"
      : "/cv/cv_es_jowin_rojas.pdf";

  // 🧩 Forzamos los valores a string para evitar error de tipo
  const title = t("resume", "title") as string;
  const experience = t("resume", "experience") as string;
  const education = t("resume", "education") as string;
  const downloadLabel = t("resume", "download") as string;

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200"
    >
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">
        {title}
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{experience}</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Frontend Developer</strong> – Empresa X (2022–Presente)
            </li>
            <li>
              <strong>Diseñador Web</strong> – Freelance (2020–2022)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">{education}</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Ingeniería de Software</strong> – Universidad Y
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href={cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition"
        >
          {icons.download}
          {downloadLabel}
        </a>
      </div>
    </section>
  );
}
