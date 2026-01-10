'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToExpertise = () => {
    const element = document.querySelector('#expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)
        `,
      }}
    >
      {/* Background Elements */}
      <div className="hero-background-pattern"></div>
      <div className="hero-tech-grid"></div>
      <div className="hero-diagonal-line"></div>
      <div className="hero-glow-orb"></div>
      <div className="hero-glow-orb-2"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-20">
        {/* Portrait Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start w-full lg:w-auto"
        >
          <div className="hero-portrait-frame w-[250px] h-[320px] sm:w-[320px] sm:h-[400px] lg:w-[420px] lg:h-[520px]">
            <div className="hero-portrait-inner">
              <Image
                src="/me.jpeg"
                alt="Abdullah Jutt"
                fill
                className="object-cover relative z-10"
                priority
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-hsl(var(--primary) / 0.1) z-20"></div>
            </div>
          </div>

          {/* Floating tech elements - hidden on mobile for cleaner look */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden sm:block absolute -top-6 -right-6 w-8 h-8 lg:w-12 lg:h-12 rounded-full opacity-70"
            style={{ backgroundColor: 'hsl(var(--accent))' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden sm:block absolute -bottom-6 -left-6 w-6 h-6 lg:w-8 lg:h-8 rounded-full opacity-50"
            style={{ backgroundColor: 'hsl(var(--primary))' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden sm:block absolute top-1/4 -left-6 lg:-left-8 w-3 h-3 lg:w-4 lg:h-4 rounded-full opacity-60"
            style={{ backgroundColor: 'hsl(var(--gold-accent))' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hidden sm:block absolute bottom-1/4 -right-6 lg:-right-8 w-4 h-4 lg:w-6 lg:h-6 rounded-full opacity-40"
            style={{ backgroundColor: 'hsl(var(--teal-light))' }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 max-w-3xl order-1 lg:order-2 text-center lg:text-left w-full lg:w-auto"
        >
          {/* Code-style prefix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'hsl(var(--accent))' }}
            ></div>
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: 'hsl(var(--accent))' }}
            >
              &gt; Abdullah_Jutt.portfolio
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-title"
          >
            Abdullah
            <br />
            Jutt
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-2"
          >
            <p className="hero-subtitle">SOFTWARE ENGINEER</p>
            <p
              className="hero-subtitle"
              style={{ color: 'hsl(var(--accent))' }}
            >
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
Architecting end-to-end applications with zero tolerance for inefficiency, weak design, or fragile code—only clean, scalable, and battle-tested systems. <br />
Owning architecture, implementation, and optimization across the stack while consistently delivering systems built to scale, survive, and dominate in production.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-cta mx-auto lg:mx-0 mt-6 sm:mt-8"
            onClick={scrollToExpertise}
          >
            <span className="text-sm sm:text-base">VIEW PORTFOLIO</span>
            <svg
              className="hero-cta-arrow w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-8"
      >
        <div
          className="flex flex-col items-center gap-1 sm:gap-2"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-6 sm:h-8"
            style={{ backgroundColor: 'hsl(var(--accent))' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
