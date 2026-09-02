'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

const STATS = [
  { number: '7+', label: 'Projects' },
  { number: '2+', label: 'Years Exp' },
  { number: '10+', label: 'Technologies' },
];

const PROJECTS = [
  {
    title: 'MedAlerto',
    subtitle: 'Healthcare SaaS Platform',
    image: '/p1.png',
    link: 'https://medalerto.me/',
    // Full-width featured card
    size: 'full' as const,
  },
  {
    title: 'Banking System',
    subtitle: 'Full Stack Finance',
    image: '/p3.png',
    link: 'https://enterpriselevelbankingsystem.vercel.app/login',
    size: 'normal' as const,
  },
  {
    title: 'HOMEIGO',
    subtitle: 'Real Estate Platform',
    image: '/p2.png',
    link: 'https://homeigo-fullstack-project-1.onrender.com/listings',
    size: 'normal' as const,
  },
  {
    title: 'Lazarev.agency',
    subtitle: 'Agency Website',
    image: '/p4.png',
    link: 'https://beamish-cajeta-b009d1.netlify.app/',
    size: 'normal' as const,
  },
  {
    title: 'Chatify',
    subtitle: 'Real-Time Messaging',
    image: '/p5.png',
    link: 'https://chatify-v8u2.onrender.com/login',
    size: 'wide' as const,
  },
  {
    title: 'Sudoku Game',
    subtitle: 'Puzzle Game',
    image: '/p6.png',
    link: 'https://sudukoreact.vercel.app/',
    size: 'normal' as const,
  },
  {
    title: 'Chess Game',
    subtitle: 'Strategy Game',
    image: '/p7.png',
    link: 'https://github.com/Abdullah-JUTT-cloud/Chess_java',
    size: 'normal' as const,
  },
];

/* ------------------------------------------------------------------ */
/*  Individual project card                                           */
/* ------------------------------------------------------------------ */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const isFull = project.size === 'full';
  const isWide = project.size === 'wide';

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.08 }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface))] transition-all duration-500 hover:border-[hsl(var(--accent)/0.35)] hover:shadow-[0_20px_60px_-20px_hsl(var(--accent)/0.2)] ${
        isFull ? 'col-span-full' : ''
      } ${isWide ? 'sm:col-span-2' : ''}`}
    >
      {/* Image container — no fixed aspect ratio, let image dictate height */}
      <div className={`relative w-full overflow-hidden ${isFull ? 'h-[300px] sm:h-[420px] lg:h-[500px]' : 'h-[220px] sm:h-[280px]'}`}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={
            isFull
              ? '100vw'
              : isWide
              ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={index < 2}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* "Show project" pill on hover */}
        <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
          Show project
          <span className="inline-block w-5 h-px bg-white/70" />
        </span>
      </div>

      {/* Card body */}
      <div className="flex items-center justify-between p-5 sm:p-6">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {project.subtitle}
          </p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
      </div>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
const WorkSection = () => {
  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div className="grid-backdrop" aria-hidden />

      <div className="shell relative z-10">
        {/* ===== HEADER + FEATURED ===== */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="04"
              eyebrow="Featured Work"
              titleTop="My"
              titleBottom="Work"
              description={
                <>
                  MEDALERTO exists because healthcare systems are slow, fragmented, and
                  full of inefficiencies that cost lives. We&apos;re building a system
                  that eliminates missed follow-ups, forgotten patients, and chaotic
                  doctor workflows.
                </>
              }
            />

            <Reveal className="mt-12" delay={0.15}>
              <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[hsl(var(--border))] pt-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="wordmark text-4xl text-[hsl(var(--accent))] sm:text-5xl">
                      {stat.number}
                    </dt>
                    <dd className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Featured project — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <a
              href="https://medalerto.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden border border-[hsl(var(--border))] transition-all duration-500 hover:border-[hsl(var(--accent)/0.35)] hover:shadow-[0_30px_80px_-25px_hsl(var(--accent)/0.25)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/p1.png"
                  alt="MediMate — Full Stack Healthcare Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 56rem"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
                <span className="absolute left-5 top-5 chip chip-accent">Featured</span>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    MediMate
                  </h3>
                  <p className="mt-1 font-mono text-sm text-white/70">
                    Full Stack Healthcare Platform
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ===== ALL PROJECTS ===== */}
        <Reveal className="mt-24 sm:mt-32">
          <div className="flex items-center gap-5">
            <span className="eyebrow whitespace-nowrap">All Projects</span>
            <span className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
        </Reveal>

        {/* Responsive bento grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
