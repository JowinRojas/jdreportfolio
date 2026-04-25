import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import projectsData from "../data/projects.json";
import { TECH_ICONS, ICONS } from "../components/Icons";
import { ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 bg-white dark:bg-deep-navy transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">
            {t("projects.label")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("projects.title")}
          </h2>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectsData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Preview: imagen normal, video al hover */}
              <div className="overflow-hidden h-44 bg-slate-200 dark:bg-slate-800 relative">
                {/* Imagen siempre visible */}
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    project.video
                      ? "group-hover:opacity-0"
                      : "group-hover:scale-105"
                  }`}
                />

                {/* Video — solo si existe, aparece al hover */}
                {project.video && (
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                )}
              </div>
              {/* Contenido */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags con iconos */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const Icon = TECH_ICONS[tag];
                    return (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {Icon && <Icon />}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                    >
                      <ICONS.Github /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
