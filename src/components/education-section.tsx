'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '@/constants';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Assuming single education item since the user only provided one
  const edu = EDUCATION_DATA[0];

  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 5%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, hsl(var(--primary)) 1px, transparent 1px), radial-gradient(circle at 30% 70%, hsl(var(--accent)) 1px, transparent 1px)`,
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
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'hsl(var(--primary))' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Education
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>Academic </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Credentials
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-xl mx-auto"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Educational foundation and key milestones in Software Engineering
            </motion.p>
          </div>

          {/* Details Panel */}
          {edu && (
            <div className="grid md:grid-cols-12 gap-8 items-stretch">
              {/* Left Column - CGPA & Quick Stats */}
              <motion.div
                className="md:col-span-5 flex flex-col gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {/* CGPA Display Card */}
                <div
                  className="relative flex-1 rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 group"
                  style={{
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
                    e.currentTarget.style.boxShadow = '0 20px 60px hsl(var(--accent) / 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--accent) / 0.02), transparent, hsl(var(--primary) / 0.02))`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
                    }}
                  />

                  {/* Circular CGPA Visual */}
                  <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-muted"
                        strokeWidth="6"
                        fill="transparent"
                        style={{ stroke: 'hsl(var(--muted) / 0.2)' }}
                      />
                      {/* Progress circle based on CGPA percentage (3.73 / 4 = 93.25%) */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 42}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        animate={isInView ? { strokeDashoffset: 2 * Math.PI * 42 * (1 - 3.73 / 4.0) } : { strokeDashoffset: 2 * Math.PI * 42 }}
                        transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                        style={{
                          stroke: 'hsl(var(--accent))',
                          strokeLinecap: 'round',
                          filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.5))',
                        }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span
                        className="text-4xl font-extrabold font-mono"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {edu.cgpa}
                      </span>
                      <span
                        className="text-xs font-mono uppercase tracking-widest"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        Out of 4.0
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold font-mono uppercase tracking-wider mb-1"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    CGPA Award
                  </h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Excellent academic standing in Software Engineering
                  </p>
                </div>
              </motion.div>

              {/* Right Column - University & Details */}
              <motion.div
                className="md:col-span-7"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div
                  className="relative rounded-2xl p-8 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between group"
                  style={{
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.3)';
                    e.currentTarget.style.boxShadow = '0 20px 60px hsl(var(--primary) / 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--primary) / 0.02), transparent, hsl(var(--accent) / 0.02))`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Header info */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'hsl(var(--accent) / 0.1)',
                          border: '1px solid hsl(var(--accent) / 0.2)',
                          color: 'hsl(var(--accent))',
                        }}
                      >
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-1"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className="text-base font-semibold"
                          style={{ color: 'hsl(var(--primary))' }}
                        >
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full"
                        style={{
                          background: 'hsl(var(--accent) / 0.08)',
                          color: 'hsl(var(--accent))',
                          border: '1px solid hsl(var(--accent) / 0.15)',
                        }}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Graduation Date: {edu.graduationDate}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full"
                        style={{
                          background: 'hsl(var(--primary) / 0.08)',
                          color: 'hsl(var(--primary))',
                          border: '1px solid hsl(var(--primary) / 0.15)',
                        }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        GPA: {edu.cgpa}
                      </span>
                    </div>

                    {/* Details list */}
                    <div className="space-y-3 mb-6">
                      {edu.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: 'hsl(var(--accent))' }}
                          />
                          <p style={{ color: 'hsl(var(--muted-foreground))' }}>{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core curriculum block */}
                  <div className="relative z-10 mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
                      <span
                        className="text-xs font-mono uppercase tracking-wider"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        Key Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-full"
                          style={{
                            backgroundColor: 'hsl(var(--primary) / 0.05)',
                            color: 'hsl(var(--primary))',
                            border: '1px solid hsl(var(--primary) / 0.12)',
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
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

export default EducationSection;
