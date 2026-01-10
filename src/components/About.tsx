"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";
import * as motion from "framer-motion/client";

export default function About() {
  const { t } = useLanguage();

  const mvv = [
    {
      title: t.about_section.mission_title,
      desc: t.about_section.mission_desc,
      icon: <Target className="h-6 w-6 text-blue-500" />,
    },
    {
      title: t.about_section.vision_title,
      desc: t.about_section.vision_desc,
      icon: <Eye className="h-6 w-6 text-emerald-500" />,
    },
    {
      title: t.about_section.values_title,
      desc: t.about_section.values_desc,
      icon: <ShieldCheck className="h-6 w-6 text-violet-500" />,
    },
  ];

  return (
    <section id="about" className="bg-slate-950 py-24 text-slate-200 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Parte 1: Apresentação Institucional */}
        <div className="grid gap-16 md:grid-cols-2 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
              {t.nav.about}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.about_section.title}
            </h3>
            <p className="text-xl text-slate-300 mb-6 font-medium">
              {t.about_section.subtitle}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              {t.about_section.description}
            </p>

            {/* Stats Rápidas */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-10">
              {t.about_section.stats.map((stat: any, i: number) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Elemento Visual (Apollo/Space Theme) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
              <div className="aspect-video overflow-hidden rounded-xl bg-slate-800 flex items-center justify-center border border-white/5 group">
                 {/* Aqui você pode colocar uma imagem real ou um ícone gigante */}
                 <Award className="h-24 w-24 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-500" />
              </div>
              {/* Floating element decorativo */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center p-6 shadow-2xl animate-bounce-slow">
                 <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">2026</div>
                    <div className="text-[10px] uppercase text-slate-500">Tech Stack</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parte 2: Missão, Visão e Valores */}
        <div className="grid gap-8 md:grid-cols-3">
          {mvv.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-slate-900/30 p-8 hover:bg-slate-900/50 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}