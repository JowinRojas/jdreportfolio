"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { pageTranslations } from "../translations/page"
import { aboutTranslations } from "../translations/about"
import { projectsTranslations } from "../translations/projects"
import { contactTranslations } from "../translations/contact"
import { navbarTranslations } from "../translations/navbar"
import { footerTranslations } from "@/translations/footer"

type Language = "es" | "en"
type Section = "navbar" | "page" | "about" | "projects" | "contact" | "footer"

interface TranslationContent {
  [key: string]: string
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
  contact: SectionTranslations
  footer: SectionTranslations
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (section: Section, key: string) => string
}

const translations: Translations = {
  navbar: navbarTranslations,
  page: pageTranslations,
  about: aboutTranslations,
  projects: projectsTranslations,
  contact: contactTranslations,
  footer: footerTranslations
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

  const t = (section: Section, key: string): string =>
    translations[section]?.[language]?.[key] || key

  // 👇 evita el hydration error
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
