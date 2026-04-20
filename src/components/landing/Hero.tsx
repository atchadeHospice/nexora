/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        y: 200,
        opacity: 0,
        skewY: 10
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        stagger: 0.02,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
      }
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 text-center z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <span className="font-display font-black text-[10px] md:text-[12px] tracking-[0.5em] text-primary lowercase">
            nexora agence créative
          </span>
        </motion.div>

        <h1 className="text-display mb-16">
          <span className="block overflow-hidden pb-4">
            {splitText("transformez vos")}
          </span>
          <span className="block overflow-hidden py-4">
            {splitText("idées en succès")}
          </span>
          <span className="block overflow-hidden pt-4 text-outline">
             digitaux <span className="font-accent italic text-white lowercase">sur-mesure</span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/50 font-medium max-w-2xl mx-auto mb-16 text-base md:text-lg tracking-tight leading-relaxed"
        >
          agence web & mobile basée à paris, nous concevons votre site internet et vos applications mobiles sur-mesure, optimisés pour attirer et convertir vos clients.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <a href="#contact" className="btn-redox">
             demander un devis gratuit
          </a>
          <a href="#portfolio" className="btn-outline">
            notre portfolio
          </a>
        </motion.div>
      </div>

      {/* Decorative large text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none scale-[1.5]">
        <span className="font-display font-black text-[30vw] leading-none block whitespace-nowrap text-center lowercase">
          nexora agency
        </span>
      </div>
    </section>
  );
}
