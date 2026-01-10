import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import { Github, Linkedin, Instagram } from "lucide-react";

// Configuração da Fonte Grift
const grift = localFont({
  src: [
    {
      path: './fonts/Grift-Regular.otf', // Verifique se o nome do arquivo está exato
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Grift-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-grift',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Apollo Consultoria",
  description: "Data, Automation & Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Aplicamos a fonte variável no body */}
      <body className={`${grift.variable} font-sans antialiased bg-slate-950 text-slate-200 flex flex-col min-h-screen`}>
        
        {/* O LanguageProvider deve envolver TUDO dentro do body */}
        <LanguageProvider>
          
          <Header />
          
          {/* O erro provavelmente estava aqui por falta de fechamento correto */}
          <main className="grow pt-16">
            {children}
          </main>
          
          <footer className="border-t border-white/5 bg-slate-900 py-12 text-sm text-slate-400">
            <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-lg font-bold text-white">Apollo.</h3>
                <p>Innovating the digital backbone of modern businesses.</p>
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
                  <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </footer>

        </LanguageProvider> {/* <--- VERIFIQUE SE ESTE FECHAMENTO EXISTIA */}
      
      </body>
    </html>
  );
}