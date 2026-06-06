import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import dentistImage from '../assets/images/doutora.png';
import { WhatsAppIcon } from "./icons/WhatsApp";

export function Solution() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-brand-light transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src={dentistImage} 
              alt="Dra. Patrícia Magalhães em atendimento" 
              className="relative z-10 w-full h-[400px] lg:h-[600px] object-cover object-top rounded-2xl shadow-lg"
            />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
              A Odontologia que você sempre buscou: <span className="text-brand-primary">Sem Dor e Sem Julgamentos.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de 15 anos de experiência, a Dra. Patrícia Magalhães desenvolveu um protocolo de atendimento exclusivo, unindo a mais alta tecnologia a uma abordagem profundamente humana.
            </p>

            <div id="formacao" className="bg-white p-6 rounded-2xl shadow-sm border border-surface-100 mb-8">
              <h3 className="font-bold text-navy-900 mb-3 text-lg">Formação Acadêmica</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div><span>Graduação em Odontologia pela Universidade de São Paulo (USP)</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div><span>Especialização em Reabilitação Oral e Estética</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div><span>Master em Lentes de Contato Dental e Odontologia Digital</span></li>
              </ul>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Protocolo de Conforto Máximo para pacientes com fobia",
                "Planejamento Digital do Sorriso: previsibilidade antes de começar",
                "Procedimentos minimamente invasivos (preservação do seu dente)",
                "Estética natural que harmoniza com o seu rosto"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
