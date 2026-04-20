/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'mapscrapper',
    category: 'extraction de données / saas',
    img: 'https://p16-ais-va.byteimg.com/obj/ais-platform-va/f61f7d45-562a-41e9-9e79-563d4107775b',
  },
  {
    title: 'avihealth',
    category: 'gestion agricole / mobile app',
    img: 'https://p16-ais-va.byteimg.com/obj/ais-platform-va/9e5c464c-f089-482a-a9e9-f6cb19369792',
  },
  {
    title: 'seteff boutique',
    category: 'e-commerce / créatif',
    img: 'https://p16-ais-va.byteimg.com/obj/ais-platform-va/289e6eb1-c662-4354-933e-117562095cc1',
  },
  {
    title: 'votre projet ici',
    category: 'stratégie / design',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background border-t border-white/20">
      <div className="grid-layout">
        <div className="col-span-12 lg:col-span-8 grid-cell space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-display font-bold tracking-[0.3em] text-[10px] lowercase">
              notre collection
            </span>
          </div>
          <h2 className="text-display lowercase italic">
            nos réalisations <br/> <span className="text-outline-dark lg:text-outline italic">marquantes</span>
          </h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group relative overflow-hidden border-b border-white/20 even:border-l border-white/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  initial={{ filter: 'grayscale(100%)' }}
                  whileInView={{ filter: 'grayscale(0%)' }}
                  viewport={{ amount: 0.7 }}
                  className="w-full h-full object-cover transition-all duration-1000 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-105"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.8 }}
                  className="absolute inset-0 bg-primary/40 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 text-black"
                >
                  <span className="font-display font-black text-[10px] tracking-widest mb-4 opacity-50 lowercase">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-4xl font-display font-black tracking-tighter">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
