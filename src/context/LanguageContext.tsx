"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "@/utils/translations";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations["en"]; // Define que 't' terá o formato dos nossos textos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt"); // Começa em Português

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}