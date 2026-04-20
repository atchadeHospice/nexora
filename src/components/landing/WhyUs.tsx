/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const features = [
  { 
    title: "Accompagnement Sur-mesure", 
    desc: "Nous ne nous contentons pas de coder. Nous vous accompagnons de la stratégie initiale jusqu'à la maintenance évolutive de votre solution." 
  },
  { 
    title: "Respect des Délais & Budgets", 
    desc: "Le succès de votre projet dépend de notre rigueur. Nous garantissons un budget clair et le respect strict des échéances convenues." 
  },
  { 
    title: "Expertise SEO Intégrée", 
    desc: "Parce qu'un beau site doit être vu, nous intégrons les meilleures pratiques de référencement naturel dès la phase de conception." 
  },
];

export default function WhyUs() {
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!quoteRef.current) return;

    const words = quoteRef.current.querySelectorAll('.word');
    gsap.fromTo(words,
      { 
        y: 20, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  const splitWords = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.2em] overflow-hidden">
        {word}
      </span>
    ));
  };

  return (
    <section id="why" className="py-32 bg-background border-y border-white/5">
      <div className="grid-layout">
        <div className="col-span-12 lg:col-span-8 grid-cell space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Pourquoi nous choisir ?
            </span>
          </div>
          <h2 className="text-display text-4xl lg:text-5xl">
            Écoute, <span className="text-primary">Expertise</span> & Créativité.
          </h2>
        </div>
        
        <div className="col-span-12 lg:col-span-4 grid-cell flex items-end">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-white/30 leading-relaxed max-w-xs">
            Nous combinons émotion et rationnel pour bâtir votre présence digitale.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 grid-cell space-y-16">
          <div className="glass-card p-12 space-y-12 h-full">
            <p ref={quoteRef} className="font-display text-3xl font-bold leading-tight tracking-tighter">
              {splitWords('"Un site sur-mesure reflète votre identité et augmente radicalement votre efficacité en ligne."')}
            </p>
            <div className="w-24 h-px bg-primary" />
            <p className="text-sm font-medium leading-[1.8] text-white/40 max-w-md">
              Contrairement aux templates génériques, nos solutions sont parfaitement adaptées à vos besoins spécifiques. Nous créons des outils qui travaillent pour vous.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 grid-cell flex flex-col justify-center">
          <div className="space-y-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-12 group p-8 hover:bg-white/[0.02] transition-colors duration-700 border-b border-white/5 last:border-0"
              >
                <span className="font-display text-4xl font-black text-white/5 group-hover:text-primary transition-colors duration-700">
                  0{i + 1}
                </span>
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {feature.title}
                  </h4>
                  <p className="text-xs font-medium leading-relaxed text-white/40 group-hover:text-white/70 transition-colors max-w-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
