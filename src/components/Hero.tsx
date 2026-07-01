import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 md:py-32 overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center md:items-start justify-center text-center md:text-left">
        
        {/* Text Details Column */}
        <div className="flex flex-col items-center md:items-start gap-6 max-w-3xl" id="hero-text-container">
          {/* Active Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold tracking-wide text-blue-400"
            id="hero-active-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Title */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[68px] font-sans font-bold tracking-tight text-white leading-[1.08]"
              id="hero-main-title"
            >
              {t.hero.titleFirst}{" "}
              <span className="relative inline-block px-4 py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400">
                {t.hero.titleAccent}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                >
                  <defs>
                    <linearGradient id="glowing-circle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background track to guide the laser */}
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="8"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.15)"
                    strokeWidth="1.5"
                  />

                  {/* Laser glow beam */}
                  <motion.rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="8"
                    fill="none"
                    stroke="url(#glowing-circle-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#neon-glow)"
                    initial={{ strokeDasharray: "30 150", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: [-180, 0] }}
                    transition={{
                      duration: 3.5,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </svg>
              </span>{" "}
              {t.hero.titleLast}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed tracking-normal"
            id="hero-subtitle"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Action Buttons CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
            id="hero-actions"
          >
            {/* Primary Button */}
            <button
              onClick={() => handleScrollTo("projects")}
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-300 overflow-hidden w-full sm:w-auto"
              id="hero-cta-primary"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => handleScrollTo("about")}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-gray-300 hover:text-white border border-blue-500/15 bg-blue-500/3 hover:bg-blue-500/10 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
              id="hero-cta-secondary"
            >
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
