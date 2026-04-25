import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ICONS } from "../components/Icons";
import { useState } from "react";

const LINKS = [
  {
    id: "email",
    label: "jowinx-001@hotmail.com",
    href: "mailto:jowinx-001@hotmail.com",
    icon: <ICONS.Mail size={18} />,
  },
  {
    id: "github",
    label: "github.com/JowinRojas",
    href: "https://github.com/JowinRojas",
    icon: <ICONS.Github />,
  },
  {
    id: "linkedin",
    label: "linkedin.com/in/jowinrojas",
    href: "https://www.linkedin.com/in/jowinrojas/",
    icon: <ICONS.Linkedin size={18} />,
  },
];

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`${t("contact.mailSubject")} ${form.name}`);
    const body    = encodeURIComponent(`${t("contact.mailFrom")} ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:jowinx-001@hotmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-white dark:bg-deep-navy transition-colors duration-500">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">
            {t("contact.label")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("contact.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-md mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Grid: Formulario + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Botón enviar */}
            <button
              onClick={handleSubmit}
              disabled={!form.name || !form.email || !form.message}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
            >
              {sent ? t("contact.sent") : (
                <>
                  <ICONS.Send size={15} />
                  {t("contact.send")}
                </>
              )}
            </button>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {t("contact.linksText")}
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-blue-500/50 hover:text-blue-500 transition-all group"
                >
                  <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;