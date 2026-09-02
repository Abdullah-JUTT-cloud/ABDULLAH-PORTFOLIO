'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

const STATS = [
  { number: '6+', label: 'Projects' },
  { number: '2+', label: 'Years Exp' },
  { number: '10+', label: 'Technologies' },
];

const PROJECTS = [
  {
    title: 'Banking System',
    subtitle: 'Full Stack Finance Platform',
    description:
      'A modern banking system built with React.js that provides real-time banking data. Features include login, signup, deposit, withdraw, transfer, request loan, request credit card, request cheque book and responsive design for all devices.',
    image: '/p3.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'API Integration'],
    link: 'https://enterpriselevelbankingsystem.vercel.app/login',
  },
  {
    title: 'HOMEIGO',
    subtitle: 'Real Estate Platform',
    description:
      'A real-time rental property management application powered by Node.js. Features secure authentication and MongoDB for scalable data handling.',
    image: '/p2.png',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    link: 'https://homeigo-fullstack-project-1.onrender.com/listings',
  },
  {
    title: 'Lazarev.agency',
    subtitle: 'Agency Website',
    description:
      'A pixel-perfect implementation of lazarev.agency website with smooth GSAP animations and Locomotive Scroll for an ultra-smooth scrolling experience.',
    image: '/p4.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll'],
    link: 'https://beamish-cajeta-b009d1.netlify.app/',
  },
  {
    title: 'Chatify',
    subtitle: 'Real-Time Messaging App',
    description:
      'Chatify is a real-time messaging application that allows users to send and receive messages instantly. Built with WebSocket technology for seamless communication.',
    image: '/p5.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://chatify-v8u2.onrender.com/login',
  },
  {
    title: 'Sudoku Game',
    subtitle: 'Interactive Puzzle Game',
    description:
      'An algorithm-driven Sudoku application utilizing advanced backtracking search. Features dynamic grid generation, real-time error detection, and puzzle solvers, optimized for an intuitive, mobile-friendly interface.',
    image: '/p6.png',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'DSA'],
    link: 'https://sudukoreact.vercel.app/',
  },
  {
    title: 'Chess Game',
    subtitle: 'Classic Strategy Game',
    description:
      'A robust, high-performance Chess engine built in Java. Implements object-oriented architecture, real-time board state validation, and a sleek JavaFX interface, demonstrating advanced programming principles and DSA concepts.',
    image: '/p7.png',
    tech: ['Java', 'DSA', 'JavaFX', 'Java Swing'],
    link: 'https://github.com/Abdullah-JUTT-cloud/Chess_java',
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div className="grid-backdrop" aria-hidden />

      <div className="shell relative z-10">
        {/* ===== HEADER + MEDALERTO / MEDIMATE FEATURE ===== */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
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
                  doctor workflows. From intelligent alerts to real-time patient
                  tracking, MEDALERTO turns reactive healthcare into proactive
                  execution.
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

          {/* MediMate featured card */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <article className="card card-hover group">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="/p1.png"
                  alt="MediMate — Full Stack Healthcare Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46rem"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, hsl(var(--surface)) 4%, transparent 55%)',
                  }}
                />
                <span className="absolute left-5 top-5 chip chip-accent">Featured</span>
              </div>

              <div className="flex items-end justify-between gap-4 p-6 sm:p-7">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    MediMate
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[hsl(var(--accent))] sm:text-sm">
                    Full Stack Healthcare Platform
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        </div>

        {/* ===== ALL PROJECTS ===== */}
        <Reveal className="mt-24 sm:mt-32">
          <div className="flex items-center gap-5">
            <span className="eyebrow whitespace-nowrap">All Projects</span>
            <span className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: EASE, delay: (index % 3) * 0.1 }}
              className="card card-hover group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26rem"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                />

                {/* "Show project" reveal on hover */}
                <span className="pointer-events-none absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Show project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[hsl(var(--accent))]">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[hsl(var(--border))] pt-5">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
