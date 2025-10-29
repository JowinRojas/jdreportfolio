"use client"

import { useLanguage } from "@/context/LanguageContext"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="bg-gray-950 text-gray-200 px-6 py-20 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t("contact", "title")}
      </h2>
      <p className="text-gray-400 mb-2 text-lg">{t("contact", "subtitle")}</p>
      <p className="max-w-2xl text-gray-500 mb-10">
        {t("contact", "description")}
      </p>

      <form className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder={t("contact", "namePlaceholder")}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder={t("contact", "emailPlaceholder")}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        />
        <textarea
          rows={5}
          placeholder={t("contact", "messagePlaceholder")}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg font-medium text-white"
        >
          {t("contact", "button")}
        </button>
      </form>
    </section>
  )
}
