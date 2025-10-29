export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-950 text-gray-100 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contáctame
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        Si te interesa colaborar, tienes una idea en mente o simplemente quieres
        saludar, no dudes en escribirme. Estoy abierto a nuevas oportunidades y
        proyectos interesantes 🚀
      </p>

      <form
        action="https://formspree.io/f/mwkgrgzy"
        method="POST"
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-md"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-12 flex gap-6 text-gray-400">
        <a
          href="jowinx-001@hotmail.com"
          className="hover:text-blue-400 transition-colors"
        >
          📧 Email
        </a>
        <a
          href="https://github.com/JowinRojas"
          target="_blank"
          className="hover:text-blue-400 transition-colors"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jowinrojas/"
          target="_blank"
          className="hover:text-blue-400 transition-colors"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}
