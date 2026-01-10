"use client";

import React from "react";
import { Database, Bot, Code2, CheckCircle2, ArrowRight } from "lucide-react";
// Importamos o hook de idioma
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  // Definimos os ícones em ordem para combinar com os textos do arquivo de tradução
  // Índice 0 = Data, Índice 1 = Automation, Índice 2 = App
  const icons = [
    <Database key="db" className="h-8 w-8 text-blue-400" />,
    <Bot key="bot" className="h-8 w-8 text-emerald-400" />,
    <Code2 key="code" className="h-8 w-8 text-violet-400" />,
  ];

  return (
    <section 
      id="services"
      // MUDANÇA VISUAL: 
      // bg-slate-900 (destaca do 950 da página)
      // border-y border-white/5 (cria linhas delimitadoras sutis)
      className="relative border-y border-white/5 bg-slate-900 py-24 text-slate-200" 
    >
      {/* Elemento decorativo de fundo (opcional, para dar mais destaque) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container relative mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {t.services_section.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            {t.services_section.subtitle}
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mapeamos os cards vindos da tradução (t) */}
          {t.services_section.cards.map((service: any, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-slate-950 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Efeito de brilho no topo */}
              <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Ícone (pega do array de ícones baseado no índice) */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 shadow-inner transition-colors group-hover:bg-white/10">
                {icons[index]}
              </div>

              {/* Título e Descrição (Vêm da tradução) */}
              <h3 className="mb-3 text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                {service.description}
              </p>

              {/* Lista de Benefícios */}
              <ul className="space-y-3 border-t border-white/5 pt-6">
                {service.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-500/80" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Link sutil "Saiba mais" traduzido */}
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                <span>{t.services_section.cta_card}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}