import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

import avatarEmpresaria from '../assets/images/avatar_empresaria_1780695959680.png';
import avatarAdvogado from '../assets/images/avatar_advogado_1780695976371.png';
import avatarArquiteta from '../assets/images/avatar_arquiteta_1780695990283.png';

export function SocialProof() {
  const testimonials = [
    {
      name: "Ana Carolina S.",
      text: "Eu tinha pânico de dentista desde criança. A Dra. Patrícia não só transformou meu sorriso, mas também me curou desse trauma. O atendimento é impecável.",
      stars: 5,
      role: "Empresária",
      image: avatarEmpresaria
    },
    {
      name: "Marcelo T.",
      text: "Coloquei facetas de porcelana e o resultado ficou extremamente natural. Ninguém diz que não são meus dentes reais. Aumentou minha confiança em 100%.",
      stars: 5,
      role: "Advogado",
      image: avatarAdvogado
    },
    {
      name: "Juliana R.",
      text: "A clínica parece um spa. Tudo cheiroso, ambiente relaxante. E a paciência da Dra. ao explicar cada etapa me deixou muito segura. Recomendo de olhos fechados.",
      stars: 5,
      role: "Arquiteta",
      image: avatarArquiteta
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
            Não acredite apenas em nós. <br/>
            <span className="text-brand-primary">Acredite em quem já viveu a experiência.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-navy-900 font-medium">
            <span className="text-3xl font-bold">5.0</span>
            <div className="flex text-accent-gold">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
          </div>
          <p className="text-gray-500 mt-2">Mais de 180 avaliações de 5 estrelas no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-primary/10" />
              <div className="flex text-accent-gold mb-4">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div>
                  <p className="font-bold text-navy-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
