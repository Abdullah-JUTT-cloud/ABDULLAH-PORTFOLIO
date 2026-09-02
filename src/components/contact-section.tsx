'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
  Rocket,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO, FREELANCE_PLATFORMS } from '@/constants';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

const ContactSection = () => {
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
    <section id="contact" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="orb left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 opacity-[0.18]"
        style={{ background: 'hsl(var(--accent) / 0.6)' }}
      />

      <div className="shell relative z-10">
        <SectionHeader
          index="09"
          eyebrow="Contact"
          titleTop="Let's"
          titleBottom="Work Together"
          description="Have a project in mind or want to collaborate? I'm always open to discussing new opportunities."
          className="mb-16 sm:mb-20"
        />

        {/* ===== MAIN GRID ===== */}
        <div className="grid gap-7 lg:grid-cols-5">
          {/* CTA card */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div
              className="card relative flex h-full flex-col p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(150deg, hsl(var(--accent) / 0.09), hsl(var(--primary) / 0.05))',
                borderColor: 'hsl(var(--accent) / 0.2)',
              }}
            >
              <span className="shimmer-line absolute inset-x-0 top-0 h-[2px]" aria-hidden />

              <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.1)]">
                <Send className="h-7 w-7 text-[hsl(var(--accent))]" />
              </span>

              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                Got a project?
                <br />
                <span className="text-[hsl(var(--accent))]">Let&apos;s talk.</span>
              </h3>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I&apos;m interested in freelance opportunities, full-time positions, and
                exciting collaborations. If you have a project that needs my skills,
                don&apos;t hesitate to reach out.
              </p>

              <div className="mt-8 space-y-3.5 border-t border-[hsl(var(--border))] pt-7">
                <p className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  {CONTACT_INFO.location}
                </p>
                <p className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  {CONTACT_INFO.phone}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-ghost mt-8 w-full"
                style={
                  copied
                    ? {
                        borderColor: 'hsl(var(--accent) / 0.6)',
                        color: 'hsl(var(--accent))',
                      }
                    : undefined
                }
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Contact links */}
          <div className="flex flex-col gap-5 lg:col-span-3">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.08 }}
                  className="card card-hover group flex flex-1 items-center gap-5 p-7"
                >
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.18)] bg-[hsl(var(--accent)/0.08)] p-3.5 transition-transform duration-500 group-hover:scale-105">
                    <IconComponent className="h-6 w-6 text-[hsl(var(--accent))]" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold text-foreground">
                      {link.title}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-xs text-[hsl(var(--accent))] sm:text-sm">
                      {link.value}
                    </span>
                    <span className="mt-1.5 hidden text-xs text-muted-foreground sm:block">
                      {link.description}
                    </span>
                  </span>

                  <span className="hidden shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 group-hover:text-[hsl(var(--accent))] md:block">
                    {link.cta}
                  </span>

                  <span className="icon-btn h-11 w-11 shrink-0 group-hover:border-[hsl(var(--accent)/0.5)] group-hover:text-[hsl(var(--accent))]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ===== FREELANCE PLATFORMS ===== */}
        <Reveal className="mt-20 sm:mt-24" delay={0.05}>
          <div
            className="card relative p-8 sm:p-12"
            style={{
              background:
                'linear-gradient(150deg, hsl(var(--accent) / 0.07), hsl(var(--primary) / 0.04))',
              borderColor: 'hsl(var(--accent) / 0.18)',
            }}
          >
            <span className="shimmer-line absolute inset-x-0 top-0 h-[2px]" aria-hidden />

            <div className="mb-10 max-w-2xl">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.1)]">
                <Rocket className="h-6 w-6 text-[hsl(var(--accent))]" />
              </span>

              <h3 className="wordmark text-[clamp(1.8rem,4.5vw,3rem)]">
                <span className="block text-foreground">
                  Have a project or idea in mind?
                </span>
                <span className="block text-[hsl(var(--accent))]">
                  Contact me &amp; place your order.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let&apos;s build your real solution — pick the platform you prefer and
                let&apos;s get started.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FREELANCE_PLATFORMS.map((platform, index) => {
                const PlatformIcon = platform.icon;
                return (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55, ease: EASE, delay: index * 0.07 }}
                    className="card card-hover group flex flex-col p-6"
                    style={{ background: 'hsl(var(--background) / 0.6)' }}
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.18)] bg-[hsl(var(--accent)/0.08)] transition-transform duration-500 group-hover:scale-105">
                        <PlatformIcon className="h-5 w-5 text-[hsl(var(--accent))]" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
                    </div>

                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {platform.name}
                    </h4>
                    <p className="mt-1 flex-1 font-mono text-xs text-muted-foreground">
                      {platform.tagline}
                    </p>

                    <span className="mt-6 flex items-center gap-2 border-t border-[hsl(var(--border))] pt-5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[hsl(var(--accent))]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {platform.cta}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ===== CLOSING QUOTE ===== */}
        <Reveal className="mt-20 text-center sm:mt-28" delay={0.05}>
          <span className="mx-auto mb-9 block h-px w-32 bg-[hsl(var(--accent)/0.35)]" />
          <p className="mx-auto max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight text-muted-foreground/70 sm:text-2xl md:text-3xl">
            &quot;Great things are built by those who dare to start.&quot;
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
