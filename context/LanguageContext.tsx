"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { pageTranslations } from "../translations/page"
import { navbarTranslations } from "../translations/navbar"
import { aboutTranslations } from "../translations/about"
import { projectsTranslations } from "../translations/projects"
import { skillsTranslations } from "@/translations/skills"
import { resumeTranslations } from "@/translations/resume"
import { contactTranslations } from "../translations/contact"
import { footerTranslations } from "@/translations/footer"

type Language = "es" | "en"
type Section = "navbar" | "page" | "about" | "projects" | "skills" | "resume" | "contact" | "footer"

type TranslationValue = string | Record<string, string | Record<string, string>>

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
  resume: SectionTranslations
  contact: SectionTranslations
  footer: SectionTranslations
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (section: Section, key: string) => TranslationValue
}

const translations: Translations = {
  navbar: navbarTranslations,
  page: pageTranslations,
  about: aboutTranslations,
  projects: projectsTranslations,
  skills: skillsTranslations,
  resume: resumeTranslations,
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
