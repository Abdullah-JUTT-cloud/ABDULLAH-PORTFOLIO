'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import {
  SECURITY_INTRO,
  SECURITY_SKILLS,
  SECURITY_TRAINING,
  SECURITY_APPLIED_PRACTICES,
} from '@/constants';
import Reveal, { EASE } from './ui/Reveal';

const SecuritySection = () => {
  return (
    <section
      id="security"
      className="section relative overflow-hidden"
    >
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div className="grid-backdrop" aria-hidden />

      <div className="shell relative z-10">
        {/* ===== HEADER ===== */}
        <header className="max-w-4xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow">05 // Security</span>
              <span className="h-px w-16 bg-[hsl(var(--accent)/0.4)]" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="wordmark text-[clamp(2.6rem,7.5vw,5.6rem)]">
              <span className="block text-foreground">Offensive</span>
              <span className="block text-[hsl(var(--accent))]">Security</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Building secure applications requires understanding how attackers think. I apply a developer&apos;s depth of knowledge to offensive security — from network reconnaissance to full exploitation chains.
            </p>
          </Reveal>
        </header>

        {/* ===== SUMMARY + STATS ===== */}
        <div className="mt-16 grid gap-6 lg:grid-cols-5 sm:mt-20">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="card h-full p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.25)] bg-[hsl(var(--accent)/0.08)]">
                  <ShieldCheck className="h-6 w-6 text-[hsl(var(--accent))]" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {SECURITY_INTRO.role}
                  </h3>
                  <p className="text-xs text-[hsl(var(--accent))]/70">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {SECURITY_INTRO.summary}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
            {SECURITY_INTRO.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.08}>
                <div className="flex h-full flex-col justify-center gap-1 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 text-center lg:flex-row lg:items-center lg:gap-5 lg:text-left">
                  <span className="wordmark text-3xl text-[hsl(var(--accent))] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[0.62rem] uppercase leading-tight tracking-[0.14em] text-muted-foreground sm:text-[0.7rem]">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===== SKILLS — CONDENSED ===== */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Security Skills</span>
            <span className="h-px flex-1 bg-[hsl(var(--border))]" />
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
                className="card card-hover group flex flex-col p-7"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.08)] transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                  </span>
                  <span className="wordmark select-none text-4xl text-[hsl(var(--accent))]/10 transition-colors duration-500 group-hover:text-[hsl(var(--accent))]/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-1.5 text-xs text-[hsl(var(--accent))]/70">
                  {skill.highlight}
                </p>

                <ul className="mt-6 flex-1 space-y-2 border-t border-[hsl(var(--border))] pt-5">
                  {skill.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent))/0.6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* ===== TRAINING — SIMPLE LIST ===== */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Training</span>
            <span className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SECURITY_TRAINING.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
              className="card p-6 transition-all duration-400 hover:border-[hsl(var(--accent)/0.35)]"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {item.title}
                </h4>
                <span className="chip shrink-0 text-[0.6rem]">{item.duration}</span>
              </div>
              <p className="text-[0.68rem] text-[hsl(var(--accent))]/70 mb-2">{item.provider}</p>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ===== APPLIED PRACTICES ===== */}
        <Reveal className="mt-16 sm:mt-20" delay={0.1}>
          <div className="card p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Lock className="h-4 w-4 text-[hsl(var(--accent))]" />
              <span className="eyebrow">Security in Production</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-5">
              Security practices applied while building and shipping a live healthcare SaaS platform.
            </p>
            <ul className="space-y-3">
              {SECURITY_APPLIED_PRACTICES.map((practice) => (
                <li key={practice} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))/0.6]" />
                  <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {practice}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SecuritySection;
