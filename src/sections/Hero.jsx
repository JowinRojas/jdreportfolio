import { motion } from "framer-motion";

const Hero = () => {
  // Variantes para animar los elementos uno tras otro
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Tiempo entre cada elemento
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Efecto de luz de fondo sutil */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        <motion.p 
          variants={itemVariants}
          className="text-blue-400 font-mono mb-2 tracking-widest uppercase text-sm"
        >
          Hola, mi nombre es
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
        >
          [Jowin Daniel Rojas Espinosa]
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold text-slate-400 mb-6"
        >
          Construyo soluciones de software robustas.
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl mx-auto text-slate-500 text-lg mb-10"
        >
          Desarrollador enfocado en el ecosistema **.NET** y **React**. 
          Me especializo en crear aplicaciones escalables con un diseño limpio y funcional.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a 
            href="#projects"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors rounded-md font-medium"
          >
            Mira mis proyectos
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;