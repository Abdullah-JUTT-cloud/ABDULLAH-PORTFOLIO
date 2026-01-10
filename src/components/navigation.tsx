'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToSection } from '@/utils/scrollUtils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setMounted(true);
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
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            background:
              'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 50%, hsl(var(--accent)) 100%)',
            scaleX: scrollProgress / 100,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />

        {/* Moving Scroll Icon */}
        <motion.div
          className="scroll-icon"
          style={{
            left: `${scrollProgress}%`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        >
          <ChevronDown
            className="w-2.5 h-2.5"
            style={{
              transform: `rotate(${scrollProgress * 3.6}deg)`,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-1 left-0 right-0 z-50 bg-hsl(var(--background) / 0.8) backdrop-blur-xl border-b border-hsl(var(--border) / 0.2)"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="navbar-logo text-base sm:text-lg md:text-xl font-mono font-medium"
              style={{ color: 'hsl(var(--accent))' }}
            >
              <span className="hidden xs:inline">AbdullahJutt</span>
              <span className="xs:hidden">A.Jutt</span>
              <span style={{ color: 'hsl(var(--primary))' }}>._</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -1 }}
                  onClick={() => handleNavClick(item.href)}
                  aria-label={`Navigate to ${item.name} section`}
                  className={`relative text-sm font-mono transition-colors duration-300 ${
                    activeSection === item.name
                      ? 'text-hsl(var(--accent))'
                      : 'text-hsl(var(--muted-foreground)) hover:text-hsl(var(--foreground))'
                  }`}
                  style={{
                    color:
                      activeSection === item.name
                        ? 'hsl(var(--accent))'
                        : 'hsl(var(--muted-foreground))',
                  }}
                >
                  <span className="uppercase tracking-wide">{item.name}</span>

                  {/* Active indicator */}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: 'hsl(var(--accent))' }}
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-hsl(var(--foreground)) hover:text-hsl(var(--accent)) transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-hsl(var(--border) / 0.2)"
            >
              <div className="py-3 sm:py-4 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                    className={`block w-full text-left px-4 py-2.5 sm:py-3 text-sm font-mono transition-colors duration-300 ${
                      activeSection === item.name
                        ? 'text-hsl(var(--accent)) bg-hsl(var(--primary) / 0.1)'
                        : 'text-hsl(var(--muted-foreground)) hover:text-hsl(var(--foreground)) hover:bg-hsl(var(--accent) / 0.05)'
                    }`}
                    style={{
                      color:
                        activeSection === item.name
                          ? 'hsl(var(--accent))'
                          : 'hsl(var(--muted-foreground))',
                      backgroundColor:
                        activeSection === item.name
                          ? 'hsl(var(--primary) / 0.1)'
                          : 'transparent',
                    }}
                  >
                    <span className="uppercase tracking-wide">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
