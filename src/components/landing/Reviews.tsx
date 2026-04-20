/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const ratings = [
  { platform: 'google', score: '4.9/5', reviews: '124 avis', color: 'text-primary' },
  { platform: 'trustpilot', score: '4.8/5', reviews: '89 avis', color: 'text-primary' }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white text-black border-y border-black/10">
      <div className="grid-layout items-center">
        <div className="col-span-12 lg:col-span-6 grid-cell space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic font-black tracking-tighter lowercase">
            notre réputation, <br /> votre <span className="text-black/20">confiance</span>.
          </h2>
          <p className="text-black/50 font-medium max-w-md lowercase text-lg md:text-xl italic">
            ils nous font confiance pour la qualité de notre travail et notre engagement sans faille.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 grid-cell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ratings.map((rating, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-10 border border-black/5 bg-black/[0.02] rounded-3xl flex flex-col items-center text-center gap-6"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="font-display italic text-5xl font-black">
                    {rating.score}
                  </div>
                  <div className="font-display italic text-[13px] font-bold tracking-widest lowercase text-black/40">
                    sur {rating.platform} • {rating.reviews}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
