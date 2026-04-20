/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-32 bg-white text-black">
      <div className="grid-layout">
        <div className="col-span-12 lg:col-span-10 grid-cell space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-black" />
            <span className="text-black font-display font-bold tracking-[0.3em] text-[10px] lowercase">
              contactez-nous
            </span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
            bâtissons <br/> votre <span className="text-black/10">succès</span>.
          </h2>
          
          <div className="pt-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
             <a href="mailto:hello@nexora.agency" className="font-display text-2xl md:text-4xl font-black tracking-tighter hover:text-primary transition-colors underline decoration-black/10 underline-offset-8">
               hello@nexora.agency
             </a>
             <a 
               href="https://wa.me/YOUR_NUMBER" 
               target="_blank"
               rel="noopener noreferrer"
               className="btn-redox bg-primary text-black px-12 py-8 md:px-16 md:py-10 text-lg md:text-2xl hover:bg-black hover:text-white transition-all shadow-[0_20px_50px_rgba(0,240,255,0.3)] border-2 border-black/5"
             >
               discuter sur whatsapp
             </a>
          </div>
        </div>

        <div className="col-span-12 grid-cell pb-0">
           <div className="w-full h-px bg-black/5" />
        </div>
      </div>
    </section>
  );
}

function ModernField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-6 lowercase">
      <label className="font-display text-[10px] font-bold tracking-[0.2em] text-black/30">{label}</label>
      <input
        type={type}
        className="w-full bg-transparent border-b border-black/10 py-6 text-xl font-bold font-display outline-none focus:border-black transition-all tracking-tighter placeholder:text-black/5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
