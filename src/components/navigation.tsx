'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleReboot = () => {
    try {
      localStorage.removeItem('abdullah-portfolio-boot-seen');
    } catch {
      // Storage fallback
    }
    window.dispatchEvent(new CustomEvent('trigger-boot-sequence'));
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
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed top-[2px] left-0 right-0 z-50 transition-colors duration-500"
        style={{
          background: scrolled ? 'hsl(var(--background) / 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: `1px solid ${
            scrolled ? 'hsl(var(--border) / 0.6)' : 'transparent'
          }`,
        }}
      >
        <div className="shell">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Wordmark */}
            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="font-mono text-sm sm:text-base font-medium tracking-tight text-foreground"
            >
              <span className="text-[hsl(var(--accent))]">A</span>
              <span className="hidden xs:inline">bdullah</span>
              <span className="text-muted-foreground">.Jutt</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.3, repeat: Infinity }}
                className="text-[hsl(var(--accent))]"
              >
                _
              </motion.span>
            </button>

            {/* Desktop nav — numbered section markers */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                    className={`group relative rounded-full px-3 py-2 font-mono text-[0.7rem] tracking-[0.12em] transition-colors duration-300 ${
                      isActive
                        ? 'text-[hsl(var(--accent))]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="opacity-45 mr-1.5">{pad(index)}</span>
                    <span className="opacity-45 mr-1">//</span>
                    <span className="uppercase">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 -z-10 rounded-full bg-[hsl(var(--accent)/0.1)] ring-1 ring-[hsl(var(--accent)/0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReboot}
                title="Replay System Boot Sequence"
                aria-label="Replay System Boot Sequence"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.08)] px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[hsl(var(--accent))] transition-colors hover:bg-[hsl(var(--accent)/0.16)]"
              >
                <Terminal className="h-3.5 w-3.5" />
                Reboot
              </button>

              <button
                type="button"
                onClick={handleReboot}
                aria-label="Replay System Boot Sequence"
                className="sm:hidden icon-btn h-10 w-10 text-[hsl(var(--accent))]"
              >
                <Terminal className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                className="lg:hidden icon-btn h-10 w-10 text-foreground"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile overlay menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-x-0 top-[calc(4rem+2px)] bottom-0 z-40 overflow-y-auto border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]"
            >
              <nav className="shell py-8" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.name;
                  return (
                    <motion.button
                      key={item.name}
                      type="button"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.04, ease: EASE }}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex w-full items-baseline gap-4 border-b border-[hsl(var(--border))] py-5 text-left ${
                        isActive ? 'text-[hsl(var(--accent))]' : 'text-foreground'
                      }`}
                    >
                      <span className="font-mono text-[0.7rem] opacity-45">
                        {pad(index)} //
                      </span>
                      <span className="wordmark text-3xl capitalize">
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navigation;
