"use client";

import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-950 text-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {t("about", "title") as string}
      </h2>

      <div className="max-w-3xl text-gray-400 leading-relaxed space-y-4">
        <p>{t("about", "title") as string}</p>
        <p>{t("about", "description") as string}</p>
      </div>

      <div className="mt-10">
        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-colors"
        >
          {t("about", "button") as string}
        </a>
      </div>
    </section>
  );
}
