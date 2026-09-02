'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToSection } from '@/utils/scrollUtils';
import { EASE } from './ui/Reveal';

const pad = (n: number) => String(n + 1).padStart(2, '0');

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full origin-left bg-[hsl(var(--accent))]"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ type: 'spring', stiffness: 120, damping: 30 }}
        />
      </div>

      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="fixed top-[2px] left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'hsl(var(--background) / 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--border) / 0.5)' : '1px solid transparent',
        }}
      >
        {/* Full-width inner wrapper — edge to edge */}
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex h-14 sm:h-16 items-center justify-between">

            {/* ===== Logo ===== */}
            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="shrink-0 font-display text-[1.05rem] font-bold tracking-tight text-foreground"
            >
              <span className="text-[hsl(var(--accent))]">A</span>
              <span className="hidden xs:inline">bdullah</span>
              <span className="text-muted-foreground">.Jutt</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-[hsl(var(--accent))]"
              >
                _
              </motion.span>
            </button>

            {/* ===== Desktop nav — spread evenly ===== */}
            <nav
              className="hidden lg:flex items-center justify-center flex-1 mx-6 xl:mx-10"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name}`}
                    className={`relative flex items-baseline gap-1.5 rounded-lg px-3 xl:px-4 py-2 transition-all duration-300 ${
                      isActive
                        ? 'text-[hsl(var(--accent))]'
                        : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                    }`}
                  >
                    <span className={`font-mono text-[0.55rem] font-medium ${
                      isActive ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--muted-foreground)/0.4)]'
                    }`}>
                      {pad(index)}
                    </span>
                    <span className={`text-[0.6rem] ${
                      isActive ? 'text-[hsl(var(--accent)/0.4)]' : 'text-[hsl(var(--muted-foreground)/0.25)]'
                    }`}>
                      //
                    </span>
                    <span className="text-[0.72rem] font-medium uppercase tracking-[0.08em]">
                      {item.name}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 -z-10 rounded-lg"
                        style={{
                          background: 'hsl(var(--accent) / 0.08)',
                          border: '1px solid hsl(var(--accent) / 0.2)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* ===== Right side ===== */}
            <div className="shrink-0 flex items-center gap-2.5">
              <a
                href="mailto:abdullahjuttjutt910@gmail.com"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:scale-105"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent)/0.4)] hover:text-[hsl(var(--accent))]"
              >
                {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu — full width */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="lg:hidden overflow-hidden border-t border-[hsl(var(--border)/0.5)]"
              style={{ background: 'hsl(var(--background) / 0.95)', backdropFilter: 'blur(16px)' }}
            >
              <nav className="w-full px-4 sm:px-6 py-5" aria-label="Mobile navigation">
                <div className="grid grid-cols-2 gap-1">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.name;
                    return (
                      <motion.button
                        key={item.name}
                        type="button"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.03, ease: EASE }}
                        onClick={() => handleNavClick(item.href)}
                        className={`flex items-center gap-2.5 rounded-lg p-3 text-left transition-colors ${
                          isActive
                            ? 'bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]'
                            : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--foreground)/0.04)] hover:text-[hsl(var(--foreground))]'
                        }`}
                      >
                        <span className="font-mono text-[0.6rem] opacity-50">{pad(index)}</span>
                        <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em]">{item.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-[hsl(var(--border)/0.5)]">
                  <a
                    href="mailto:abdullahjuttjutt910@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] py-3 text-[0.8rem] font-semibold text-white"
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navigation;
