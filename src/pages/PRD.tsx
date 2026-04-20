/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ExternalLink } from 'lucide-react';

function Section({ title, tag, children }: { title: string; tag?: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden mb-8 bg-white/[0.02]">
      <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {tag && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase tracking-widest">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-display font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-white/5 last:border-0 items-start">
      <div className="text-sm font-semibold text-white/40 uppercase tracking-wider">{label}</div>
      <div className="md:col-span-2 text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function PRD() {
  return (
    <div className="min-h-screen bg-[#0C0C14] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Documentation Technique
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-6">
            Nexora <span className="text-white/20">—</span> PRD v1.0
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
            Ce document définit les spécifications techniques et les objectifs stratégiques pour la refonte de la plateforme Nexora.
          </p>
        </header>

        <Section title="Vision Générale" tag="Core">
          <Row label="Objectif">
            Fournir une expérience digitale immersive qui convertit les prospects en clients haut de gamme pour l'agence Nexora.
          </Row>
          <Row label="Public Cible">
            Startups en croissance, PME innovantes, Grands Comptes en quête de modernisation.
          </Row>
        </Section>

        <Section title="Identité Visuelle" tag="Design">
          <Row label="Typographie">
            Syne pour les titres (Weights 400-800), Inter pour le corps de texte.
          </Row>
          <Row label="Palette">
            Primary: Violet (#8B5CF6), Background: Deep Dark (#0C0C14), Alt: White Slate (#F5F5FA).
          </Row>
          <Row label="Aesthetic">
            Glassmorphism, High-contrast, Minimalist luxury.
          </Row>
        </Section>

        <Section title="Architecture" tag="Tech Stack">
          <Row label="Frontend">
            React 18, Vite, TypeScript, Tailwind CSS v4, Framer Motion.
          </Row>
          <Row label="Composants">
            Navbar, Hero, Stats, Services, WhyUs, Portfolio, FAQ, Contact Form.
          </Row>
        </Section>

        <footer className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
          <div className="text-white/20 text-xs uppercase tracking-widest font-mono">Nexora Research Lab © 2026</div>
          <a href="/" className="text-primary text-xs font-bold hover:underline flex items-center gap-2">
            Retour au site vitrine <ChevronRight className="w-3 h-3" />
          </a>
        </footer>
      </div>
    </div>
  );
}
