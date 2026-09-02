import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/page-header';
import CaseCard from '@/components/case-card';
import Reveal from '@/components/ui/Reveal';
import { CASE_STUDIES } from '@/constants';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Full project archive — production platforms, full-stack builds, and front-end & algorithmic lab work by Muhammad Abdullah.',
};

export default function WorkPage() {
  const production = CASE_STUDIES.filter((p) => p.group === 'production');
  const lab = CASE_STUDIES.filter((p) => p.group === 'lab');

  return (
    <>
      <section className="pt-16 sm:pt-24">
        <div className="shell-wide">
          <PageHeader
            eyebrow={`Archive — ${CASE_STUDIES.length} projects`}
            title={
              <>
                Every project, framed the way I work:
                <br />
                <span className="display-flourish">
                  problem → approach → outcome.
                </span>
              </>
            }
            lede="No metric here is invented — where a project is live, I say so; where it's an exercise in craft, I say that too."
          />
        </div>
      </section>

      {/* ===== Production & client work ===== */}
      <section className="section">
        <div className="shell-wide">
          <Reveal>
            <div className="mb-10 flex items-center gap-3.5">
              <span className="eyebrow">Production &amp; Platform Builds</span>
              <span className="h-px flex-1 bg-[hsl(var(--border))]" aria-hidden />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {production.map((project, index) => (
              <CaseCard
                key={project.title}
                project={project}
                index={index}
                detailed
                eager={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Front-end & algorithmic lab ===== */}
      <section className="section border-t border-[hsl(var(--border))]">
        <div className="shell-wide">
          <Reveal>
            <div className="mb-10 flex items-center gap-3.5">
              <span className="eyebrow">Front-End &amp; Algorithmic Lab</span>
              <span className="h-px flex-1 bg-[hsl(var(--border))]" aria-hidden />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {lab.map((project, index) => (
              <CaseCard key={project.title} project={project} index={index} detailed />
            ))}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
            >
              Want something like this built? Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
