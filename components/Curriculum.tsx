export function CurriculumSection() {
  return (
    <section id="resume" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Currículum</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Frontend Developer</strong> – Empresa X (2022–Presente)
            </li>
            <li>
              <strong>Diseñador Web</strong> – Freelance (2020–2022)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Educación</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Ingeniería de Software</strong> – Universidad Y
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/cv/cv_jowin_rojas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
