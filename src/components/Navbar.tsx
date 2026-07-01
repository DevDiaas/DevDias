import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { useAudio } from "../context/AudioContext";
import { Menu, X, Globe, Mail } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const { isMuted, setIsMuted, playHover, playClick, playToggle, playSuccess } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    playToggle();
    setLanguage(language === "pt-BR" ? "en" : "pt-BR");
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      // Just unmuted, play toggle sound for positive tactile response
      setTimeout(() => {
        playToggle();
      }, 50);
    }
  };

  const scrollToSection = (id: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
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

  const navItems = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-[#030712]/78 border-b border-blue-500/12 py-4 shadow-lg shadow-blue-500/2"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative flex items-center gap-0.5 font-sans font-bold text-xl tracking-tight text-white select-none"
            id="nav-logo"
          >
            <span className="transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="text-blue-500">Dev</span>
              <span className="text-white">Diaas</span>
            </span>
            <span className="text-cyan-400 font-extrabold animate-cursor-blink">_</span>
            <div className="absolute -inset-x-2 -inset-y-1 bg-blue-500/5 rounded-md scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                onMouseEnter={playHover}
                className="relative text-gray-400 font-medium hover:text-white transition-colors duration-300 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Controls: Language Switcher, Audio Switcher & Contact Button */}
          <div className="hidden lg:flex items-center gap-5" id="nav-controls">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/4 hover:bg-blue-500/10 text-xs font-semibold tracking-wider text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Toggle language"
              id="lang-toggle-btn"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>{language === "pt-BR" ? "EN" : "PT-BR"}</span>
            </button>




          </div>

          {/* Mobile Actions (Menu & Language) */}
          <div className="flex lg:hidden items-center gap-3" id="mobile-nav-actions">


            {/* Language Toggle on Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/15 bg-blue-500/4 hover:bg-blue-500/10 text-xs font-semibold text-gray-300"
              aria-label="Toggle language"
              id="mobile-lang-toggle"
            >
              {language === "pt-BR" ? "EN" : "PT"}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                playToggle();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-blue-500/15 bg-blue-500/4 text-gray-300 hover:text-white active:scale-95 transition-all duration-200"
              aria-label="Toggle mobile menu"
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden px-6 pb-8 pt-4 bg-[#030712]/96 backdrop-blur-2xl border-b border-blue-500/15 flex flex-col gap-6 shadow-2xl shadow-blue-900/10"
            id="mobile-menu-drawer"
          >
            <nav className="flex flex-col gap-4 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  onMouseEnter={playHover}
                  className="py-2.5 text-base font-medium text-gray-300 hover:text-white border-b border-gray-900 last:border-0 hover:bg-blue-500/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
