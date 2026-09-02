'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Plus, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/constants';
import SectionHeader from './ui/SectionHeader';
import { EASE } from './ui/Reveal';

const ExperienceSection = () => {
  // First row starts expanded (matches the data's `expanded` flag)
  const [openIndex, setOpenIndex] = useState<number | null>(
    EXPERIENCE_DATA.findIndex((e) => e.expanded) === -1
      ? 0
      : EXPERIENCE_DATA.findIndex((e) => e.expanded)
  );

  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="orb -right-32 top-1/3 h-[22rem] w-[22rem] opacity-20"
        style={{ background: 'hsl(var(--accent) / 0.45)' }}
      />

      <div className="shell relative z-10">
        <SectionHeader
          index="06"
          eyebrow="Experience"
          titleTop="My"
          titleBottom="Journey"
          description="Professional journey through innovative companies and cutting-edge projects"
          className="mb-16 sm:mb-20"
        />

        {/* Accordion */}
        <div>
          {EXPERIENCE_DATA.map((experience, index) => {
            const isOpen = openIndex === index;
            const panelId = `experience-panel-${index}`;

            return (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                data-open={isOpen}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
                className="accordion-row"
              >
                {/* Collapsed bar */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group flex w-full items-center gap-5 py-7 text-left sm:gap-8 sm:py-9"
                >
                  <span className="hidden shrink-0 font-mono text-xs text-muted-foreground/50 sm:block">
                    0{index + 1}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block wordmark text-[clamp(1.4rem,3.6vw,2.5rem)] text-foreground transition-colors duration-400 group-hover:text-[hsl(var(--accent))]">
                      {experience.title}
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                      <span className="text-[hsl(var(--accent))]">
                        {experience.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" />
                        {experience.location}
                      </span>
                      <span>{experience.workType}</span>
                    </span>
                  </span>

                  <span className="hidden shrink-0 font-mono text-sm text-muted-foreground md:block">
                    {experience.period}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? 'rotate-45 border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]'
                        : 'border-[hsl(var(--border))] text-muted-foreground group-hover:border-[hsl(var(--accent)/0.5)] group-hover:text-[hsl(var(--accent))]'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 sm:grid-cols-12 sm:gap-10 sm:pb-12">
                        <div className="sm:col-span-5 sm:col-start-1">
                          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {experience.description}
                          </p>

                          <p className="mt-6 font-mono text-sm text-muted-foreground md:hidden">
                            {experience.period}
                          </p>

                          <div className="mt-7">
                            <p className="eyebrow mb-4 text-muted-foreground/60">
                              Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span key={tech.name} className="chip">
                                  <tech.icon className="h-3 w-3" />
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-6 sm:col-start-7">
                          <p className="eyebrow mb-5 text-muted-foreground/60">
                            Achievements
                          </p>
                          <ul className="space-y-4">
                            {experience.achievements.map((achievement, i) => (
                              <motion.li
                                key={achievement}
                                initial={{ opacity: 0, x: 14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.45,
                                  ease: EASE,
                                  delay: 0.1 + i * 0.06,
                                }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
