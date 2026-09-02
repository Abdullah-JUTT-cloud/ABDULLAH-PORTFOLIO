'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowRight, Play, Github, Linkedin, Mail } from 'lucide-react';
import { EASE } from './ui/Reveal';

const SOCIALS = [
  { icon: Github, href: 'https://github.com/Abdullah-JUTT-cloud', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:abdullahjuttjutt910@gmail.com', label: 'Email' },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax on the portrait + orb
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '26%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '10%']);

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      <div className="grid-backdrop" aria-hidden />

      {/* Abstract gradient orb sitting behind the portrait */}
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="orb right-[-18%] top-[6%] h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem]"
      >
        <div
          className="h-full w-full rounded-full opacity-[0.5]"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, hsl(var(--accent) / 0.5), hsl(var(--primary) / 0.35), transparent 62%, hsl(var(--accent) / 0.35))',
          }}
        />
      </motion.div>
      <div
        aria-hidden
        className="orb left-[-20%] bottom-[-10%] h-[26rem] w-[26rem] opacity-40"
        style={{ background: 'hsl(var(--primary) / 0.35)' }}
      />

      <div className="shell relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-y-14 lg:gap-x-12 items-center">
          {/* ---------- Copy ---------- */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--foreground)/0.03)] px-4 py-2 mb-9"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            {/* Wordmark */}
            <h1 className="wordmark text-[clamp(3.4rem,14vw,10rem)]">
              {['Abdullah', 'Jutt'].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className={`block ${i === 1 ? 'text-[hsl(var(--accent))]' : 'text-foreground'}`}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.95, ease: EASE, delay: 0.2 + i * 0.09 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-muted-foreground">
                Software Engineer
              </span>
              <span className="h-1 w-1 rounded-full bg-[hsl(var(--accent))]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              Architecting end-to-end applications with zero tolerance for
              inefficiency — only clean, scalable, and battle-tested systems.
              Delivering solutions built to scale and dominate in production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection('#work')}
                className="btn btn-solid group"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#intro')}
                className="btn btn-ghost group"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--accent)/0.14)]">
                  <Play
                    className="ml-[1px] h-2.5 w-2.5 text-[hsl(var(--accent))]"
                    fill="currentColor"
                  />
                </span>
                Watch My Intro
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
              className="mt-12 flex items-center gap-3"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground/50">
                Find me
              </span>
              <span className="h-px w-8 bg-[hsl(var(--border))]" />
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="icon-btn"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ---------- Portrait ---------- */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring behind the portrait */}
              {!reduceMotion && (
                <motion.div
                  aria-hidden
                  className="absolute -inset-8 rounded-full border border-dashed border-[hsl(var(--accent)/0.18)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
                />
              )}

              <div className="relative w-[16rem] sm:w-[20rem] lg:w-[23rem] aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[hsl(var(--border))]">
                <Image
                  src="/me.jpeg"
                  alt="Abdullah Jutt - Full Stack Developer"
                  fill
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 23rem"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, hsl(var(--background) / 0.7) 0%, transparent 45%)',
                  }}
                />
              </div>

              {/* Floating accent dots */}
              {!reduceMotion && (
                <>
                  <motion.span
                    aria-hidden
                    className="absolute -right-3 top-8 h-6 w-6 rounded-full bg-[hsl(var(--accent))] opacity-80"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.span
                    aria-hidden
                    className="absolute -left-2 bottom-14 h-3.5 w-3.5 rounded-full bg-[hsl(var(--primary))] opacity-70"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection('#intro')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground/50">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[hsl(var(--accent)/0.3)] pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-[hsl(var(--accent))]"
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
