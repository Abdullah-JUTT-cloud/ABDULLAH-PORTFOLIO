'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  MapPin,
  Phone,
  Copy,
  Check,
} from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      cta: 'Send Email',
      description: 'Best for project inquiries & collaborations',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Muhammad Abdullah',
      href: CONTACT_INFO.linkedin,
      cta: 'Connect',
      description: 'Professional networking & opportunities',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Abdullah-JUTT-cloud',
      href: CONTACT_INFO.github,
      cta: 'View Profile',
      description: 'Open source projects & contributions',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 4%) 100%)`,
      }}
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse, hsl(var(--accent)), hsl(var(--primary)), transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* ===== HEADER ===== */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
              <span
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em]"
                style={{ color: 'hsl(var(--accent))' }}
              >
                Contact
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>Let&apos;s </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Work Together
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-xl mx-auto mb-2"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities.
            </motion.p>
          </div>

          {/* ===== MAIN CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 mb-16 sm:mb-20">
            {/* Left - Big CTA card */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className="relative rounded-2xl p-8 sm:p-10 h-full overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent) / 0.08), hsl(var(--primary) / 0.05))`,
                  border: '1px solid hsl(var(--accent) / 0.15)',
                }}
              >
                {/* Animated gradient border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: 'hsl(var(--accent) / 0.1)',
                      border: '1px solid hsl(var(--accent) / 0.2)',
                    }}
                    whileHover={{ rotate: 10, scale: 1.05 }}
                  >
                    <Send className="w-7 h-7" style={{ color: 'hsl(var(--accent))' }} />
                  </motion.div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    Got a project?
                    <br />
                    <span style={{ color: 'hsl(var(--accent))' }}>Let&apos;s talk.</span>
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed mb-8 flex-1"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    I&apos;m interested in freelance opportunities, full-time positions, and exciting collaborations. If you have a project that needs my skills, don&apos;t hesitate to reach out.
                  </p>

                  {/* Quick info */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--accent) / 0.6)' }} />
                      <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {CONTACT_INFO.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--accent) / 0.6)' }} />
                      <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </div>

                  {/* Copy email button */}
                  <motion.button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{
                      background: copied ? 'hsl(var(--accent) / 0.2)' : 'hsl(var(--accent) / 0.1)',
                      color: 'hsl(var(--accent))',
                      border: `1px solid ${copied ? 'hsl(var(--accent) / 0.5)' : 'hsl(var(--accent) / 0.2)'}`,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Email Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Email Address
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact links */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              {contactLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group relative rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-500 flex items-center gap-5 sm:gap-6"
                    style={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                    }}
                    whileHover={{ x: 4 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--accent) / 0.3)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px hsl(var(--accent) / 0.06)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--accent) / 0.03), transparent)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'hsl(var(--accent) / 0.08)',
                        border: '1px solid hsl(var(--accent) / 0.15)',
                      }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'hsl(var(--accent))' }} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3
                          className="text-base sm:text-lg font-semibold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          {link.title}
                        </h3>
                      </div>
                      <p
                        className="text-xs sm:text-sm truncate"
                        style={{ color: 'hsl(var(--accent) / 0.7)' }}
                      >
                        {link.value}
                      </p>
                      <p
                        className="text-xs mt-1 hidden sm:block"
                        style={{ color: 'hsl(var(--muted-foreground) / 0.6)' }}
                      >
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: 'hsl(var(--accent) / 0.06)',
                          border: '1px solid hsl(var(--accent) / 0.1)',
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: 'hsl(var(--accent))' }}
                        />
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ===== BOTTOM CTA ===== */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div
              className="h-px w-32 mx-auto mb-8"
              style={{
                background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
              }}
            />
            <p
              className="text-lg sm:text-xl md:text-2xl font-light italic"
              style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}
            >
              &quot;Great things are built by those who dare to start.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
