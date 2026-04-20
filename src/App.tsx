/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '@/src/components/landing/Navbar';
import Hero from '@/src/components/landing/Hero';
import Stats from '@/src/components/landing/Stats';
import Services from '@/src/components/landing/Services';
import Portfolio from '@/src/components/landing/Portfolio';
import Process from '@/src/components/landing/Process';
import Reviews from '@/src/components/landing/Reviews';
import Testimonials from '@/src/components/landing/Testimonials';
import Faq from '@/src/components/landing/Faq';
import Contact from '@/src/components/landing/Contact';
import Footer from '@/src/components/landing/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white relative">
      <div className="grid-lines" />
      <div className="noise-overlay" />
      
      <div className="scroll-progress">
        <motion.div className="scroll-progress-bar h-full" style={{ scaleY }} />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Reviews />
        <Testimonials />
        <Portfolio />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
