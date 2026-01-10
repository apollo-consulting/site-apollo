import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import { Github, Linkedin, Instagram } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo Consultoria",
  description: "Data, Automation & Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 flex flex-col min-h-screen`}>
        
        {/* O Provider envolve todo o site */}
        <LanguageProvider>
          
          <Header />

          <main className="flex-grow pt-16">
            {children}
          </main>

          {/* Footer (Pode ser componentizado depois) */}
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