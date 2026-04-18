'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

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
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(var(--background)) 40%, hsl(0 0% 5%) 100%)`,
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large gradient orbs */}
      <div
        className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-20 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
        style={{ background: 'hsl(var(--primary))' }}
      />

      {/* Floating accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.2), transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: '#22c55e' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: '#22c55e' }}
                />
              </div>
              <span
                className="text-xs sm:text-sm font-mono tracking-wider"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6"
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>Abdullah</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Jutt
              </span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className="text-sm sm:text-base font-mono uppercase tracking-[0.15em]"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Software Engineer
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'hsl(var(--accent))' }}
              />
              <span
                className="text-sm sm:text-base font-mono uppercase tracking-[0.15em]"
                style={{ color: 'hsl(var(--accent))' }}
              >
                Full Stack Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm sm:text-base leading-relaxed max-w-lg mb-8"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Architecting end-to-end applications with zero tolerance for inefficiency — only clean, scalable, and battle-tested systems. Delivering solutions built to scale and dominate in production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToExpertise}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  color: 'hsl(var(--background))',
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </motion.button>


            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4"
            >
              <span
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}
              >
                Find me
              </span>
              <div
                className="h-px w-6"
                style={{ background: 'hsl(var(--border))' }}
              />
              {[
                { icon: Github, href: 'https://github.com/Abdullah-JUTT-cloud', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abdullahjuttjutt910@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'hsl(var(--accent) / 0.06)',
                    border: '1px solid hsl(var(--accent) / 0.1)',
                    color: 'hsl(var(--muted-foreground))',
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
                    e.currentTarget.style.color = 'hsl(var(--accent))';
                    e.currentTarget.style.boxShadow = '0 4px 15px hsl(var(--accent) / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.1)';
                    e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind portrait */}
              <div
                className="absolute inset-0 blur-3xl opacity-15 rounded-full scale-110"
                style={{
                  background: `radial-gradient(circle, hsl(var(--accent) / 0.5), transparent 70%)`,
                }}
              />

              {/* Portrait container */}
              <motion.div
                className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[400px] lg:h-[500px]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {/* Decorative border frame */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.3))`,
                    padding: '2px',
                  }}
                >
                  <div
                    className="w-full h-full rounded-2xl"
                    style={{ background: 'hsl(var(--background))' }}
                  />
                </div>

                {/* Image */}
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden">
                  <Image
                    src="/me.jpeg"
                    alt="Abdullah Jutt - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Bottom gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, hsl(var(--background) / 0.6) 0%, transparent 40%)`,
                    }}
                  />
                </div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                    opacity: 0.8,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                  style={{
                    background: 'hsl(var(--accent))',
                    opacity: 0.5,
                  }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />

                {/* Experience badge */}
                <motion.div
                  className="absolute -right-4 sm:-right-6 bottom-20 sm:bottom-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div
                    className="px-4 py-3 rounded-xl backdrop-blur-md"
                    style={{
                      background: 'hsl(var(--background) / 0.85)',
                      border: '1px solid hsl(var(--accent) / 0.2)',
                      boxShadow: '0 10px 30px hsl(var(--background) / 0.5)',
                    }}
                  >
                    <div
                      className="text-xl sm:text-2xl font-bold font-mono"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      2+
                    </div>
                    <div
                      className="text-[10px] sm:text-xs font-mono uppercase tracking-wider"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      Years Exp
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToExpertise}
          whileHover={{ y: -2 }}
        >
          <span
            className="text-[10px] font-mono uppercase tracking-[0.2em]"
            style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1.5px solid hsl(var(--accent) / 0.3)' }}
          >
            <motion.div
              className="w-1 h-1.5 rounded-full"
              style={{ backgroundColor: 'hsl(var(--accent))' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
