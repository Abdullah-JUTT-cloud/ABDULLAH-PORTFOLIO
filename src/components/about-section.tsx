'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { EXPERTISE_DATA } from '@/constants';
import { Code, Database, Layers } from 'lucide-react';

const cardIcons = [Code, Layers, Database];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'hsl(var(--primary))' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Expertise
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>What I </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Do Best
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Technical skills and expertise refined through real-world projects and continuous learning
            </motion.p>
          </div>

          {/* Expertise Cards */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {EXPERTISE_DATA.map((item, index) => {
              const IconComponent = cardIcons[index % cardIcons.length];
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div
                    className="relative rounded-2xl p-7 sm:p-8 h-full overflow-hidden transition-all duration-500"
                    style={{
                      background: 'hsl(var(--background))',
                      border: `1px solid ${isHovered ? 'hsl(var(--accent) / 0.3)' : 'hsl(var(--border))'}`,
                      boxShadow: isHovered
                        ? '0 25px 60px hsl(var(--accent) / 0.08), 0 0 0 1px hsl(var(--accent) / 0.1)'
                        : 'none',
                    }}
                  >
                    {/* Hover gradient overlay */}
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

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon + Number */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background: 'hsl(var(--accent) / 0.08)',
                            border: '1px solid hsl(var(--accent) / 0.15)',
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <IconComponent
                            className="w-6 h-6"
                            style={{ color: 'hsl(var(--accent))' }}
                          />
                        </motion.div>
                        <span
                          className="text-5xl font-black font-mono opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none"
                          style={{ color: 'hsl(var(--accent))' }}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-2"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {item.title}
                      </h3>

                      {/* Highlight */}
                      <p
                        className="text-xs sm:text-sm font-mono mb-4"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        {item.highlight}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-6"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {item.description}
                      </p>

                      {/* Divider */}
                      <div
                        className="h-px w-full mb-5 opacity-50"
                        style={{ background: 'hsl(var(--border))' }}
                      />

                      {/* Tech Stack */}
                      <div>
                        <p
                          className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] mb-3"
                          style={{ color: 'hsl(var(--accent) / 0.6)' }}
                        >
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-full transition-all duration-300 group-hover:border-opacity-30"
                              style={{
                                backgroundColor: 'hsl(var(--accent) / 0.06)',
                                color: 'hsl(var(--accent))',
                                border: '1px solid hsl(var(--accent) / 0.12)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Code Snippet - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            <div
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
                  className="font-mono text-xs ml-2"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  abdullah_portfolio.tsx
                </span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  {['TypeScript', 'React'].map((tag) => (
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

              {/* Code content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="flex">
                  {/* Line numbers */}
                  <div
                    className="hidden sm:flex flex-col items-end pr-5 select-none"
                    style={{ color: 'hsl(var(--muted-foreground) / 0.3)' }}
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1 leading-6">
                    <div>
                      <span style={{ color: 'hsl(var(--primary))' }}>import</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}> {'{ '}</span>
                      <span style={{ color: 'hsl(var(--accent))' }}>Developer</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>{' }'} </span>
                      <span style={{ color: 'hsl(var(--primary))' }}>from</span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}> &quot;@abdullah/core&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>;</span>
                    </div>
                    <div className="opacity-30">│</div>
                    <div>
                      <span style={{ color: 'hsl(var(--primary))' }}>const</span>
                      <span style={{ color: 'hsl(var(--accent))' }}> abdullah</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}> = </span>
                      <span style={{ color: 'hsl(var(--primary))' }}>new</span>
                      <span style={{ color: 'hsl(var(--accent))' }}> Developer</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>({"{"}</span>
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <span style={{ color: 'hsl(var(--foreground))' }}>name: </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Muhammad Abdullah&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>,</span>
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <span style={{ color: 'hsl(var(--foreground))' }}>role: </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Full Stack Engineer&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>,</span>
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <span style={{ color: 'hsl(var(--foreground))' }}>stack: [</span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;React&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>, </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Next.js&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>, </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Node.js&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>, </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Spring Boot&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>],</span>
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <span style={{ color: 'hsl(var(--foreground))' }}>passion: </span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;Building systems that scale&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>,</span>
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <span style={{ color: 'hsl(var(--foreground))' }}>available: </span>
                      <span style={{ color: 'hsl(var(--accent))' }}>true</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: 'hsl(var(--foreground))' }}>{"}"});</span>
                    </div>
                    <div className="opacity-30">│</div>
                    <div>
                      <span style={{ color: 'hsl(var(--foreground))' }}>abdullah.</span>
                      <span style={{ color: 'hsl(var(--accent))' }}>build</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>(</span>
                      <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;something amazing&quot;</span>
                      <span style={{ color: 'hsl(var(--foreground))' }}>);</span>
                    </div>
                    <div>
                      <span style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {'// '}
                      </span>
                      <span style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}>
                        → Ready to bring your ideas to life ✨
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

export default ExpertiseSection;
