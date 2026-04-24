import {
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiDjango,
  SiVite,
  SiFramer,
  SiJquery,
  SiNextdotjs,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiMongoose,
  SiXampp,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiExpo,
  SiGit,
  SiNginx,
  SiEslint,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Sun, Moon, Globe, X as XIcon, Menu as MenuIcon } from "lucide-react";

// --- ICONOS DE INTERFAZ ---
export const ICONS = {
  Menu: () => (
    <MenuIcon
      size={20}
      className="text-slate-600 dark:text-slate-300 hover:text-blue-400 transition-colors"
    />
  ),
  Sun: () => (
    <Sun
      size={20}
      className="text-orange-500 hover:text-orange-400 transition-colors"
    />
  ),
  Moon: () => (
    <Moon
      size={20}
      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    />
  ),
  Globe: () => (
    <Globe
      size={20}
      className="text-slate-300 hover:text-blue-400 transition-colors"
    />
  ),
  X: () => (
    <XIcon
      size={20}
      className="text-slate-600 dark:text-slate-300 hover:text-blue-400 transition-colors"
    />
  ),
  Github: () => (
    <SiGithub
      size={20}
      className="text-slate-700 dark:text-slate-300 hover:text-blue-400 transition-colors"
    />
  ),
};

// --- ICONOS DE TECNOLOGÍAS ---
export const TECH_ICONS = {
  React: () => <SiReact size={16} className="text-cyan-400" />,
  Tailwind: () => <SiTailwindcss size={16} className="text-teal-400" />,
  JavaScript: () => <SiJavascript size={16} className="text-yellow-400" />,
  Vite: () => <SiVite size={16} className="text-purple-400" />,
  "Framer Motion": () => <SiFramer size={16} className="text-pink-400" />,
  NextJS: () => <SiNextdotjs size={16} className="text-slate-800 dark:text-slate-100" />,
  jQuery: () => <SiJquery size={16} className="text-blue-400" />,
  TypeScript: () => <SiTypescript size={16} className="text-blue-500" />,
  Bootstrap: () => <SiBootstrap size={16} className="text-purple-500" />,
  Git: () => <SiGit size={16} className="text-orange-500" />,
  Github: () => <SiGithub size={16} className="text-slate-700 dark:text-slate-300" />,
  Nginx: () => <SiNginx size={16} className="text-green-400" />,
  ESLint: () => <SiEslint size={16} className="text-purple-400" />,
  PHP: () => <SiPhp size={16} className="text-indigo-400" />,
  Python: () => <SiPython size={16} className="text-blue-400" />,
  Django: () => <SiDjango size={16} className="text-green-600" />,
  NodeJS: () => <SiNodedotjs size={16} className="text-green-500" />,
  Express: () => <SiExpress size={16} className="text-slate-800 dark:text-slate-100" />,
  ReactNative: () => <SiReact size={16} className="text-cyan-300" />,
  Expo: () => <SiExpo size={16} className="text-slate-800 dark:text-slate-100" />,
  MySQL: () => <SiMysql size={16} className="text-orange-400" />,
  MongoDB: () => <SiMongodb size={16} className="text-green-500" />,
  Docker: () => <SiDocker size={16} className="text-blue-500" />,
  VSCode: () => <VscVscode size={16} className="text-blue-500" />,
  Postman: () => <SiPostman size={16} className="text-orange-500" />,
  "Mongo Compass": () => <SiMongoose size={16} className="text-green-400" />,
  XAMPP: () => <SiXampp size={16} className="text-orange-500" />,
};
