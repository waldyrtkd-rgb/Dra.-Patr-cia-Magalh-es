import { motion } from "motion/react";
import { Star } from "lucide-react";
import heroImage from '../assets/images/hero_dental_clinic_1780692866475.png';
import { WhatsAppIcon } from "./icons/WhatsApp";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-navy-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroImage} 
          alt="Clínica Odontológica Moderna" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-light mb-6 font-medium text-sm"
          >
            <Star size={14} className="fill-brand-light" />
            <span>Odontologia de Excelência</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Transforme Seu Sorriso Em Sua <span className="text-brand-light italic">Maior Fonte de Confiança.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 text-balance"
          >
            Recupere o prazer de sorrir sem restrições com a Dra. Patrícia Magalhães. Odontologia de alto padrão focada em conforto absoluto, segurança e resultados transformadores.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://wa.me/5581993819964"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/20"
            >
              <WhatsAppIcon size={24} className="group-hover:translate-x-1 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
              Agendar Consulta
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-400 ml-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Paciente" 
                    className="w-10 h-10 rounded-full border-2 border-navy-900"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-medium">+1.500</p>
                <p>Sorrisos transformados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
