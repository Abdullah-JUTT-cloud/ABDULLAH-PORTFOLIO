'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EASE } from '../ui/Reveal';

const FACTS = [
  { value: '8', label: 'Shipped projects' },
  { value: '2+', label: 'Years building' },
  { value: '1', label: 'Live SaaS in production' },
];

const item = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-24 lg:pt-32">
      {/* Single restrained glow — no orbs, no grid noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] h-[30rem] w-[30rem] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'hsl(var(--accent))' }}
      />

      <div className="shell relative z-10">
        <motion.p {...item(0.05)} className="eyebrow">
          Lahore, Pakistan — open to full-time &amp; freelance
        </motion.p>

        <motion.h1
          {...item(0.15)}
          className="display-lg mt-7 text-[clamp(2.5rem,7.2vw,4.6rem)] text-foreground"
        >
          I build software that ships —
          <br />
          and I know <span className="display-flourish">how it breaks.</span>
        </motion.h1>

        <motion.p
          {...item(0.3)}
          className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base"
        >
          Full-stack engineer working across React, Next.js, Node.js, and Spring
          Boot — currently shipping{' '}
          <a
            href="https://medalerto.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            MedAlerto
          </a>
          , a live healthcare SaaS, while training daily in offensive security.
          Clean architecture, honest timelines, systems built to hold up in
          production.
        </motion.p>

        <motion.div {...item(0.45)} className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn btn-solid group">
            Selected Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <Link href="/#contact" className="btn btn-ghost group">
            Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Fact row */}
        <motion.dl
          {...item(0.6)}
          className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-[hsl(var(--border))] pt-8"
        >
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="display-lg text-3xl text-[hsl(var(--accent))]">
                {fact.value}
              </dt>
              <dd className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                {fact.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
