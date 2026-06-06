import { WhatsAppIcon } from "./icons/WhatsApp";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5581993819964"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[9999] group flex items-center justify-center p-3 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-110"
      aria-label="Agendar Consulta pelo WhatsApp"
    >
      <WhatsAppIcon size={28} className="w-7 h-7 sm:w-8 sm:h-8" />
      
      {/* Tooltip that appears near the button */}
      <span className="absolute right-full mr-4 bg-white text-navy-900 border border-surface-200 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Agendar Consulta
      </span>
      
      {/* Ping animation behind the button */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
    </a>
  );
}
