import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { Cpu, Server, Database, Cloud, Wrench, CircleDot } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  percentage: number; // For clean visual indicator arcs
}

export const Skills: React.FC = () => {
  const { t, language } = useTranslation();

  const getTranslatedLevel = (level: string) => {
    if (language === "en") {
      switch (level) {
        case "Sênior":
          return "Senior";
        case "Avançado":
          return "Advanced";
        case "Intermediário":
          return "Intermediate";
        default:
          return level;
      }
    }
    return level;
  };

  const skillCategories = [
    {
      id: "frontend",
      title: t.skills.categories.frontend,
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      glowColor: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      borderColor: "group-hover:border-blue-500/30",
      skills: [
        { name: "React / Next.js", level: "Sênior", percentage: 95 },
        { name: "TypeScript", level: "Sênior", percentage: 92 },
        { name: "Framer Motion / GSAP", level: "Avançado", percentage: 88 },
        { name: "Tailwind CSS", level: "Sênior", percentage: 96 },
        { name: "HTML5 / Canvas API", level: "Avançado", percentage: 85 },
      ],
    },
    {
      id: "backend",
      title: t.skills.categories.backend,
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      glowColor: "group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      borderColor: "group-hover:border-cyan-400/30",
      skills: [
        { name: "Node.js / Express", level: "Sênior", percentage: 94 },
        { name: "NestJS", level: "Avançado", percentage: 86 },
        { name: "Python / Fast API", level: "Avançado", percentage: 80 },
        { name: "Rest APIs / Webhooks", level: "Sênior", percentage: 95 },
      ],
    },
    {
      id: "database",
      title: t.skills.categories.database,
      icon: <Database className="w-5 h-5 text-blue-400" />,
      glowColor: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      borderColor: "group-hover:border-blue-500/30",
      skills: [
        { name: "PostgreSQL / SQL", level: "Avançado", percentage: 90 },
        { name: "MongoDB", level: "Avançado", percentage: 88 },
        { name: "Redis Caching", level: "Intermediário", percentage: 75 },
      ],
    },
    {
      id: "cloudDevops",
      title: t.skills.categories.cloudDevops,
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      glowColor: "group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      borderColor: "group-hover:border-cyan-400/30",
      skills: [
        { name: "Docker Containers", level: "Avançado", percentage: 85 },
        { name: "CI/CD (Github Actions)", level: "Avançado", percentage: 82 },
      ],
    },
    {
      id: "tools",
      title: t.skills.categories.tools,
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      glowColor: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      borderColor: "group-hover:border-blue-500/30",
      skills: [
        { name: "Figma (UI/UX Design)", level: "Avançado", percentage: 88 },
        { name: "Git & Versioning", level: "Sênior", percentage: 95 },
        { name: "Linux Bash & Shell", level: "Avançado", percentage: 84 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left" id="skills-header">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
            {t.skills.title}
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-gray-400 font-medium mt-1">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="skills-grid">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className={`group flex flex-col justify-between p-6 rounded-2xl border border-blue-500/10 bg-blue-500/2 ${cat.borderColor} ${cat.glowColor} backdrop-blur-sm transition-all duration-500`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-500/5 text-left">
                  <div className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10 transition-colors duration-500 group-hover:bg-blue-500/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Nodes List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex flex-col gap-1.5 group/node hover:bg-blue-500/3 p-2.5 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between text-xs text-left">
                        <span className="font-semibold text-gray-200 group-hover/node:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-wide uppercase">
                          {getTranslatedLevel(skill.level)}
                        </span>
                      </div>

                      {/* Customized Mini-glowing Level Bar (Replaces ugly boring standard bars) */}
                      <div className="relative w-full h-[3px] bg-blue-500/10 rounded-full overflow-hidden">
                        {/* Interactive fill */}
                        <div
                          style={{ width: `${skill.percentage}%` }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-transform duration-1000"
                        />
                        {/* Glow tip */}
                        <div
                          style={{ left: `calc(${skill.percentage}% - 4px)` }}
                          className="absolute top-0 w-2 h-full bg-white rounded-full blur-[1px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Card Footer Dot */}
              <div className="flex justify-end pt-4 mt-4 border-t border-blue-500/5">
                <CircleDot className="w-3.5 h-3.5 text-blue-500/30 group-hover:text-cyan-400/70 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
