import { motion } from "motion/react";
import { AlertCircle, EyeOff, ShieldAlert } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

export function PainPoints() {
  const pains = [
    {
      icon: <EyeOff className="w-10 h-10 text-brand-dark" />,
      title: "Vergonha de Sorrir",
      description: "Você esconde o sorriso nas fotos ou coloca a mão na boca ao dar risada em público?"
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-brand-dark" />,
      title: "Dentes Amarelados ou Desgastados",
      description: "A aparência dos seus dentes faz você parecer mais velho(a) do que realmente é?"
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-brand-dark" />,
      title: "Medo do Dentista",
      description: "Traumas do passado fazem você adiar tratamentos essenciais por medo da dor e do desconforto?"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
            O seu sorriso atual está <span className="text-brand-primary">roubando a sua confiança?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Muitas pessoas deixam de viver momentos felizes e perdem oportunidades profissionais porque sentem insegurança em relação à própria imagem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pains.map((pain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 bg-brand-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-medium text-navy-900">Você não precisa mais conviver com isso.</p>
        </div>
      </div>
    </section>
  );
}
