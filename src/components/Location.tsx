import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";
import clinicFacade from '../assets/images/Local.png';

export function Location() {
  return (
    <section className="py-16 md:py-24 bg-surface-50" id="localizacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
            Como Chegar à <span className="text-brand-primary">Clínica</span>
          </h2>
          <p className="text-lg text-navy-800">
            Estamos localizados em uma região de fácil acesso, com estrutura moderna, 
            estacionamento integrado e acessibilidade completa pensando no seu conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Informações e imagem */}
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-lg shadow-brand-primary/5">
              <img src={clinicFacade} alt="Fachada da Clínica" className="w-full h-64 object-cover" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-100 flex items-start gap-4">
                <div className="bg-brand-light/30 p-3 rounded-full shrink-0">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Endereço</h4>
                  <p className="text-navy-800 text-sm">Av. Paulista, 1000 - Sala 45<br />Bela Vista, São Paulo - SP</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-100 flex items-start gap-4">
                <div className="bg-brand-light/30 p-3 rounded-full shrink-0">
                  <Clock className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Horário de Atendimento</h4>
                  <p className="text-navy-800 text-sm">Seg a Sex: 08h às 19h<br />Sábados: 08h às 13h</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-100 flex items-start gap-4 sm:col-span-2">
                <div className="bg-brand-light/30 p-3 rounded-full shrink-0">
                  <WhatsAppIcon size={24} className="text-brand-primary" />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Dúvidas sobre como chegar?</h4>
                    <p className="text-navy-800 text-sm">Fale com nossa recepção para orientações.</p>
                  </div>
                  <a 
                    href="https://wa.me/5581993819964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    Enviar Mensagem
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-brand-primary/5 border border-surface-100 p-2 bg-white">
            <div className="w-full h-full rounded-2xl overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.146603092285!2d-46.65484862466986!3d-23.56319807880026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1717366304859!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Clínica"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
