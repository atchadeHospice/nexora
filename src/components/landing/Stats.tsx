/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const stats = [
  { value: '15+', label: 'ans d’expérience' },
  { value: '300+', label: 'projets livrés' },
  { value: '100+', label: 'clients satisfaits' },
  { value: '24/7', label: 'support réactif' },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-background py-12 md:py-24 overflow-hidden">
      {/* Row 1: Scrolling Left */}
      <div className="flex whitespace-nowrap mb-8 md:mb-16">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 md:gap-24 pr-12 md:pr-24"
        >
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="font-display italic text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                {stat.value}
              </div>
              <div className="font-display text-[12px] md:text-[16px] font-bold tracking-[0.2em] text-white/40 lowercase italic">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 md:gap-24 pr-12 md:pr-24"
        >
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="font-display italic text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-outline opacity-50">
                {stat.value}
              </div>
              <div className="font-display text-[12px] md:text-[16px] font-bold tracking-[0.2em] text-white/20 lowercase italic">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
