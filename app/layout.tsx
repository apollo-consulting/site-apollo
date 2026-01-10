import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react"; // Ícones

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. CONFIGURAÇÃO DE SEO GLOBAL (Muda o nome na aba do navegador)
export const metadata: Metadata = {
  title: {
    template: '%s | Apollo Consultoria',
    default: 'Apollo Consultoria | Data & Automation', // Título padrão
  },
  description: "Specialized in Data Architecture, Automation and High-Performance Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 flex flex-col min-h-screen`}
      >
        {/* --- HEADER (MENU) FIXO --- */}
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              APOLLO<span className="text-blue-500">.</span>
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/quem-somos" className="hover:text-blue-400 transition-colors">Quem Somos</Link>
              <Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfólio</Link>
              <Link href="/contato" className="hover:text-blue-400 transition-colors">Contato</Link>
            </nav>

            {/* Botão Mobile (Visual apenas por enquanto) */}
            <button className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>

        {/* --- CONTEÚDO DA PÁGINA (AQUI ENTRA O PAGE.TSX) --- */}
        <main className="flex-grow pt-16"> 
          {/* pt-16 serve para o conteúdo não ficar escondido atrás do menu fixo */}
          {children}
        </main>

        {/* --- FOOTER (RODAPÉ) --- */}
        <footer className="border-t border-white/5 bg-slate-900 py-12 text-sm text-slate-400">
          <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Apollo.</h3>
              <p>Innovating the digital backbone of modern businesses.</p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                <li>Data Architecture</li>
                <li>Automation (RPA/AI)</li>
                <li>App Development</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/quem-somos" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="/contato" className="hover:text-blue-400">Careers</Link></li>
                <li><Link href="/contato" className="hover:text-blue-400">Contact</Link></li>
              </ul>
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
          <div className="mt-12 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Apollo Consultoria. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}