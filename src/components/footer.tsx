'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants';
import { ArrowUp } from 'lucide-react';
import { EASE } from './ui/Reveal';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="shell">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center justify-between gap-8 py-14 sm:flex-row sm:py-16"
        >
          <span className="font-mono text-lg font-medium sm:text-xl">
            <span className="text-[hsl(var(--accent))]">A.Jutt</span>
            <span className="text-muted-foreground">._</span>
          </span>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={`Social link ${index + 1}`}
                className="icon-btn"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="icon-btn"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="rule" />

        {/* Bottom row */}
        <div className="py-8">
          <p className="text-center font-mono text-[0.7rem] leading-relaxed text-muted-foreground/60 sm:text-xs">
            © 2026 Abdullah Jutt • Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
