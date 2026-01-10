'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-16"
        >
          <SectionHeader
            title="Get In Touch"
            description="Have an exciting project you need help with? I'm always interested in new opportunities and would love to hear from you!"
            indicator="CONTACT"
            isInView={isInView}
            className="text-center"
          />

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Email Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="expertise-card group relative p-6 sm:p-8 lg:p-12"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="expertise-icon relative">
                  <Mail
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    style={{ color: 'hsl(var(--accent))' }}
                  />
                  <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-left"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    Email Contact
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-left"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    Direct Communication
                  </p>
                </div>
              </div>
              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-left"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Send me an email for project inquiries, collaborations, or just
                to say hello.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-foreground uppercase tracking-wider mb-3 sm:mb-4 text-center">
                  Contact
                </p>
                <a
                  href="mailto:abdullahjuttjutt910@gmail.com"
                  className="block w-full px-4 py-3 rounded-lg bg-background/50 border border-primary text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 text-sm text-center font-medium"
                >
                  Email
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="expertise-card group relative p-6 sm:p-8 lg:p-12"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="expertise-icon relative">
                  <Linkedin
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    style={{ color: 'hsl(var(--accent))' }}
                  />
                  <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-left"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    LinkedIn Network
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-left"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    Professional Connect
                  </p>
                </div>
              </div>
              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-left"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Connect with me on LinkedIn for professional opportunities and
                networking.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-foreground uppercase tracking-wider mb-3 sm:mb-4 text-center">
                  Connect
                </p>
                <a
                  href="https://www.linkedin.com/in/muhammad-abdullah-757aa2287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 rounded-lg bg-background/50 border border-primary text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 text-sm text-center font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* GitHub Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="expertise-card group relative p-6 sm:p-8 lg:p-12"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="expertise-icon relative">
                  <Github
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    style={{ color: 'hsl(var(--accent))' }}
                  />
                  <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-left"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    GitHub Code
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-left"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    Repository Access
                  </p>
                </div>
              </div>
              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-left"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Check out my projects and contributions on GitHub. These are my
                some masterpieces.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-foreground uppercase tracking-wider mb-3 sm:mb-4 text-center">
                  Repository
                </p>
                <a
                  href="https://github.com/Abdullah-JUTT-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 rounded-lg bg-background/50 border border-primary text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 text-sm text-center font-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
