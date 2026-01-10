"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Send } from "lucide-react";
import * as motion from "framer-motion/client";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Sucesso!");
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      // MUDANÇA: Gradiente de destaque e borda superior para separar do About Us
      className="relative border-t border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-24 text-slate-200"
    >
      {/* Detalhe decorativo: Brilho azul sutil no fundo */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-full -translate-x-1/2 bg-blue-500/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          
          <div className="grid gap-16 md:grid-cols-2">
            
            {/* Esquerda: Conteúdo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white md:text-5xl mb-6 tracking-tight">
                {t.contact_section.title}
              </h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                {t.contact_section.subtitle}
              </p>

              <div className="space-y-8">
                <div className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 transition-colors group-hover:bg-blue-500/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t.contact_section.info.email_label}</p>
                    <p className="text-lg font-medium text-white">contato@apolloconsultoria.com</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 transition-colors group-hover:bg-emerald-500/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t.contact_section.info.location_label}</p>
                    <p className="text-lg font-medium text-white">{t.contact_section.info.location_value}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direita: Formulário (MUDANÇA: Agora o card é mais escuro para contrastar com o fundo) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl ring-1 ring-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.contact_section.form.name}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={t.contact_section.form.placeholder_name}
                      className="w-full rounded-xl border border-white/5 bg-slate-900 px-4 py-3 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.contact_section.form.email}</label>
                    <input 
                      required
                      type="email" 
                      placeholder={t.contact_section.form.placeholder_email}
                      className="w-full rounded-xl border border-white/5 bg-slate-900 px-4 py-3 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.contact_section.form.company}</label>
                  <input 
                    type="text" 
                    placeholder={t.contact_section.form.placeholder_company}
                    className="w-full rounded-xl border border-white/5 bg-slate-900 px-4 py-3 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.contact_section.form.message}</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder={t.contact_section.form.placeholder_message}
                    className="w-full rounded-xl border border-white/5 bg-slate-900 px-4 py-3 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10 resize-none"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {isSubmitting ? t.contact_section.form.sending : t.contact_section.form.cta}
                  </span>
                  <Send className={`relative z-10 h-5 w-5 transition-transform ${isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'}`} />
                  
                  {/* Efeito de brilho no botão */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}