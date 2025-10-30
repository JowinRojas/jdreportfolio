"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Link as ScrollLink } from "react-scroll"
import { Github, Linkedin, Mail } from "lucide-react"

export function FooterSection() {
  const { t } = useLanguage()

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
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/jowinrojas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:jowinx-001@hotmail.com"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* 🧠 Textos traducidos */}
      <div className="space-y-1">
        <p className="text-sm">{t("footer", "madeWith") as string}</p>
        <p className="text-xs text-gray-500">{t("footer", "rights") as string}</p>
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
  )
}
