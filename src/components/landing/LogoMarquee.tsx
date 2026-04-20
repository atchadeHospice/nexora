/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const clients = [
  'Aura', 'Titan', 'Nebula', 'Helix', 'Quantum', 'Vortex', 
  'Sovereign', 'Core', 'Infinity', 'Matrix', 'Nexus', 'Prime'
];

export default function LogoMarquee() {
  return (
    <section className="py-12 border-b border-white/5 bg-background">
      <div className="flex items-center overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-24 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex items-center gap-24">
              <span className="font-display text-4xl lg:text-7xl font-black text-outline group-hover:text-white transition-all duration-700 cursor-default tracking-tighter uppercase">
                {client}
              </span>
              <div className="w-2 h-2 bg-primary/20 group-hover:bg-primary transition-colors rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
