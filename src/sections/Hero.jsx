import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { smoothScroll } from "../utils/smoothScroll";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-deep-navy">
      
      {/* Efectos de luz de fondo (solo visibles o más intensos en dark mode) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/20 blur-[120px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-600 dark:text-blue-400 font-mono mb-2 tracking-widest uppercase text-sm font-bold"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight"
        >
          Jowin Daniel Rojas<span className="text-blue-500">.</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold text-slate-600 dark:text-slate-400 mb-6"
        >
          {t("hero.subtitle")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed"
        >
          {/* Usamos trans: Components si quieres negritas, o simplemente el string */}
          {t("hero.description")}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, "projects")}
            className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 dark:bg-transparent dark:border dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500/10 transition-all rounded-md font-medium shadow-lg shadow-blue-500/20 dark:shadow-none"
          >
            {t("hero.cta")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;