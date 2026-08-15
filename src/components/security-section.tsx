'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ShieldCheck,
  Award,
  Lock,
  ChevronRight,
  Radar,
} from 'lucide-react';
import {
  SECURITY_INTRO,
  SECURITY_SKILLS,
  SECURITY_TRAINING,
  SECURITY_LAB_WORK,
  SECURITY_APPLIED_PRACTICES,
} from '@/constants';

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeLab, setActiveLab] = useState(0);

  const activeLabItem = SECURITY_LAB_WORK[activeLab];
  const ActiveLabIcon = activeLabItem.icon;

  return (
    <section
      id="security"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 -right-40 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'hsl(var(--primary))' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* ===== HEADER ===== */}
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
                Cyber Security
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>Ethical </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hacking
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-3xl mx-auto"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {SECURITY_INTRO.headline}
            </motion.p>
          </div>

          {/* ===== SUMMARY + STATS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-16 sm:mb-20"
          >
            {/* Summary card */}
            <div
              className="lg:col-span-3 relative rounded-2xl p-7 sm:p-8 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, hsl(var(--accent) / 0.06), hsl(var(--primary) / 0.04))`,
                border: '1px solid hsl(var(--accent) / 0.15)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), transparent)`,
                }}
              />
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'hsl(var(--accent) / 0.1)',
                    border: '1px solid hsl(var(--accent) / 0.2)',
                  }}
                >
                  <ShieldCheck className="w-6 h-6" style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {SECURITY_INTRO.role}
                  </h3>
                  <p className="text-xs font-mono" style={{ color: 'hsl(var(--accent) / 0.7)' }}>
                    Aspiring Professional · Lahore, Pakistan
                  </p>
                </div>
              </div>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {SECURITY_INTRO.summary}
              </p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {SECURITY_INTRO.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 text-center lg:text-left"
                  style={{
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <span
                    className="text-2xl sm:text-3xl font-black font-mono"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] sm:text-xs font-mono uppercase tracking-wider leading-tight"
                    style={{ color: 'hsl(var(--muted-foreground) / 0.7)' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== SECURITY SKILLS GRID ===== */}
          <div className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 mb-8"
            >
              <Radar className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--accent))' }} />
              <h3
                className="text-sm font-mono uppercase tracking-[0.2em]"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                Security Skills
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: 'hsl(var(--border))' }}
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {SECURITY_SKILLS.map((skill, index) => {
                const IconComponent = skill.icon;
                const isHovered = hoveredSkill === index;

                return (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div
                      className="relative rounded-2xl p-6 sm:p-7 h-full overflow-hidden transition-all duration-500"
                      style={{
                        background: 'hsl(var(--background))',
                        border: `1px solid ${isHovered ? 'hsl(var(--accent) / 0.3)' : 'hsl(var(--border))'}`,
                        boxShadow: isHovered
                          ? '0 25px 60px hsl(var(--accent) / 0.08), 0 0 0 1px hsl(var(--accent) / 0.1)'
                          : 'none',
                      }}
                    >
                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--accent) / 0.04), transparent 60%, hsl(var(--primary) / 0.04))`,
                        }}
                      />

                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))`,
                        }}
                      />

                      <div className="relative z-10">
                        {/* Icon row */}
                        <div className="flex items-center justify-between mb-5">
                          <motion.div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: 'hsl(var(--accent) / 0.08)',
                              border: '1px solid hsl(var(--accent) / 0.15)',
                            }}
                            whileHover={{ rotate: 5, scale: 1.05 }}
                          >
                            <IconComponent
                              className="w-5 h-5"
                              style={{ color: 'hsl(var(--accent))' }}
                            />
                          </motion.div>
                          <span
                            className="text-4xl font-black font-mono opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none"
                            style={{ color: 'hsl(var(--accent))' }}
                          >
                            0{index + 1}
                          </span>
                        </div>

                        <h4
                          className="text-lg sm:text-xl font-bold mb-1.5"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          {skill.title}
                        </h4>

                        <p
                          className="text-[11px] sm:text-xs font-mono mb-5"
                          style={{ color: 'hsl(var(--accent))' }}
                        >
                          {skill.highlight}
                        </p>

                        <div
                          className="h-px w-full mb-4 opacity-50"
                          style={{ background: 'hsl(var(--border))' }}
                        />

                        <ul className="space-y-2">
                          {skill.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <ChevronRight
                                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                                style={{ color: 'hsl(var(--accent) / 0.5)' }}
                              />
                              <span
                                className="text-xs sm:text-sm leading-relaxed"
                                style={{ color: 'hsl(var(--muted-foreground))' }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ===== HANDS-ON LAB (TERMINAL) ===== */}
          <div className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-3 mb-8"
            >
              <Lock className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--accent))' }} />
              <h3
                className="text-sm font-mono uppercase tracking-[0.2em]"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                Hands-On Lab Experience
              </h3>
              <div className="flex-1 h-px" style={{ background: 'hsl(var(--border))' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'hsl(var(--border))',
                background: 'hsl(var(--background))',
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-3 px-5 py-3.5 border-b"
                style={{
                  borderColor: 'hsl(var(--border))',
                  background: 'hsl(var(--muted) / 0.5)',
                }}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span
                  className="font-mono text-xs ml-2 truncate"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  root@kali: ~/pentest-lab
                </span>
                <div className="flex-1" />
                <div className="hidden sm:flex gap-1.5">
                  {['Kali', 'Docker'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded"
                      style={{
                        background: 'hsl(var(--accent) / 0.08)',
                        color: 'hsl(var(--accent) / 0.6)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-5">
                {/* Command list */}
                <div
                  className="lg:col-span-2 p-3 sm:p-4 lg:border-r border-b lg:border-b-0"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <div className="space-y-1.5">
                    {SECURITY_LAB_WORK.map((lab, index) => {
                      const isActive = activeLab === index;
                      return (
                        <button
                          key={lab.title}
                          type="button"
                          onClick={() => setActiveLab(index)}
                          className="w-full text-left px-3 py-3 rounded-xl transition-all duration-300 font-mono text-[11px] sm:text-xs"
                          style={{
                            background: isActive
                              ? 'hsl(var(--accent) / 0.08)'
                              : 'transparent',
                            border: `1px solid ${isActive ? 'hsl(var(--accent) / 0.25)' : 'transparent'}`,
                            color: isActive
                              ? 'hsl(var(--accent))'
                              : 'hsl(var(--muted-foreground))',
                          }}
                        >
                          <span className="flex items-start gap-2">
                            <span
                              className="flex-shrink-0"
                              style={{
                                color: isActive
                                  ? 'hsl(var(--accent))'
                                  : 'hsl(var(--muted-foreground) / 0.4)',
                              }}
                            >
                              $
                            </span>
                            <span className="break-all">{lab.command}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active lab output */}
                <div className="lg:col-span-3 p-5 sm:p-7">
                  <motion.div
                    key={activeLabItem.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'hsl(var(--accent) / 0.08)',
                          border: '1px solid hsl(var(--accent) / 0.15)',
                        }}
                      >
                        <ActiveLabIcon
                          className="w-5 h-5"
                          style={{ color: 'hsl(var(--accent))' }}
                        />
                      </div>
                      <h4
                        className="text-base sm:text-lg font-bold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {activeLabItem.title}
                      </h4>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-6 font-mono"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      <span style={{ color: 'hsl(var(--accent) / 0.6)' }}>{'>> '}</span>
                      {activeLabItem.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeLabItem.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-full"
                          style={{
                            backgroundColor: 'hsl(var(--accent) / 0.06)',
                            color: 'hsl(var(--accent))',
                            border: '1px solid hsl(var(--accent) / 0.12)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===== TRAINING + APPLIED PRACTICES ===== */}
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Training */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex items-center gap-3 mb-8"
              >
                <Award className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--accent))' }} />
                <h3
                  className="text-sm font-mono uppercase tracking-[0.2em]"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  Training & Certifications
                </h3>
                <div className="flex-1 h-px" style={{ background: 'hsl(var(--border))' }} />
              </motion.div>

              <div className="space-y-4">
                {SECURITY_TRAINING.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500"
                    style={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'hsl(var(--accent) / 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))';
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(180deg, hsl(var(--accent)), hsl(var(--primary)))`,
                      }}
                    />

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h4
                        className="text-base sm:text-lg font-bold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {item.title}
                      </h4>
                      <span
                        className="px-2.5 py-1 text-[10px] font-mono rounded-full whitespace-nowrap"
                        style={{
                          background: 'hsl(var(--accent) / 0.08)',
                          color: 'hsl(var(--accent))',
                          border: '1px solid hsl(var(--accent) / 0.15)',
                        }}
                      >
                        {item.duration}
                      </span>
                    </div>

                    <p
                      className="text-xs font-mono mb-3"
                      style={{ color: 'hsl(var(--accent) / 0.7)' }}
                    >
                      {item.provider}
                    </p>

                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Applied practices */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3 mb-8"
              >
                <ShieldCheck
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: 'hsl(var(--accent))' }}
                />
                <h3
                  className="text-sm font-mono uppercase tracking-[0.2em]"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  Security in Production
                </h3>
                <div className="flex-1 h-px" style={{ background: 'hsl(var(--border))' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="relative rounded-2xl p-6 sm:p-7 h-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent) / 0.06), hsl(var(--primary) / 0.04))`,
                  border: '1px solid hsl(var(--accent) / 0.15)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), transparent)`,
                  }}
                />

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  Security practices applied while building and shipping a live healthcare SaaS
                  platform used daily by medical professionals.
                </p>

                <ul className="space-y-4">
                  {SECURITY_APPLIED_PRACTICES.map((practice) => (
                    <li key={practice} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: 'hsl(var(--accent) / 0.1)',
                          border: '1px solid hsl(var(--accent) / 0.2)',
                        }}
                      >
                        <Lock className="w-2.5 h-2.5" style={{ color: 'hsl(var(--accent))' }} />
                      </div>
                      <span
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {practice}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
        }}
      />
    </section>
  );
};

export default SecuritySection;
