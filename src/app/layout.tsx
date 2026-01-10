import type { Metadata } from "next";
// 1. IMPORTAMOS O LOCALFONT
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import { Github, Linkedin, Instagram } from "lucide-react";

// 2. CONFIGURAMOS A FONTE GRIFT
const grift = localFont({
  src: [
    {
      path: './fonts/Grift-Regular.otf', // Caminho do arquivo (ajuste o nome se precisar)
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Grift-Bold.otf',    // Caminho do arquivo Bold
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-grift', // Nome da variável para o Tailwind
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Apollo Consultoria",
  description: "Data, Automation & Development",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. APLICAMOS A VARIÁVEL NO BODY */}
      <body className={`${grift.variable} font-sans antialiased bg-slate-950 text-slate-200 flex flex-col min-h-screen`}>
        
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-16">
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
                  <Github className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </footer>
        </LanguageProvider>

      </body>
    </html>
  );
}