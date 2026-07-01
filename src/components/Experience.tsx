import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { Calendar, Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left" id="experience-header">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
            {t.experience.title}
          </h2>
        </div>

        {/* Experience Cards Layout */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto" id="experience-cards-container">
          {t.experience.items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-blue-500/10 bg-blue-500/2 hover:bg-blue-500/5 hover:border-blue-500/20 backdrop-blur-sm shadow-xl hover:shadow-blue-500/2 transition-all duration-500 text-left"
            >
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-400 max-w-max">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-xs font-semibold tracking-wide">
                    <span className="text-blue-400">{item.company}</span>
                    <span className="text-gray-600">•</span>
                    <div className="inline-flex items-center gap-1 text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-0 pt-1 max-w-3xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
