/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "une équipe de professionnels à l’écoute. notre site a été livré avec un design modernisé et dans les délais annoncés.",
    author: "client satisfait",
    role: "direction marketing"
  },
  {
    quote: "réactivité et expertise technique : nous recommandons cette agence pour tout projet digital d'envergure.",
    author: "ceo d’une pme",
    role: "fondateur"
  },
  {
    quote: "l'accompagnement sur notre application mobile a été exceptionnel. une vision produit rare sur le marché.",
    author: "marie dupont",
    role: "product owner"
  },
  {
    quote: "des designs qui sortent vraiment du lot. nexora a su capturer l'essence de notre marque dès le premier jet.",
    author: "thomas leroy",
    role: "directeur créatif"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-background overflow-hidden border-t border-white/20">
      <div className="grid-layout">
        <div className="col-span-12 grid-cell space-y-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-display font-bold tracking-[0.3em] text-[10px] lowercase italic">
              témoignages
            </span>
          </div>
          <h2 className="text-display lowercase italic">
            avis <span className="text-outline">client</span>
          </h2>
        </div>

        <div className="col-span-12 grid-cell">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="w-full space-y-12 lowercase"
              >
                <Quote className="w-16 h-16 text-primary opacity-20" />
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] italic text-white max-w-5xl">
                   "{testimonials[current].quote}"
                </p>
                <div className="flex flex-col gap-2 pt-8">
                  <span className="font-display italic text-2xl font-black text-primary">
                    {testimonials[current].author}
                  </span>
                  <span className="text-[14px] font-bold text-white/30 tracking-[0.2em] font-display italic">
                    {testimonials[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 right-0 flex gap-4">
              <button 
                onClick={prev}
                className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary transition-all"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
