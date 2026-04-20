/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 border-t border-white/10 bg-background overflow-hidden">
      <div className="grid-layout">
        <div className="col-span-12 grid-cell py-24 mb-12">
          <h2 className="text-display text-outline select-none text-center opacity-10 leading-[0.7] -mb-24">
            nexora agence
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6 grid-cell space-y-12">
          <div className="space-y-6">
            <h3 className="font-display text-5xl font-black tracking-tighter italic">nexora agence.</h3>
            <p className="text-sm font-bold text-white/30 tracking-[0.2em] max-w-sm leading-relaxed lowercase italic">
               conception d'actifs numériques de nouvelle génération. 
               passion, performance et précision.
            </p>
          </div>
          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 font-display text-sm font-bold tracking-[0.4em] text-primary hover:text-white transition-colors lowercase">
            demander un devis
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="col-span-12 md:col-span-6 grid-cell flex flex-col items-end justify-between py-16 lowercase italic">
          <div className="flex gap-12">
            {['instagram', 'twitter', 'linkedin'].map(link => (
              <a key={link} href="#" className="font-display text-sm font-bold tracking-[0.3em] text-white/30 hover:text-white transition-all duration-300">
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-end gap-2 text-right opacity-30">
             <span className="font-display text-sm font-bold tracking-[0.4em]">© 2026 nexora agence</span>
             <span className="font-display text-xs font-bold tracking-[0.4em]">tous droits réservés</span>
          </div>
        </div>

        <div className="col-span-12 grid-cell pt-12 flex justify-center border-t border-white/5 opacity-10">
           <span className="font-display text-[12vw] font-black tracking-tighter whitespace-nowrap lowercase">nexora agence</span>
        </div>
      </div>
    </footer>
  );
}
