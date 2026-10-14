export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "サイト制作・公開",
    items: ["Next.js", "Tailwind CSS", "Git / GitHub", "Vercel", "Upstash Redis"],
  },
  {
    category: "業務自動化",
    items: ["Google Apps Script", "Gmail API", "Node.js", "ExcelJS"],
  },
];
