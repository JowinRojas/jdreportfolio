"use client";
import { AboutSection } from "@/components/AboutSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { FooterSection } from "@/components/Footer"
import { useLanguage } from "@/context/LanguageContext"

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="top"
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-4">{t("page", "greeting")}</h2>
        <p className="text-gray-400 max-w-2xl">{t("page", "subtitle")}</p>
      </section>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
