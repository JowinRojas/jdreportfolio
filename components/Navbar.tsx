"use client"

import { Link as ScrollLink } from "react-scroll"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">My Portfolio</div>
      <div className="flex gap-6">

        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-blue-500 transition"
        >
          {t("navbar", "about")}
        </ScrollLink>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-blue-500 transition"
        >
          {t("navbar", "projects")}
        </ScrollLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-blue-500 transition"
        >
          {t("navbar", "contact")}
        </ScrollLink>

        <button
          onClick={toggleLanguage}
          className="ml-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  )
}
