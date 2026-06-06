import { motion } from "motion/react";
import { Sparkles, Heart, Briefcase, Smile } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

export function Benefits() {
  const benefits = [
    {
      icon: <Smile className="w-8 h-8 text-brand-primary" />,
      title: "Confiança Renovada",
      description: "Sinta-se à vontade para sorrir em fotos, eventos sociais e reuniões de trabalho."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-primary" />,
      title: "Bem-estar Diário",
      description: "Recupere a mastigação perfeita e livre-se de dores ou desconfortos constantes."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-brand-primary" />,
      title: "Impacto Profissional",
      description: "Transmita mais credibilidade e segurança com um sorriso alinhado e iluminado."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-primary" />,
      title: "Estética Natural",
      description: "Resultados imperceptíveis e harmônicos, que valorizam os seus traços únicos."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-navy-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-l-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            A verdadeira transformação vai <span className="text-brand-light">muito além da boca.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Um sorriso saudável e bonito é a chave para abrir portas, melhorar relacionamentos e elevar a auto-estima.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-navy-800 hover:border-brand-primary/50 transition-colors"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
