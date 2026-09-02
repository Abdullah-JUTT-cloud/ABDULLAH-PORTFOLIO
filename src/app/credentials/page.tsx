import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/ui/Reveal';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  CERTIFICATE_CATEGORIES,
} from '@/constants';

export const metadata: Metadata = {
  title: 'Credentials',
  description:
    'Education, professional experience, and 16 certificates across ethical hacking, cybersecurity, and AI — Muhammad Abdullah.',
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

const CERT_COUNT = CERTIFICATE_CATEGORIES.reduce((n, c) => n + c.images.length, 0);

export default function CredentialsPage() {
  return (
    <>
      <section className="pt-16 sm:pt-24">
        <div className="shell-wide">
          <PageHeader
            eyebrow="Background"
            title={
              <>
                The record behind
                <br />
                <span className="display-flourish">the work.</span>
              </>
            }
            lede={`Education, professional experience, and ${CERT_COUNT} certificates — grouped so you can scan them in seconds.`}
          />
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="section">
        <div className="shell-wide">
          <SectionLabel>Education</SectionLabel>

          {EDUCATION_DATA.map((edu) => (
            <Reveal key={edu.institution}>
              <div className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.07)]">
                      <GraduationCap className="h-5 w-5 text-[hsl(var(--accent))]" />
                    </span>
                    <div>
                      <h3 className="display-lg text-xl text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="mt-0.5 font-mono text-[0.72rem] text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="display-lg text-2xl text-[hsl(var(--accent))]">
                      {edu.cgpa}
                    </p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                      CGPA · Grad {edu.graduationDate}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-[hsl(var(--border))] pt-6">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-[0.84rem] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent))/0.6]" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span key={course} className="chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE — full record ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <SectionLabel>Experience — Full Record</SectionLabel>

          <div className="flex flex-col gap-6">
            {EXPERIENCE_DATA.map((exp, i) => (
              <Reveal key={`${exp.company}-${exp.title}`} delay={i * 0.05} as="article">
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="display-lg text-xl text-foreground">
                      {exp.title}{' '}
                      <span className="text-[hsl(var(--accent))]">· {exp.company}</span>
                    </h3>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground/70">
                      {exp.period} · {exp.workType}
                    </span>
                  </div>

                  <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.66rem] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </p>

                  <p className="mt-4 max-w-2xl text-[0.86rem] leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-6 grid gap-6 border-t border-[hsl(var(--border))] pt-6 sm:grid-cols-2">
                    <div>
                      <p className="overline-label mb-3">Highlights</p>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--accent))]" />
                            <span className="text-[0.8rem] leading-relaxed text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="overline-label mb-3">Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech.name} className="chip">
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATES — clean grids, no carousels ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <SectionLabel>Certificates — {CERT_COUNT} Total</SectionLabel>

          <div className="flex flex-col gap-14">
            {CERTIFICATE_CATEGORIES.map((category) => (
              <div key={category.id}>
                <Reveal>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--accent)/0.22)] bg-[hsl(var(--accent)/0.07)]">
                      <category.icon className="h-4 w-4 text-[hsl(var(--accent))]" />
                    </span>
                    <div>
                      <h3 className="font-mono text-[0.85rem] font-semibold text-foreground">
                        {category.title}{' '}
                        <span className="text-muted-foreground/60">
                          ({category.images.length})
                        </span>
                      </h3>
                      <p className="text-[0.68rem] text-muted-foreground">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {category.images.map((image, i) => (
                    <Reveal key={image} delay={(i % 4) * 0.04}>
                      <a
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card card-hover group block"
                        aria-label={`${category.title} certificate ${i + 1} — open full size`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={image}
                            alt={`${category.title} certificate ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 15rem"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
