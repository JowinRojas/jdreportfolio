"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["about", "projects", "skills", "resume", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 shadow-lg px-6 md:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide text-white">
        Jowin D <span className="text-blue-400">Rojas E</span>
      </div>

      {/* Links - Desktop */}
      <div className="hidden md:flex gap-8 items-center">
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth
            duration={500}
            offset={-80}
            className="relative cursor-pointer hover:text-blue-400 transition group"
          >
            {t("navbar", section) as string}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </ScrollLink>
        ))}

        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 rounded-md transition text-white"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>

      {/* Botón hamburguesa - Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-gray-200 hover:text-white transition"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 flex flex-col items-center py-6 gap-6 md:hidden animate-fadeIn">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="text-lg cursor-pointer hover:text-blue-400 transition"
            >
              {t("navbar", section) as string}
            </ScrollLink>
          ))}

          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 rounded-md transition text-white"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      )}
    </nav>
  );
}
