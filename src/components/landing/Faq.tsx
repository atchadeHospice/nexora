/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    q: "Pourquoi choisir un site sur-mesure ?",
    a: "Un site sur-mesure est parfaitement adapté à vos besoins, reflète votre identité et augmente l’efficacité de votre présence en ligne, contrairement aux templates génériques."
  },
  {
    q: "Combien de temps pour créer mon site ?",
    a: "Cela dépend du projet : 2-5 semaines en moyenne pour un site vitrine complet. Nous respectons toujours les échéances convenues."
  },
  {
    q: "Y aura-t-il un support après la mise en ligne ?",
    a: "Oui, nous proposons un service de maintenance évolutive et restons disponibles pour toute modification ou question."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-background text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-0 bg-[length:100%_2px,3px_100%]" />
      
      <div className="grid-layout relative z-10">
        <div className="col-span-12 lg:col-span-5 grid-cell">
          <div className="sticky top-32 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
              <span className="text-primary font-display font-bold tracking-[0.3em] text-[10px] lowercase italic">
                intelligence logicielle
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display italic font-black tracking-tighter leading-none lowercase">
              vos <br/> <span className="text-primary italic text-outline [-webkit-text-stroke:1px_#00F0FF]">questions</span>.
            </h2>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 grid-cell space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border border-white/20 bg-white/[0.02] transition-all duration-500",
                openIndex === i ? "border-primary/50 bg-primary/[0.03] shadow-[0_0_40px_rgba(0,240,255,0.05)]" : "hover:border-white/30 hover:bg-white/[0.05]"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-12 flex items-center justify-between group lowercase text-left gap-8"
              >
                <div className="flex gap-8 items-center">
                  <span className={cn(
                    "text-xs font-bold font-display italic transition-colors",
                    openIndex === i ? "text-primary" : "text-white/20"
                  )}>0{i + 1}</span>
                  <span className={cn(
                    "font-display text-xl md:text-3xl font-black tracking-tighter transition-all",
                    openIndex === i ? "text-primary scale-105" : "text-white group-hover:text-primary"
                  )}>
                    {faq.q}
                  </span>
                </div>
                <div className={cn(
                  "w-10 h-10 rounded-full border flex items-center justify-center transition-all shrink-0",
                  openIndex === i ? "bg-primary text-black border-primary scale-110" : "border-white/10 group-hover:border-primary group-hover:text-primary"
                )}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-12 pb-12 pt-0 ml-16 md:ml-20">
                      <div className="w-full h-px bg-white/5 mb-8" />
                      <p className="text-white/50 font-medium text-base md:text-lg leading-relaxed max-w-2xl lowercase italic">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
