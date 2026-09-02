'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/constants';
import { EASE } from './ui/Reveal';

type CaseCardProps = {
  project: CaseStudy;
  index: number;
  /** Show the full approach paragraph (archive page) or keep it tight (home). */
  detailed?: boolean;
  eager?: boolean;
};

export default function CaseCard({ project, index, detailed = false, eager = false }: CaseCardProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.06 }}
      className="card card-hover group grid overflow-hidden md:grid-cols-[1.05fr_1fr]"
    >
      {/* ---- Text ---- */}
      <div className="order-2 flex flex-col p-6 sm:p-8 md:order-1">
        {/* Outcome leads */}
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
          {project.outcome}
        </p>

        <h3 className="display-lg mt-3 text-[1.45rem] text-foreground sm:text-[1.7rem]">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground/70">
          {project.category}
        </p>

        <p className="mt-4 text-[0.86rem] leading-relaxed text-muted-foreground">
          {project.problem}
        </p>

        {detailed && (
          <p className="mt-3 text-[0.86rem] leading-relaxed text-muted-foreground/80">
            {project.approach}
          </p>
        )}

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-[hsl(var(--accent))]">
            Visit project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>

      {/* ---- Image ---- */}
      <div className="relative order-1 h-52 overflow-hidden border-b border-[hsl(var(--border))] sm:h-60 md:order-2 md:h-auto md:min-h-[16rem] md:border-b-0 md:border-l">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34rem"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={eager}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.35)] to-transparent md:bg-gradient-to-l"
        />
      </div>
    </motion.a>
  );
}
