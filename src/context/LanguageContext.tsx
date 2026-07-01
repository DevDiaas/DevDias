import React, { createContext, useContext, useState, useEffect } from "react";
import { ptBR, en, TranslationSchema } from "../messages";

export type LanguageType = "pt-BR" | "en";

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    // Attempt to load preferred language from localStorage
    const saved = localStorage.getItem("devdias_lang");
    if (saved === "pt-BR" || saved === "en") {
      return saved as LanguageType;
    }
    // Fallback to browser language or default to pt-BR
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language;
      if (browserLang.startsWith("pt")) {
        return "pt-BR";
      }
    }
    return "pt-BR";
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("devdias_lang", lang);
  };

  const t = language === "pt-BR" ? ptBR : en;

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = language === "pt-BR" ? "pt-BR" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
