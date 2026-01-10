"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* --- LOGO E NOME --- */}
        <Link 
          href="/" 
          className="flex items-center gap-3 text-xl font-bold tracking-tighter text-white transition-opacity hover:opacity-90"
        >
          <Image 
            src="/logo.png"
            alt="Apollo Logo"
            width={40}
            height={40}
            // ADICIONEI O "-mt-1" AQUI NO FINAL DA CLASSE 👇
            className="h-10 w-auto object-contain -mt-1"
            priority
          />
          <span>
            APOLLO<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/" className="hover:text-blue-400 transition-colors">{t.nav.home}</Link>
          <Link href="/quem-somos" className="hover:text-blue-400 transition-colors">{t.nav.about}</Link>
          <Link href="/portfolio" className="hover:text-blue-400 transition-colors">{t.nav.portfolio}</Link>
          <Link href="/contato" className="hover:text-blue-400 transition-colors">{t.nav.contact}</Link>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-white transition-colors hover:border-blue-500 hover:bg-slate-800"
          >
            <Globe className="h-3 w-3" />
            {language === "pt" ? "EN" : "PT"}
          </button>
        </nav>

        {/* Botão Mobile */}
        <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleLanguage} className="text-xs font-bold text-slate-300">
                {language === "pt" ? "EN" : "PT"}
            </button>
            <button className="text-white">
              <Menu className="h-6 w-6" />
            </button>
        </div>
      </div>
    </header>
  );
}