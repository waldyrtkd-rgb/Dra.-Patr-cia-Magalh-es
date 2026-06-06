import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "./icons/WhatsApp";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O tratamento dói?",
      answer: "Absolutamente não. Utilizamos técnicas avançadas de anestesia sem dor e protocolos de conforto. Nosso objetivo é que você relaxe durante todo o procedimento."
    },
    {
      question: "Quanto custa o tratamento?",
      answer: "Cada sorriso é único. Por isso, não passamos valores sem antes realizar uma avaliação clínica criteriosa para entender suas reais necessidades e expectativas. Temos diferentes formas de pagamento para viabilizar o seu sonho."
    },
    {
      question: "As lentes de contato dental estragam os dentes naturais?",
      answer: "Não. A Odontologia moderna preconiza a mínima intervenção. Quando bem indicadas e executadas com planejamento digital, as lentes preservam ao máximo a estrutura dental original."
    },
    {
      question: "Quanto tempo dura o tratamento estético?",
      answer: "Na maioria dos casos de estética (como lentes ou invisalign), após o planejamento inicial, conseguimos finalizar o tratamento em poucas sessões, otimizando o seu tempo."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Ainda não tem certeza? Nós esclarecemos para você.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
              >
                <span className="font-semibold text-navy-900 text-lg pr-8">{faq.question}</span>
                <span className="flex-shrink-0 text-brand-primary">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-3xl font-display font-bold mb-6 relative z-10">Pronto para dar o primeiro passo?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Nossa agenda é limitada para garantir o padrão de excelência de cada atendimento. Garanta sua vaga para este mês.
          </p>
          <a 
            href="https://wa.me/5581993819964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-transform transform hover:scale-105 relative z-10 shadow-lg shadow-brand-primary/20"
          >
            <WhatsAppIcon size={24} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
