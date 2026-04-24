import { useTranslation } from "react-i18next";
import { useDarkMode } from "../hooks/useDarkMode";
import { ICONS } from "./Icons";
import { useState } from "react";
import { smoothScroll } from "../utils/smoothScroll";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Hook de i18n para cambiar el idioma
  const [theme, toggleTheme] = useDarkMode(); // Hook personalizado para manejar el tema
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.skills"), id: "skills" },
    { name: t("nav.aboutme"), id: "aboutme" },
    { name: t("nav.experience"), id: "experience" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white/70 dark:bg-deep-navy backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        {/* Lado Izquierdo: Logo */}
        <div className="flex items-center">
          <div className="text-slate-900 dark:text-slate-100 font-bold text-xl tracking-tighter uppercase">
            JOWIN<span className="text-blue-500">.DRE</span>
          </div>
        </div>

        {/* Desktop Menu - Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => smoothScroll(e, link.id)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Lado Derecho: Controles & Hamburguesa */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Selector de idioma (Oculto en móviles muy pequeños para ahorrar espacio) */}
          <div className="hidden sm:flex items-center gap-2 border-r border-slate-300 dark:border-slate-700 pr-4">
            <div className="flex gap-1">
              {["es", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all ${
                    i18n.language === lng
                      ? "bg-blue-500 text-white"
                      : "text-slate-500 hover:text-blue-400"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Botón de Tema */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex p-1.5 transition-transform hover:scale-110 active:scale-95 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <ICONS.Sun /> : <ICONS.Moon />}
          </button>

          {/* Botón Hamburguesa (Solo Móvil) */}
          <button
            className="md:hidden p-1.5 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ICONS.X /> : <ICONS.Menu />}
          </button>

          {/* Icono GitHub (Desktop) */}
          <a
            href="https://github.com/JowinRojas"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block"
          >
            <ICONS.Github />
          </a>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-deep-navy border-b border-slate-200 dark:border-slate-800 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-4 gap-4">
          {/* Links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => smoothScroll(e, link.id)}
              className="text-left text-lg font-medium text-slate-600 dark:text-slate-300"
            >
              {link.name}
            </button>
          ))}

          {/* Separador */}
          <div className="border-t border-slate-200 dark:border-slate-700" />

          {/* Controles en fila */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {["es", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all ${
                    i18n.language === lng
                      ? "bg-blue-500 text-white"
                      : "text-slate-500 hover:text-blue-400"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-transform hover:scale-110 active:scale-95"
            >
              {theme === "dark" ? <ICONS.Sun /> : <ICONS.Moon />}
            </button>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/JowinRojas"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
          >
            <ICONS.Github /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
