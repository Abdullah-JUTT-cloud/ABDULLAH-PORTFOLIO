import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import HomeHero from '@/components/home/hero';
import ContactCta from '@/components/home/contact-cta';
import CaseCard from '@/components/case-card';
import Reveal from '@/components/ui/Reveal';
import { CASE_STUDIES } from '@/constants';

/* ------------------------------------------------------------------ */
/*  Condensed stack summary                                           */
/* ------------------------------------------------------------------ */
const STACK_ROWS = [
  {
    area: 'Frontend',
    detail: 'React · Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP · React Native',
  },
  {
    area: 'Backend',
    detail: 'Node.js · Express · Spring Boot · Java · MongoDB · PostgreSQL · Redis · SQL',
  },
  {
    area: 'Foundations',
    detail: 'C++ · Java · Data Structures & Algorithms · OOP · Systems & Database Design',
  },
];

/* One-line experience snapshot — full detail lives on /credentials */
const EXPERIENCE_SNAPSHOT = [
  {
    role: 'MERN Stack Developer',
    org: 'Devverx',
    period: '1 yr · On-site',
    line: 'Built and deployed production MERN applications and REST APIs on real client projects.',
  },
  {
    role: 'Full-Stack Engineer',
    org: 'Freelance',
    period: '2023 — Present',
    line: 'End-to-end builds across MERN and Spring Boot — HOMEIGO, real-time apps, auth systems.',
  },
  {
    role: 'BSSE, Software Engineering',
    org: 'University of Central Punjab',
    period: 'Class of 2027',
    line: 'Systems design, algorithms, and databases — 3.73 CGPA.',
  },
];

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

export default function Home() {
  const selected = CASE_STUDIES.filter((p) => p.selected);

  return (
    <>
      <HomeHero />

      {/* ===== SELECTED WORK — the 4 strongest, outcome-first ===== */}
      <section id="work" className="section scroll-mt-24 border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <SectionLabel>Selected Work</SectionLabel>

          <div className="flex flex-col gap-6">
            {selected.map((project, index) => (
              <CaseCard
                key={project.title}
                project={project}
                index={index}
                eager={index === 0}
              />
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
            >
              Browse the full archive — all {CASE_STUDIES.length} projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== STACK — condensed ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell">
          <SectionLabel>Stack</SectionLabel>

          <div>
            {STACK_ROWS.map((row, i) => (
              <Reveal key={row.area} delay={i * 0.06}>
                <div className="grid gap-1.5 border-b border-[hsl(var(--border))] py-6 sm:grid-cols-[10rem_1fr] sm:gap-8 first:pt-0">
                  <h3 className="display-lg text-lg text-foreground">{row.area}</h3>
                  <p className="font-mono text-[0.78rem] leading-relaxed text-muted-foreground">
                    {row.detail}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Security — the differentiator, one row deep-linking to /security */}
            <Reveal delay={0.2}>
              <Link
                href="/security"
                className="group grid gap-1.5 border-b border-[hsl(var(--border))] py-6 transition-colors sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <h3 className="display-lg flex items-center gap-2 text-lg text-[hsl(var(--accent))]">
                  <ShieldCheck className="h-4.5 w-4.5" />
                  Security
                </h3>
                <p className="font-mono text-[0.78rem] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                  CEH-trained · Nmap · Burp Suite · OWASP ZAP · Kali Linux · 19+
                  lab targets — <span className="text-[hsl(var(--accent))]">see the offensive security practice →</span>
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SNAPSHOT ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell">
          <SectionLabel>Experience</SectionLabel>

          <ol>
            {EXPERIENCE_SNAPSHOT.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.06} as="li">
                <div className="border-b border-[hsl(var(--border))] py-6 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display-lg text-lg text-foreground">
                      {item.role}{' '}
                      <span className="text-[hsl(var(--accent))]">· {item.org}</span>
                    </h3>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground/70">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-[0.86rem] leading-relaxed text-muted-foreground">
                    {item.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-10">
            <Link
              href="/credentials"
              className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
            >
              Full background — education &amp; 16 certificates
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <div className="border-t border-[hsl(var(--border))]">
        <ContactCta />
      </div>
    </>
  );
}
