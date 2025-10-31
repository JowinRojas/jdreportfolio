import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFramer,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { MdApi, MdOutlineDownload } from "react-icons/md";

export const icons = {
  // --- Frontend ---
  react: <FaReact className="text-blue-400 w-6 h-6" />,
  nextjs: <SiNextdotjs className="text-gray-200 w-6 h-6" />,
  typescript: <SiTypescript className="text-sky-500 w-6 h-6" />,
  tailwind: <SiTailwindcss className="text-cyan-400 w-6 h-6" />,
  framer: <SiFramer className="text-pink-400 w-6 h-6" />,

  // --- Backend ---
  nodejs: <FaNodeJs className="text-green-500 w-6 h-6" />,
  express: <SiExpress className="text-gray-300 w-6 h-6" />,
  mongodb: <SiMongodb className="text-green-600 w-6 h-6" />,
  api: <MdApi className="text-yellow-400 w-6 h-6" />,

  // --- Tools ---
  git: <FaGitAlt className="text-orange-500 w-6 h-6" />,
  github: <FaGithub className="text-gray-300 w-6 h-6" />,
  vscode: <DiVisualstudio className="text-blue-500 w-6 h-6" />,
  postman: <SiPostman className="text-orange-400 w-6 h-6" />,
  figma: <FaFigma className="text-pink-500 w-6 h-6" />,

  // --- Social / Contact ---
  linkedin: <FaLinkedin className="text-blue-500 w-6 h-6" />,
  email: <FaEnvelope className="text-red-400 w-6 h-6" />,
  whatsapp: <FaWhatsapp className="text-green-400 w-6 h-6" />,

  // --- UI ---
  download: <MdOutlineDownload className="text-gray-300 w-6 h-6" />,
};
