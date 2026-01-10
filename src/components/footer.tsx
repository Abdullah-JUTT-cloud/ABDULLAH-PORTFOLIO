'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 border-t border-hsl(var(--border) / 0.2)">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          {/* Social links */}
          <div className="flex items-center justify-center space-x-6 sm:space-x-8">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="transition-all duration-300 hover:drop-shadow-lg"
                style={{ color: social.color }}
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-hsl(var(--muted-foreground)) font-mono px-4">
            © {currentYear} Abdullah Jutt • All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
