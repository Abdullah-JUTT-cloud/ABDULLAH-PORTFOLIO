'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from './Reveal';

type SectionHeaderProps = {
  /** Small mono eyebrow label, e.g. "Expertise" */
  eyebrow: string;
  /** Section index used for the `03 //` marker */
  index?: string;
  /** First line of the large heading */
  titleTop: string;
  /** Second line of the large heading — rendered in the accent colour */
  titleBottom?: string;
  /** Optional supporting paragraph */
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/**
 * The one heading pattern used across every section:
 * eyebrow label + oversized two-line display heading + optional lede.
 */
const SectionHeader = ({
  eyebrow,
  index,
  titleTop,
  titleBottom,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) => {
  const centered = align === 'center';

  return (
    <header
      className={`${centered ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}
      >
        {index && (
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground/60">
            {index} //
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-10 sm:w-16 bg-[hsl(var(--accent)/0.45)]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.06 }}
        className="wordmark text-[clamp(2.6rem,7.5vw,5.6rem)]"
      >
        <span className="block text-foreground">{titleTop}</span>
        {titleBottom && (
          <span className="block text-[hsl(var(--accent))]">{titleBottom}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
          className={`mt-7 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
};

export default SectionHeader;
