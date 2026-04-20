/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const images = [
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800', title: 'Logique Cosmique' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800', title: 'Nœuds Souverains' },
  { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800', title: 'Infini des Données' },
  { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', title: 'Systèmes Hérités' },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    gsap.to(containerRef.current, {
      x: () => -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth - windowWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-muted/10 flex items-center">
      <div className="grid-layout absolute top-32 left-0 w-full pointer-events-none z-20">
        <div className="col-span-12 grid-cell">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Flux Visuel
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold tracking-tight mt-4">
            L'Axe <span className="text-primary">Horizontal</span>.
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-12 px-[10vw] flex-nowrap items-center h-[60vh]">
        {images.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 w-[80vw] md:w-[40vw] h-full overflow-hidden group">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display text-[12vw] font-black text-outline group-hover:text-white group-hover:scale-110 transition-all duration-1000 uppercase leading-none text-center">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
