"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Link as ScrollLink } from "react-scroll";
import { icons } from "@/utils/icons"; // ✅ usa tus propios íconos

export function FooterSection() {
  const { t } = useLanguage();
  const year = new Date().getFullYear(); // año dinámico

  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-10 border-t border-gray-800 flex flex-col items-center gap-4">
      {/* 🔗 Redes sociales */}
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/JowinRojas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          {icons.github}
        </a>
        <a
          href="https://www.linkedin.com/in/jowinrojas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          {icons.linkedin}
        </a>
        <a
          href="mailto:jowinx-001@hotmail.com"
          className="hover:text-white transition-colors"
        >
          {icons.email}
        </a>
      </div>

      {/* 🧠 Textos traducidos */}
      <div className="space-y-1">
        <p className="text-sm">{t("footer", "madeWith") as string}</p>
        <p className="text-xs text-gray-500">
          © {year} Jowin Rojas. {t("footer", "rights") as string}
        </p>
      </div>

      {/* ⬆️ Volver arriba */}
      <ScrollLink
        to="top"
        smooth={true}
        duration={500}
        className="mt-2 text-sm text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
      >
        {t("footer", "backToTop") as string}
      </ScrollLink>
    </footer>
  );
}
