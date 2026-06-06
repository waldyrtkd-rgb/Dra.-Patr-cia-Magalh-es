import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/images/Logo.png";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-surface-50/90 backdrop-blur-md z-50 border-b border-surface-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-2 relative z-10">
          <img src={logoImage} alt="Dra. Patrícia Magalhães" className="h-10 sm:h-12 w-auto brightness-0 opacity-90" />
        </div>

        <div className="hidden lg:flex absolute left-0 right-0 top-0 bottom-0 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-8 text-sm font-semibold text-navy-800 pointer-events-auto">
            <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre Mim</a>
            <a href="#formacao" className="hover:text-brand-primary transition-colors">Formação</a>
            <a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
            <a href="#localizacao" className="hover:text-brand-primary transition-colors">Localização</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Instagram</a>
          </div>
        </div>

        <button 
          className="lg:hidden p-2 text-navy-900 hover:text-brand-primary transition-colors focus:outline-none relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-surface-100 bg-surface-50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 font-semibold text-navy-800">
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2">Sobre Mim</a>
              <a href="#formacao" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2">Formação</a>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2">Serviços</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2">FAQ</a>
              <a href="#localizacao" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2">Localização</a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-primary transition-colors py-2 mb-2">Instagram</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
