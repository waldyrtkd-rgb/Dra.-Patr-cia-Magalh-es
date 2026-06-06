import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-8 border-t border-navy-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-display font-bold text-xl">
                PM
              </div>
              <span className="font-display font-semibold text-xl text-white">
                Dra. Patrícia Magalhães
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Odontologia de Alta Performance focada em reabilitação oral, estética e bem-estar do paciente. Transformando sorrisos com arte e ciência.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-primary flex-shrink-0" size={18} />
                <span>Edifício Infinity, Sala 1402<br/>Av. Paulista, 1234 - Jardins, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary flex-shrink-0" size={18} />
                <span>(11) 98765-4321</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span>08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span>09:00 - 13:00</span>
              </li>
              <li className="flex justify-between text-gray-500 mt-2">
                <span>Domingos</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dra. Patrícia Magalhães. Todos os direitos reservados. CRO-SP 12345</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
