"use client";

import { skillsData } from "@/data/skillsData";
import { useLanguage } from "@/context/LanguageContext";
import { Code, Server, Wrench } from "lucide-react";
import { ReactNode } from "react";

export function SkillsSection() {
  const { t } = useLanguage();

  const categories = t("skills", "categories") as Record<string, string>;
  const title = t("skills", "title") as string;

  const icons: Record<string, ReactNode> = {
    frontend: <Code className="text-blue-400 w-6 h-6" />,
    backend: <Server className="text-green-400 w-6 h-6" />,
    tools: <Wrench className="text-yellow-400 w-6 h-6" />,
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200 text-center"
    >
      <h2 className="text-3xl font-bold mb-12 text-white">{title}</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {skillsData.map((group) => (
          <div
            key={group.categoryKey}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-md"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {icons[group.categoryKey]}
              <h3 className="text-xl font-semibold text-blue-400">
                {categories[group.categoryKey]}
              </h3>
            </div>

            <ul className="space-y-2 text-gray-400">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="hover:text-blue-300 transition-colors"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
