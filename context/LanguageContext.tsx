"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { pageTranslations } from "../translations/page"
import { aboutTranslations } from "../translations/about"
import { projectsTranslations } from "../translations/projects"
import { contactTranslations } from "../translations/contact"
import { navbarTranslations } from "../translations/navbar"
import { footerTranslations } from "@/translations/footer"
import { skillsTranslations } from "@/translations/skills"

type Language = "es" | "en"
type Section = "navbar" | "page" | "about" | "projects" | "skills" | "contact" | "footer"

type TranslationValue = string | Record<string, string>

interface TranslationContent {
  [key: string]: TranslationValue
}

interface SectionTranslations {
  es: TranslationContent
  en: TranslationContent
}

interface Translations {
  navbar: SectionTranslations
  page: SectionTranslations
  about: SectionTranslations
  projects: SectionTranslations
  skills: SectionTranslations
  contact: SectionTranslations
  footer: SectionTranslations
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  // 👇 Cambia el tipo de retorno de string → TranslationValue
  t: (section: Section, key: string) => TranslationValue
}

const translations: Translations = {
  navbar: navbarTranslations,
  page: pageTranslations,
  about: aboutTranslations,
  projects: projectsTranslations,
  skills: skillsTranslations,
  contact: contactTranslations,
  footer: footerTranslations,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language
    if (savedLang) setLanguage(savedLang)
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "es" ? "en" : "es"
      localStorage.setItem("lang", next)
      return next
    })
  }

  // 👇 ahora t() puede devolver string o Record<string, string>
  const t = (section: Section, key: string): TranslationValue =>
    translations[section]?.[language]?.[key] ?? key

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  return context
}
