/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'stratégie',
    desc: 'nous analysons votre marché et définissons une feuille de route précise pour atteindre vos objectifs business.'
  },
  {
    num: '02',
    title: 'design',
    desc: 'création d\'identités visuelles fortes et d\'interfaces utilisateur intuitives qui captivent votre audience.'
  },
  {
    num: '03',
    title: 'développement',
    desc: 'codage de haute performance avec les meilleures technologies pour garantir rapidité et sécurité.'
  },
  {
    num: '04',
    title: 'lancement',
    desc: 'déploiement méticuleux et optimisation continue pour assurer le succès de votre projet sur le long terme.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-background border-t border-white/20">
      <div className="grid-layout">
        <div className="col-span-12 lg:col-span-8 grid-cell space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-display font-bold tracking-[0.3em] text-[12px] lowercase italic">
              notre méthodologie
            </span>
          </div>
          <h2 className="text-display lowercase italic">
            un processus <span className="text-outline-dark lg:text-outline italic">rigoureux</span>
          </h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 border-b border-white/25 border-r border-white/25 last:border-r-0 lg:border-b-0 space-y-12 group hover:bg-white/[0.02] transition-colors"
            >
              <motion.span 
                initial={{ color: 'rgba(0, 240, 255, 0.2)' }}
                whileInView={{ color: 'rgba(0, 240, 255, 1)' }}
                transition={{ duration: 1 }}
                className="font-display italic text-6xl font-black transition-colors"
              >
                {step.num}
              </motion.span>
              <div className="space-y-6">
                <h3 className="font-display italic text-3xl font-black lowercase text-white">
                  {step.title}
                </h3>
                <p className="text-white/50 font-medium text-base leading-relaxed lowercase">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
