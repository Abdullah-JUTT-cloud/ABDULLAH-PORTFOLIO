'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SOCIAL_LINKS } from '@/constants';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(0 0% 3%) 100%)`,
        borderTop: '1px solid hsl(var(--border) / 0.1)',
      }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="text-lg sm:text-xl font-mono font-bold"
              style={{ color: 'hsl(var(--accent))' }}
            >
              A.Jutt
              <span style={{ color: 'hsl(var(--primary))' }}>._</span>
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'hsl(var(--accent) / 0.06)',
                  border: '1px solid hsl(var(--accent) / 0.1)',
                  color: 'hsl(var(--muted-foreground))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.boxShadow = '0 4px 15px hsl(var(--accent) / 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.1)';
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: 'hsl(var(--accent) / 0.06)',
              border: '1px solid hsl(var(--accent) / 0.1)',
              color: 'hsl(var(--muted-foreground))',
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
              e.currentTarget.style.color = 'hsl(var(--accent))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.1)';
              e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
            }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.15), transparent)`,
          }}
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-xs font-mono flex items-center gap-1.5"
            style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}
          >
            © {currentYear} Abdullah Jutt • Built with
            <Heart className="w-3 h-3 inline" style={{ color: 'hsl(var(--accent) / 0.5)' }} />
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: 'hsl(var(--muted-foreground) / 0.3)' }}
          >
            Next.js • Tailwind CSS • Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
