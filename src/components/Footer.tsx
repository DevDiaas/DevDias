import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { Github, Linkedin, Instagram, ArrowUp, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
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

  const navLinks = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <footer className="relative border-t border-blue-500/10 bg-transparent py-12 px-6 md:px-12 overflow-hidden select-none" id="app-footer">
      {/* Decorative ambient background light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
              className="group relative flex items-center gap-0.5 font-sans font-bold text-xl tracking-tight text-white select-none"
            >
              <span className="transition-transform duration-300 group-hover:scale-[1.02]">
                <span className="text-blue-500">Dev</span>
                <span className="text-white">Diaas</span>
              </span>
              <span className="text-cyan-400 font-extrabold animate-cursor-blink">_</span>
            </a>
            <p className="max-w-sm text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
              {t.footer.caption}
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 flex flex-col items-start gap-4 text-left">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials Col */}
          <div className="md:col-span-3 flex flex-col items-start gap-4 text-left">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t.footer.socials}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/DevDiaas"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-blue-500/10 hover:border-blue-500/25 bg-blue-500/3 hover:bg-blue-500/8 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Github profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/janderson-vidal"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-blue-500/10 hover:border-blue-500/25 bg-blue-500/3 hover:bg-blue-500/8 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/janderson.vidaal"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-blue-500/10 hover:border-blue-500/25 bg-blue-500/3 hover:bg-blue-500/8 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom divider rights block */}
        <div className="pt-8 border-t border-blue-500/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[11px] sm:text-xs font-medium text-gray-500">
            © {new Date().getFullYear()} Janderson Vidal. {t.footer.rights}
          </span>

          <div className="flex items-center gap-4">
            {/* Language toggle badge */}
            <button
              onClick={() => setLanguage(language === "pt-BR" ? "en" : "pt-BR")}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === "pt-BR" ? "Português (BR)" : "English"}</span>
            </button>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-400 transition-colors group"
              aria-label="Scroll back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
