/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'accueil', href: '#' },
  { name: 'expertises', href: '#services' },
  { name: 'portfolio', href: '#portfolio' },
  { name: 'faq', href: '#faq' },
  { name: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-[#020617] py-4 border-b border-white/10" : "bg-transparent py-8"
    )}>
      <div className="max-w-[1720px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl font-black tracking-tighter">
            nexora<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-display font-bold text-[9px] hover:bg-primary transition-all group"
          >
            <ShoppingBag className="w-4 h-4" />
            devis gratuit
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white hover:text-primary transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#020617] flex flex-col items-center justify-center p-8"
          >
            <button
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex flex-col items-center gap-8 md:gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl md:text-4xl font-black tracking-tighter hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-redox mt-8"
              >
                devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
