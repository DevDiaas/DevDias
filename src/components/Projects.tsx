import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { useAudio } from "../context/AudioContext";
import { ArrowUpRight, Github, Code, ExternalLink } from "lucide-react";

// 1. Importações das imagens (O Vite vai rastrear isso para a Vercel)
import imgP1 from "../assets/images/regenerated_image_1782867978425.png";
import imgP2 from "../assets/images/regenerated_image_1782849692262.png";
import imgP3 from "../assets/images/regenerated_image_1782850817567.png";
import imgP4 from "../assets/images/regenerated_image_1782850286523.png";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { playHover, playClick, playSuccess } = useAudio();
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack">("all");

  // 2. Uso das variáveis importadas no lugar das strings de texto
  const projectPhotos: Record<string, string> = {
    p1: imgP1, // logistics graph analytics
    p2: imgP2, // premium coding landing page
    p3: imgP3, // dark streaming engine
    p4: imgP4, // cloud supabase explorer
  };

  // Assign internal categories for filtering
  const categorizedItems = t.projects.items.map((item) => {
    let category: "frontend" | "fullstack" = "frontend";
    if (item.id === "p1" || item.id === "p3") {
      category = "fullstack";
    }
    return {
      ...item,
      category,
      imageUrl: projectPhotos[item.id] || projectPhotos.p1,
    };
  });

  const filteredItems = categorizedItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left" id="projects-header-container">
          <div className="flex flex-col items-start gap-3" id="projects-header-title">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
              {t.projects.title}
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-gray-400 font-medium mt-1">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center p-1 rounded-full border border-blue-500/10 bg-blue-500/2 backdrop-blur-sm self-start md:self-auto" id="projects-filters">
            <button
              onClick={() => {
                playClick();
                setFilter("all");
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/10"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {filter === "all" ? "Todos" : "All"}
            </button>
            <button
              onClick={() => {
                playClick();
                setFilter("frontend");
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                filter === "frontend"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/10"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => {
                playClick();
                setFilter("fullstack");
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                filter === "fullstack"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/10"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeInOut" }}
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-blue-500/10 bg-blue-500/2 hover:border-blue-500/25 shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Neon Hover Glow effect */}
                <div className="absolute inset-0 bg-radial from-blue-500/4 via-cyan-400/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Thumbnail Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-blue-500/10 bg-[#060a17]">
                    {/* Mock Browser Header */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-[#080d1a] border-b border-white/[0.05] flex items-center px-3 gap-1.5 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                      <div className="mx-auto text-[9px] font-mono text-gray-500 tracking-wider truncate max-w-[180px] bg-white/[0.02] px-2.5 py-0.5 rounded border border-white/[0.03]">
                        {(() => {
                          if (project.id === "p1") return "operacoeslogisticas.com.br";
                          if (project.id === "p3") return "jlbank.com.br";
                          if (project.id === "p4") return "backfire.com.br";
                          if (!project.demoUrl || project.demoUrl === "#") return "project.preview";
                          if (project.demoUrl.includes("vitor-couto-personal")) return "vitorcoutopersonal.com";
                          try {
                            return new URL(project.demoUrl).hostname;
                          } catch {
                            return project.demoUrl.replace(/^https?:\/\//, "").split("/")[0];
                          }
                        })()}
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 top-6 overflow-hidden bg-black/40">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-102 ${
                          project.id === "p1" || project.id === "p2" || project.id === "p3" || project.id === "p4"
                            ? "object-contain bg-[#030712]"
                            : "object-cover object-top"
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Glowing glass overlay */}
                    <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-t from-[#030712] via-[#030712]/5 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Visual Category Label */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest text-cyan-400 border border-cyan-400/20 bg-[#030712]/90 uppercase backdrop-blur-sm z-10">
                      {project.category === "fullstack" ? "Full Stack" : "Frontend"}
                    </span>
                  </div>

                  {/* Details block */}
                  <div className="p-6 lg:p-8 flex flex-col items-start gap-4 text-left">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed font-normal whitespace-pre-line">
                      {project.desc}
                    </p>

                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wide text-gray-400 border border-blue-500/5 bg-blue-500/3"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-2 flex items-center justify-between w-full relative z-10">
                  {/* View Demo */}
                  <a
                    href={project.demoUrl}
                    onMouseEnter={playHover}
                    onClick={() => playSuccess()}
                    className="group/btn flex items-center gap-1.5 text-xs font-bold tracking-wide text-blue-400 hover:text-cyan-400 transition-colors duration-300"
                    id={`project-demo-link-${project.id}`}
                  >
                    <span>{t.projects.demo}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  {/* Github link */}
                  <a
                    href={project.githubUrl}
                    onMouseEnter={playHover}
                    onClick={() => playClick()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/10 hover:border-blue-500/20 bg-blue-500/3 hover:bg-blue-500/10 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-300"
                    id={`project-github-link-${project.id}`}
                    aria-label={`Github source for ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                    <span>{t.projects.github}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};