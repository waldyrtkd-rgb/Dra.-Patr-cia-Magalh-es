import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeftRight } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";
import splitSmile from '../assets/images/split_smile_comparison_1780694415197.png';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="servicos" className="py-16 md:py-24 bg-surface-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
            Transformações que mudam vidas. <br />
            <span className="text-brand-primary">Veja o Antes e Depois.</span>
          </h2>
          <p className="text-lg text-navy-800">
            Resultados reais de pacientes que recuperaram a autoestima e a segurança ao sorrir, 
            através de procedimentos minimamente invasivos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-brand-primary/5">
          
          {/* Interactive Before/After Slider */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-video mx-auto overflow-hidden rounded-2xl group select-none bg-surface-50">
            
            {/* After Image (Right Half of original image) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                  src={splitSmile} 
                  alt="Depois do tratamento" 
                  className="absolute top-0 right-0 w-[200%] h-full object-cover object-right max-w-none pointer-events-none" 
              />
            </div>

            {/* Before Image (Left Half of original image), clipped linearly */}
            <div 
              className="absolute top-0 left-0 h-full w-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                  src={splitSmile} 
                  alt="Antes do tratamento" 
                  className="absolute top-0 left-0 w-[200%] h-full object-cover object-left max-w-none pointer-events-none" 
              />
            </div>

            {/* Overlay Labels */}
            <div className="absolute top-4 right-4 bg-brand-primary/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold pointer-events-none shadow-md">
              Depois
            </div>
            <div 
              className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold pointer-events-none shadow-md transition-opacity"
              style={{ opacity: sliderPosition < 20 ? 0 : 1 }}
            >
              Antes
            </div>

            {/* Invisible Range Input for Drag Interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              title="Arraste para comparar"
            />

            {/* Visible Slider Center Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-75"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-brand-primary">
                <ArrowLeftRight size={20} />
              </div>
            </div>
            
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Reabilitação Oral & Lentes Odontológicas</h3>
            <p className="text-navy-800 max-w-2xl mx-auto">
              Harmonização do sorriso corrigindo cor, formato e alinhamento, de forma personalizada e focada no seu rosto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
