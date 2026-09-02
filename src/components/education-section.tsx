'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '@/constants';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const edu = EDUCATION_DATA[0];
  const R = 42;
  const CIRC = 2 * Math.PI * R;

  return (
    <section id="education" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="orb -left-32 bottom-1/4 h-[22rem] w-[22rem] opacity-20"
        style={{ background: 'hsl(var(--primary) / 0.5)' }}
      />

      <div className="shell relative z-10" ref={ref}>
        <SectionHeader
          index="07"
          eyebrow="Education"
          titleTop="Academic"
          titleBottom="Credentials"
          description="Educational foundation and key milestones in Software Engineering"
          className="mb-16 sm:mb-20"
        />

        {edu && (
          <div className="grid items-stretch gap-7 md:grid-cols-12">
            {/* CGPA card */}
            <Reveal className="md:col-span-5" delay={0.05}>
              <div className="card card-hover flex h-full flex-col items-center justify-center p-10 text-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={R}
                      strokeWidth="5"
                      fill="transparent"
                      style={{ stroke: 'hsl(var(--border))' }}
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={R}
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray={CIRC}
                      initial={{ strokeDashoffset: CIRC }}
                      animate={
                        isInView
                          ? { strokeDashoffset: CIRC * (1 - 3.73 / 4.0) }
                          : { strokeDashoffset: CIRC }
                      }
                      transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
                      style={{
                        stroke: 'hsl(var(--accent))',
                        strokeLinecap: 'round',
                        filter: 'drop-shadow(0 0 10px hsl(var(--accent) / 0.45))',
                      }}
                    />
                  </svg>

                  <div className="absolute flex flex-col items-center">
                    <span className="wordmark text-4xl text-foreground">{edu.cgpa}</span>
                    <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Out of 4.0
                    </span>
                  </div>
                </div>

                <h3 className="mt-8 font-mono text-sm uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                  CGPA Award
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Excellent academic standing in Software Engineering
                </p>
              </div>
            </Reveal>

            {/* Degree card */}
            <Reveal className="md:col-span-7" delay={0.12}>
              <div className="card card-hover flex h-full flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="mb-7 flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.2)] bg-[hsl(var(--accent)/0.08)]">
                      <GraduationCap className="h-7 w-7 text-[hsl(var(--accent))]" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-[hsl(var(--accent))]">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-7 flex flex-wrap gap-3">
                    <span className="chip chip-accent">
                      <Calendar className="h-3.5 w-3.5" />
                      Graduation Date: {edu.graduationDate}
                    </span>
                    <span className="chip chip-accent">
                      <Award className="h-3.5 w-3.5" />
                      GPA: {edu.cgpa}
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {edu.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 border-t border-[hsl(var(--border))] pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[hsl(var(--accent))]" />
                    <span className="eyebrow text-muted-foreground/60">
                      Key Coursework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span key={course} className="chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
