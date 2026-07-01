import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState("https://i.ibb.co/vv6W8BvZ/profile.jpg");

  const handleImageError = () => {
    if (imageSrc.includes("vv6W8BvZ")) {
      setImageSrc("https://i.ibb.co/VpcG8Np2/profile.jpg");
    } else {
      // Fallback to high quality placeholder if both fail
      setImageSrc("https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&h=500&q=80");
    }
  };

  const metrics = [
    {
      id: "m1",
      value: "+5",
      label: t.about.experienceCard,
    },
    {
      id: "m2",
      value: "+30",
      label: t.about.projectsCard,
    },
    {
      id: "m3",
      value: "+15",
      label: t.about.techCard,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left" id="about-header">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Section Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="about-grid">
          
          {/* Left Column: Image with Glowing/Lighting Glass effects */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative" id="about-image-column">
            
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-blue-500/30 via-cyan-400/10 to-transparent transition-all duration-300">
              {/* Animated Background Blur Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-radial from-blue-500/30 via-cyan-400/5 to-transparent blur-2xl group-hover:from-blue-500/40 transition-all duration-700 pointer-events-none" />
              
              {/* Core Image container */}
              <div className="relative z-10 w-full h-full rounded-2xl bg-[#030712] overflow-hidden">
                <img
                  src={imageSrc}
                  alt="Janderson Vidal"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-105 contrast-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                
                {/* Floating glass overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual glow overlay that follows the mouse subtly */}
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-color-dodge pointer-events-none group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              
              {/* Outer decorative neon border accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Biography & Fact Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left" id="about-text-column">
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>

            {/* Quick Metrics Bento-ish Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4" id="about-metrics-grid">
              {metrics.map((m) => (
                <div
                  key={m.id}
                  className="group relative flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-white/[0.04] bg-[#060a17]/40 hover:bg-[#091024]/60 hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden"
                >
                  {/* Glowing ambient light effect in the corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-xl group-hover:from-cyan-400/10 transition-all duration-700 pointer-events-none" />
                  
                  {/* Subtle border line on the top that shines on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/20 transition-all duration-500" />
                  
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-4xl font-extrabold font-sans text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-gray-400 group-hover:text-gray-300 font-bold font-mono tracking-widest uppercase transition-colors">
                      {m.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
