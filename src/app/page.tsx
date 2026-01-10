"use client";

export const dynamic = "force-dynamic";
import Link from "next/link";
import { ArrowRight, Code2, Database, Zap, ShieldCheck, Globe } from "lucide-react";
import * as motion from "framer-motion/client";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-800">
            {t.hero.badge}
          </span>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            {t.hero.title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.hero.title_highlight}</span> {t.hero.title_end}
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contato" className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              {t.hero.cta_primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link href="/portfolio" className="rounded-full border border-slate-700 px-8 py-4 font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
              {t.hero.cta_secondary}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="px-6 py-24 md:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">{t.services.title}</h2>
            <p className="mt-4 text-slate-400">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard icon={<Database className="h-8 w-8 text-blue-400" />} title={t.services.card1_title} description={t.services.card1_desc} />
            <ServiceCard icon={<Zap className="h-8 w-8 text-cyan-400" />} title={t.services.card2_title} description={t.services.card2_desc} />
            <ServiceCard icon={<Code2 className="h-8 w-8 text-indigo-400" />} title={t.services.card3_title} description={t.services.card3_desc} />
          </div>
        </div>
      </section>

      {/* --- WHY APOLLO SECTION --- */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              {t.why.title} <span className="text-blue-500">Apollo</span>?
            </h2>
            <p className="mb-8 text-lg text-slate-400">{t.why.desc}</p>
            <ul className="space-y-4">
              <FeatureItem text={t.why.item1} />
              <FeatureItem text={t.why.item2} />
              <FeatureItem text={t.why.item3} />
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 border border-slate-800 p-8">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="relative z-10 flex h-full flex-col justify-between">
                <Globe className="h-16 w-16 text-blue-500/50" />
                <div>
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="text-slate-400">{t.why.stat_label}</div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- COMPONENTES AUXILIARES ---
function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-950 p-8 transition-colors hover:border-blue-500/50 hover:bg-slate-900">
      <div className="mb-6 inline-flex rounded-lg bg-slate-900 p-3 group-hover:bg-blue-900/20">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return <li className="flex items-center gap-3 text-slate-300"><ShieldCheck className="h-5 w-5 text-blue-500" />{text}</li>;
}