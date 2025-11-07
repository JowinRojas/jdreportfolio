"use client";

import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section
      id="projects"
      className="bg-gray-900 text-gray-200 px-6 py-20 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        {t("projects", "title") as string}
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-gray-700 transition"
          >
            <Image
              src={project.image}
              alt={project.title[language]}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title[language]}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  {t("projects", "viewProject") as string}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
