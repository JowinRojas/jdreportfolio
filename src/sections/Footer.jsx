// src/components/Footer.jsx
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className=" flex justify-center items-center py-6 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-deep-navy transition-colors duration-300">
      {/* Copyright */}
      <p className="text-xs text-slate-400 dark:text-slate-500">
        © {year} Jowin Rojas · {t("footer.madeWith")}
      </p>
    </footer>
  );
};

export default Footer;
