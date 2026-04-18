'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToSection } from '@/utils/scrollUtils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full origin-left"
          style={{
            background:
              'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 50%, hsl(var(--accent)) 100%)',
            scaleX: scrollProgress / 100,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-[2px] left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'hsl(var(--background) / 0.85)'
            : 'hsl(var(--background) / 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid hsl(var(--border) / 0.15)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavClick('#home')}
              className="font-mono font-bold text-base sm:text-lg"
              style={{ color: 'hsl(var(--accent))' }}
            >
              <span className="hidden xs:inline">Abdullah</span>
              <span className="xs:hidden">A</span>
              <span style={{ color: 'hsl(var(--foreground))' }}>.Jutt</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ color: 'hsl(var(--accent))' }}
              >
                _
              </motion.span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.name;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                    className="relative px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300"
                    style={{
                      color: isActive
                        ? 'hsl(var(--accent))'
                        : 'hsl(var(--muted-foreground))',
                      backgroundColor: isActive
                        ? 'hsl(var(--accent) / 0.08)'
                        : 'transparent',
                    }}
                    whileHover={{ y: -1 }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'hsl(var(--foreground))';
                        e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.04)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span className="uppercase tracking-wider text-xs">
                      {item.name}
                    </span>

                    {/* Active dot indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navDot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'hsl(var(--accent))' }}
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{
                  color: 'hsl(var(--foreground))',
                  background: isOpen ? 'hsl(var(--accent) / 0.08)' : 'transparent',
                  border: isOpen ? '1px solid hsl(var(--accent) / 0.15)' : '1px solid transparent',
                }}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div
                  className="py-3 space-y-1 border-t"
                  style={{ borderColor: 'hsl(var(--border) / 0.1)' }}
                >
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.name;
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handleNavClick(item.href)}
                        aria-label={`Navigate to ${item.name} section`}
                        className="block w-full text-left px-4 py-3 rounded-xl text-sm font-mono transition-all duration-300"
                        style={{
                          color: isActive
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--muted-foreground))',
                          backgroundColor: isActive
                            ? 'hsl(var(--accent) / 0.08)'
                            : 'transparent',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {isActive && (
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: 'hsl(var(--accent))' }}
                            />
                          )}
                          <span className="uppercase tracking-wider text-xs">
                            {item.name}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
