'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, Award, Lock, ChevronRight } from 'lucide-react';
import {
  SECURITY_INTRO,
  SECURITY_SKILLS,
  SECURITY_TRAINING,
  SECURITY_LAB_WORK,
  SECURITY_APPLIED_PRACTICES,
} from '@/constants';
import Reveal, { EASE } from './ui/Reveal';

const SecuritySection = () => {
  const [activeLab, setActiveLab] = useState(0);
  const activeLabItem = SECURITY_LAB_WORK[activeLab];
  const ActiveLabIcon = activeLabItem.icon;

  return (
    <section
      id="security"
      className="section relative overflow-hidden"
      style={{ background: 'hsl(var(--term-bg))' }}
    >
      {/* Terminal-flavoured backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--term-green) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--term-green) / 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000, transparent 80%)',
        }}
      />
      <div className="terminal-scan absolute inset-0 opacity-30" aria-hidden />
      <div
        aria-hidden
        className="orb -left-40 top-1/4 h-[26rem] w-[26rem] opacity-20"
        style={{ background: 'hsl(var(--term-green) / 0.5)' }}
      />

      <div className="shell relative z-10 font-mono">
        {/* ===== HEADER ===== */}
        <header className="max-w-4xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[0.7rem] tracking-[0.2em] text-[hsl(var(--term-dim))]">
                05 //
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(var(--term-green))]">
                Cyber Security
              </span>
              <span className="h-px w-16 bg-[hsl(var(--term-green)/0.4)]" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="wordmark text-[clamp(2.6rem,7.5vw,5.6rem)]">
              <span className="block text-[hsl(var(--foreground))]">Ethical</span>
              <span className="block text-[hsl(var(--term-green))]">Hacking</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[hsl(var(--term-dim))] sm:text-base">
              <span className="text-[hsl(var(--term-green))]">$ </span>
              {SECURITY_INTRO.headline}
            </p>
          </Reveal>
        </header>

        {/* ===== SUMMARY + STATS ===== */}
        <div className="mt-16 grid gap-6 lg:grid-cols-5 sm:mt-20">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="terminal h-full">
              <div className="terminal-bar">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--term-green))]/70" />
                </div>
                <span className="ml-2 text-[0.7rem] text-[hsl(var(--term-dim))]">
                  ~/profile --whoami
                </span>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--term-green)/0.25)] bg-[hsl(var(--term-green)/0.08)]">
                    <ShieldCheck className="h-6 w-6 text-[hsl(var(--term-green))]" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {SECURITY_INTRO.role}
                    </h3>
                    <p className="text-xs text-[hsl(var(--term-green))]/70">
                      Aspiring Professional · Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[hsl(var(--term-dim))]">
                  {SECURITY_INTRO.summary}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
            {SECURITY_INTRO.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.08}>
                <div className="flex h-full flex-col justify-center gap-1 rounded-2xl border border-[hsl(var(--term-green)/0.18)] bg-[hsl(var(--term-green)/0.04)] p-5 text-center lg:flex-row lg:items-center lg:gap-5 lg:text-left">
                  <span className="wordmark text-3xl text-[hsl(var(--term-green))] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[0.62rem] uppercase leading-tight tracking-[0.14em] text-[hsl(var(--term-dim))] sm:text-[0.7rem]">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===== SKILL CARDS ===== */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="flex items-center gap-4">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(var(--term-green))]">
              Security Skills
            </span>
            <span className="h-px flex-1 bg-[hsl(var(--term-green)/0.2)]" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.08 }}
                className="group flex flex-col rounded-2xl border border-[hsl(var(--term-green)/0.16)] bg-[hsl(var(--term-green)/0.03)] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[hsl(var(--term-green)/0.42)] hover:bg-[hsl(var(--term-green)/0.06)]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--term-green)/0.22)] bg-[hsl(var(--term-green)/0.08)] transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="h-5 w-5 text-[hsl(var(--term-green))]" />
                  </span>
                  <span className="wordmark select-none text-4xl text-[hsl(var(--term-green))]/10 transition-colors duration-500 group-hover:text-[hsl(var(--term-green))]/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-1.5 text-xs text-[hsl(var(--term-green))]/70">
                  {skill.highlight}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-[hsl(var(--term-green)/0.14)] pt-5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-[hsl(var(--term-dim))]"
                    >
                      <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-[hsl(var(--term-green))]/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* ===== HANDS-ON LAB TERMINAL ===== */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="flex items-center gap-4">
            <Lock className="h-4 w-4 shrink-0 text-[hsl(var(--term-green))]" />
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(var(--term-green))]">
              Hands-On Lab Experience
            </span>
            <span className="h-px flex-1 bg-[hsl(var(--term-green)/0.2)]" />
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={0.08}>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--term-green))]/70" />
              </div>
              <span className="ml-2 truncate text-[0.7rem] text-[hsl(var(--term-dim))]">
                root@kali: ~/pentest-lab
              </span>
              <span className="flex-1" />
              <div className="hidden gap-1.5 sm:flex">
                {['Kali', 'Docker'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2 py-0.5 text-[10px] text-[hsl(var(--term-green))]/70 bg-[hsl(var(--term-green)/0.08)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative grid lg:grid-cols-5">
              {/* Command list */}
              <div className="border-b border-[hsl(var(--term-green)/0.14)] p-3 sm:p-4 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div className="space-y-1.5">
                  {SECURITY_LAB_WORK.map((lab, index) => {
                    const isActive = activeLab === index;
                    return (
                      <button
                        key={lab.title}
                        type="button"
                        onClick={() => setActiveLab(index)}
                        aria-pressed={isActive}
                        className={`w-full rounded-xl px-3 py-3 text-left text-[11px] transition-all duration-300 sm:text-xs ${
                          isActive
                            ? 'border border-[hsl(var(--term-green)/0.35)] bg-[hsl(var(--term-green)/0.1)] text-[hsl(var(--term-green))]'
                            : 'border border-transparent text-[hsl(var(--term-dim))] hover:bg-[hsl(var(--term-green)/0.05)] hover:text-[hsl(var(--term-green))]/80'
                        }`}
                      >
                        <span className="flex items-start gap-2">
                          <span className="shrink-0 opacity-70">$</span>
                          <span className="break-all">{lab.command}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active lab output */}
              <div className="p-6 sm:p-8 lg:col-span-3">
                <motion.div
                  key={activeLabItem.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--term-green)/0.22)] bg-[hsl(var(--term-green)/0.08)]">
                      <ActiveLabIcon className="h-5 w-5 text-[hsl(var(--term-green))]" />
                    </span>
                    <h4 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {activeLabItem.title}
                    </h4>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-[hsl(var(--term-dim))]">
                    <span className="text-[hsl(var(--term-green))]/70">{'>> '}</span>
                    {activeLabItem.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeLabItem.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[hsl(var(--term-green)/0.2)] bg-[hsl(var(--term-green)/0.06)] px-3 py-1.5 text-[10px] text-[hsl(var(--term-green))] sm:text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-xs text-[hsl(var(--term-green))]/60">
                    <span className="term-caret" />
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== TRAINING + SECURITY IN PRODUCTION ===== */}
        <div className="mt-20 grid gap-8 lg:grid-cols-5 sm:mt-28">
          {/* Training */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-4">
                <Award className="h-4 w-4 shrink-0 text-[hsl(var(--term-green))]" />
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(var(--term-green))]">
                  Training &amp; Certifications
                </span>
                <span className="h-px flex-1 bg-[hsl(var(--term-green)/0.2)]" />
              </div>
            </Reveal>

            <div className="mt-8 space-y-4">
              {SECURITY_TRAINING.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: index * 0.07 }}
                  className="group rounded-2xl border border-[hsl(var(--term-green)/0.16)] bg-[hsl(var(--term-green)/0.03)] p-6 transition-all duration-500 hover:translate-x-1.5 hover:border-[hsl(var(--term-green)/0.4)]"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <h4 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {item.title}
                    </h4>
                    <span className="whitespace-nowrap rounded-full border border-[hsl(var(--term-green)/0.2)] bg-[hsl(var(--term-green)/0.07)] px-2.5 py-1 text-[10px] text-[hsl(var(--term-green))]">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mb-3 text-xs text-[hsl(var(--term-green))]/70">
                    {item.provider}
                  </p>

                  <p className="text-xs leading-relaxed text-[hsl(var(--term-dim))] sm:text-sm">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Applied practices */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[hsl(var(--term-green))]" />
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(var(--term-green))]">
                  Security in Production
                </span>
                <span className="h-px flex-1 bg-[hsl(var(--term-green)/0.2)]" />
              </div>
            </Reveal>

            <Reveal className="mt-8" delay={0.08}>
              <div className="rounded-2xl border border-[hsl(var(--term-green)/0.2)] bg-[hsl(var(--term-green)/0.05)] p-7">
                <p className="mb-6 text-sm leading-relaxed text-[hsl(var(--term-dim))]">
                  Security practices applied while building and shipping a live
                  healthcare SaaS platform used daily by medical professionals.
                </p>

                <ul className="space-y-4">
                  {SECURITY_APPLIED_PRACTICES.map((practice) => (
                    <li key={practice} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[hsl(var(--term-green)/0.25)] bg-[hsl(var(--term-green)/0.1)]">
                        <Lock className="h-2.5 w-2.5 text-[hsl(var(--term-green))]" />
                      </span>
                      <span className="text-xs leading-relaxed text-[hsl(var(--term-dim))] sm:text-sm">
                        {practice}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
