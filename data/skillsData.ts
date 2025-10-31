export type SkillCategory = "frontend" | "backend" | "tools";

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  categoryKey: SkillCategory;
  items: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    categoryKey: "frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "TailwindCSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
    ],
  },
  {
    categoryKey: "backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    categoryKey: "tools",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
];
