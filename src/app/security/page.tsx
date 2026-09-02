import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/ui/Reveal';
import {
  SECURITY_INTRO,
  SECURITY_SKILLS,
  SECURITY_TRAINING,
  SECURITY_LAB_WORK,
  SECURITY_APPLIED_PRACTICES,
} from '@/constants';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Offensive security practice — CEH curriculum, self-built penetration testing lab with 19+ vulnerable targets, and security applied to production systems.',
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-3.5">
        <span className="eyebrow">{children}</span>
        <span className="h-px flex-1 bg-[hsl(var(--border))]" aria-hidden />
      </div>
    </Reveal>
  );
}

export default function SecurityPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="pt-16 sm:pt-24">
        <div className="shell-wide">
          <PageHeader
            eyebrow="Offensive Security"
            title={
              <>
                A developer&apos;s depth,
                <br />
                <span className="display-flourish">an attacker&apos;s mindset.</span>
              </>
            }
            lede={SECURITY_INTRO.headline}
          />

          {/* Terminal intro — the visual language earns its keep here */}
          <Reveal className="mt-12" delay={0.1}>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </span>
                <span className="text-[0.66rem] term-dim">abdullah@kali: ~/security</span>
              </div>
              <div className="terminal-scan" aria-hidden />
              <div className="relative p-5 text-[0.78rem] leading-relaxed sm:p-7">
                <p>
                  <span className="term-dim">$ </span>
                  <span className="term-fg">whoami --context security</span>
                </p>
                <p className="mt-3 text-muted-foreground">{SECURITY_INTRO.summary}</p>
                <p className="mt-4 term-fg term-caret">
                  <span className="term-dim">$ </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {SECURITY_INTRO.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.06 * i}>
                <div className="card p-5 text-center sm:p-6">
                  <p className="display-lg text-2xl text-[hsl(var(--accent))] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[0.58rem] uppercase leading-tight tracking-[0.14em] text-muted-foreground sm:text-[0.64rem]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAB WORK — terminal cards ===== */}
      <section className="section">
        <div className="shell-wide">
          <SectionLabel>Hands-On Lab Work</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2">
            {SECURITY_LAB_WORK.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.06} as="article">
                <div className="terminal h-full">
                  <div className="terminal-bar">
                    <item.icon className="h-3.5 w-3.5 term-fg" />
                    <span className="truncate text-[0.66rem] term-fg">
                      $ {item.command}
                    </span>
                  </div>
                  <div className="relative flex h-full flex-col p-5">
                    <h3 className="font-mono text-[0.85rem] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.8rem] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILL DOMAINS ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <SectionLabel>Skill Domains</SectionLabel>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_SKILLS.map((skill, i) => (
              <Reveal key={skill.title} delay={(i % 3) * 0.06} as="article">
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.07)]">
                      <skill.icon className="h-4.5 w-4.5 text-[hsl(var(--accent))]" />
                    </span>
                    <div>
                      <h3 className="font-mono text-[0.8rem] font-semibold text-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-[0.62rem] text-[hsl(var(--accent))]/70">
                        {skill.highlight}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-1.5 border-t border-[hsl(var(--border))] pt-4">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[0.74rem] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent))/0.6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRAINING ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <SectionLabel>Structured Training</SectionLabel>

          <div>
            {SECURITY_TRAINING.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} as="article">
                <div className="grid gap-2 border-b border-[hsl(var(--border))] py-6 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div>
                    <h3 className="font-mono text-[0.88rem] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[0.68rem] text-[hsl(var(--accent))]/70">
                      {item.provider}
                    </p>
                    <p className="mt-2.5 max-w-2xl text-[0.8rem] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="chip chip-accent h-fit shrink-0">{item.duration}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              href="/credentials"
              className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
            >
              See the certificates behind this training
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== SECURITY IN PRODUCTION ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <Reveal>
            <div className="card p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Lock className="h-4 w-4 text-[hsl(var(--accent))]" />
                <span className="eyebrow">Security in Production</span>
              </div>
              <p className="max-w-2xl text-[0.86rem] leading-relaxed text-muted-foreground">
                This isn&apos;t a second, unrelated portfolio — it&apos;s the same
                engineering, applied defensively. Practices carried into{' '}
                <a
                  href="https://medalerto.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  MedAlerto
                </a>
                , a live healthcare SaaS:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SECURITY_APPLIED_PRACTICES.map((practice) => (
                  <li key={practice} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                    <span className="text-[0.8rem] leading-relaxed text-muted-foreground">
                      {practice}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
