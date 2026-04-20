/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const demos = [
  { 
    title: 'site web & e-commerce', 
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    type: 'sites vitrines ou boutiques en ligne design, intuitifs et 100 % adaptatifs.'
  },
  { 
    title: 'applications mobiles', 
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    type: 'apps ios/android performantes, avec ux personnalisée pour engager vos utilisateurs.'
  },
  { 
    title: 'design ui/ux', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    type: 'interfaces esthétiques et ergonomiques, pour que votre marque se démarque.'
  },
  { 
    title: 'maintenance & hébergement', 
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    type: 'support technique réactif et serveurs sécurisés pour une solution durable.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white text-black overflow-hidden relative border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] text-[12px] lowercase italic">
                nos expertises natives
              </span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-display lowercase italic"
            >
              solutions de <br/> succès <span className="text-outline-dark italic">digital</span>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 max-w-full gap-2">
        {demos.map((demo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative aspect-[3/4] overflow-hidden bg-black/5 border border-black/10"
          >
            <img 
              src={demo.img} 
              alt={demo.title}
              className="w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              className="absolute inset-0 bg-white/90 lg:bg-white/90 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-12 text-center lowercase"
            >
              <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-black mb-4">
                {demo.title}
              </span>
              <p className="font-display text-[12px] font-medium leading-relaxed text-black/60 mb-8">
                {demo.type}
              </p>
              <button className="px-8 py-3 bg-black text-white rounded-full font-display font-bold tracking-widest text-[9px] translate-y-4 group-hover:translate-y-0 transition-all delay-100">
                voir le projet
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
