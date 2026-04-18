'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Rocket, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/constants';

const experienceIcons = [Briefcase, GraduationCap, Rocket];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--accent)) 1px, transparent 1px), radial-gradient(circle at 70% 60%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      {/* Subtle glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'hsl(var(--primary))' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
              <span
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em]"
                style={{ color: 'hsl(var(--accent))' }}
              >
                Experience
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>My </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Journey
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-xl mx-auto"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Professional journey through innovative companies and cutting-edge projects
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line - desktop only */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background: `linear-gradient(180deg, transparent, hsl(var(--accent) / 0.3) 10%, hsl(var(--accent) / 0.3) 90%, transparent)`,
              }}
            />

            {/* Mobile timeline line */}
            <div
              className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(180deg, transparent, hsl(var(--accent) / 0.3) 10%, hsl(var(--accent) / 0.3) 90%, transparent)`,
              }}
            />

            {EXPERIENCE_DATA.map((experience, index) => {
              const IconComponent = experienceIcons[index % experienceIcons.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                  className={`relative mb-12 sm:mb-16 last:mb-0 lg:grid lg:grid-cols-2 lg:gap-12 ${
                    isEven ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Timeline dot - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'hsl(var(--background))',
                        border: '2px solid hsl(var(--accent) / 0.5)',
                        boxShadow: '0 0 20px hsl(var(--accent) / 0.15)',
                      }}
                      whileHover={{ scale: 1.15, borderColor: 'hsl(var(--accent))' }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                    </motion.div>
                  </div>

                  {/* Timeline dot - Mobile */}
                  <div className="lg:hidden absolute left-6 sm:left-8 top-8 -translate-x-1/2 z-20">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: 'hsl(var(--background))',
                        border: '2px solid hsl(var(--accent) / 0.5)',
                        boxShadow: '0 0 15px hsl(var(--accent) / 0.15)',
                      }}
                    >
                      <IconComponent
                        className="w-4 h-4"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`ml-14 sm:ml-16 lg:ml-0 ${
                      isEven ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                    }`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="relative rounded-2xl p-6 sm:p-8 group transition-all duration-500 overflow-hidden"
                      style={{
                        background: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
                        e.currentTarget.style.boxShadow = '0 20px 60px hsl(var(--accent) / 0.08), 0 0 0 1px hsl(var(--accent) / 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--border))';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Hover gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--accent) / 0.03), transparent, hsl(var(--primary) / 0.03))`,
                        }}
                      />

                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
                        }}
                      />

                      {/* Header */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4 sm:mb-5">
                          <div className="flex-1">
                            {/* Company logo badge */}
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold font-mono"
                                style={{
                                  background: 'hsl(var(--accent) / 0.1)',
                                  color: 'hsl(var(--accent))',
                                  border: '1px solid hsl(var(--accent) / 0.2)',
                                }}
                              >
                                {experience.logo}
                              </div>
                              <div>
                                <h3
                                  className="text-lg sm:text-xl font-bold"
                                  style={{ color: 'hsl(var(--foreground))' }}
                                >
                                  {experience.title}
                                </h3>
                                <p
                                  className="text-sm font-medium font-mono"
                                  style={{ color: 'hsl(var(--accent))' }}
                                >
                                  {experience.company}
                                </p>
                              </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
                                style={{
                                  background: 'hsl(var(--accent) / 0.08)',
                                  color: 'hsl(var(--accent))',
                                  border: '1px solid hsl(var(--accent) / 0.15)',
                                }}
                              >
                                <Calendar className="w-3 h-3" />
                                {experience.period}
                              </span>
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
                                style={{
                                  background: 'hsl(var(--primary) / 0.08)',
                                  color: 'hsl(var(--primary))',
                                  border: '1px solid hsl(var(--primary) / 0.15)',
                                }}
                              >
                                <MapPin className="w-3 h-3" />
                                {experience.workType}
                              </span>
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-mono"
                                style={{ color: 'hsl(var(--muted-foreground))' }}
                              >
                                <MapPin className="w-3 h-3" />
                                {experience.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-5 sm:mb-6">
                          <h4
                            className="text-xs font-mono uppercase tracking-[0.15em] mb-3"
                            style={{ color: 'hsl(var(--accent) / 0.7)' }}
                          >
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + i * 0.05 }}
                              >
                                <CheckCircle2
                                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                                  style={{ color: 'hsl(var(--accent) / 0.6)' }}
                                />
                                <span style={{ color: 'hsl(var(--muted-foreground))' }}>
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4
                            className="text-xs font-mono uppercase tracking-[0.15em] mb-3"
                            style={{ color: 'hsl(var(--accent) / 0.7)' }}
                          >
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech.name}
                                className="px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-full transition-all duration-300"
                                style={{
                                  backgroundColor: 'hsl(var(--accent) / 0.06)',
                                  color: 'hsl(var(--accent))',
                                  border: '1px solid hsl(var(--accent) / 0.12)',
                                }}
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty column for alternating layout on desktop */}
                  <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
        }}
      />
    </section>
  );
};

export default ExperienceSection;
