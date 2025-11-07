"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-gray-950 text-gray-200 px-6 py-20 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t("contact", "title") as string}
      </h2>
      <p className="text-gray-400 mb-2 text-lg">
        {t("contact", "subtitle") as string}
      </p>
      <p className="max-w-2xl text-gray-500 mb-10">
        {t("contact", "description") as string}
      </p>

      <form className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder={t("contact", "namePlaceholder") as string}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder={t("contact", "emailPlaceholder") as string}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        />
        <textarea
          rows={5}
          placeholder={t("contact", "messagePlaceholder") as string}
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:border-gray-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg font-medium text-white"
        >
          {t("contact", "button") as string}
        </button>
      </form>
    </section>
  );
}
