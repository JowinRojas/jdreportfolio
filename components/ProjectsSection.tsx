type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "JDReportfolio",
    description:
      "Mi portafolio personal creado con Next.js, TailwindCSS y TypeScript. Diseño moderno, responsivo y optimizado para rendimiento.",
    image: "/images/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://jdreportfolio.vercel.app",
  },
  {
    title: "Inventario App",
    description:
      "Aplicación móvil con React Native y Redux para registrar y gestionar inventario con fotos, videos y sincronización local.",
    image: "/images/inventory.png",
    tech: ["React Native", "Redux", "Expo"],
    link: "#",
  },
  {
    title: "API REST con Express",
    description:
      "Backend con Node.js, Express y MongoDB para gestionar usuarios y autenticación JWT, con documentación Swagger.",
    image: "/images/api.png",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-900 text-gray-100 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Proyectos Destacados
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-700/30 transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-700 px-2 py-1 rounded-md text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                className="text-sm font-medium text-blue-400 hover:underline self-start"
              >
                Ver proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
