'use client';

import { motion } from 'framer-motion';
import { EXPERTISE_DATA } from '@/constants';
import { Code, Database, Layers } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

const cardIcons = [Code, Layers, Database];

/* Stylised code-editor visual */
const CodeEditor = () => (
  <div className="card overflow-hidden">
    <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] px-5 py-3.5">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
      </div>
      <span className="ml-2 font-mono text-xs text-muted-foreground">
        abdullah_portfolio.tsx
      </span>
      <span className="flex-1" />
      <div className="hidden gap-1.5 sm:flex">
        {['TypeScript', 'React'].map((tag) => (
          <span
            key={tag}
            className="rounded px-2 py-0.5 font-mono text-[10px] text-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.08)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="overflow-x-auto p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
      <div className="flex">
        <div className="hidden select-none flex-col items-end pr-6 text-muted-foreground/30 sm:flex">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 leading-6">
          <div>
            <span className="text-[hsl(var(--primary))]">import</span>
            <span className="text-foreground"> {'{ '}</span>
            <span className="text-[hsl(var(--accent))]">Developer</span>
            <span className="text-foreground">{' }'} </span>
            <span className="text-[hsl(var(--primary))]">from</span>
            <span className="text-[hsl(var(--gold-accent))]"> &quot;@abdullah/core&quot;</span>
            <span className="text-foreground">;</span>
          </div>
          <div className="opacity-25">│</div>
          <div>
            <span className="text-[hsl(var(--primary))]">const</span>
            <span className="text-[hsl(var(--accent))]"> abdullah</span>
            <span className="text-foreground"> = </span>
            <span className="text-[hsl(var(--primary))]">new</span>
            <span className="text-[hsl(var(--accent))]"> Developer</span>
            <span className="text-foreground">({'{'}</span>
          </div>
          <div className="ml-4 sm:ml-6">
            <span className="text-foreground">name: </span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;Muhammad Abdullah&quot;</span>
            <span className="text-foreground">,</span>
          </div>
          <div className="ml-4 sm:ml-6">
            <span className="text-foreground">role: </span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;Full Stack Engineer&quot;</span>
            <span className="text-foreground">,</span>
          </div>
          <div className="ml-4 sm:ml-6">
            <span className="text-foreground">stack: [</span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;React&quot;</span>
            <span className="text-foreground">, </span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;Next.js&quot;</span>
            <span className="text-foreground">, </span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;Node.js&quot;</span>
            <span className="text-foreground">, </span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;Spring Boot&quot;</span>
            <span className="text-foreground">],</span>
          </div>
          <div className="ml-4 sm:ml-6">
            <span className="text-foreground">passion: </span>
            <span className="text-[hsl(var(--gold-accent))]">
              &quot;Building systems that scale&quot;
            </span>
            <span className="text-foreground">,</span>
          </div>
          <div className="ml-4 sm:ml-6">
            <span className="text-foreground">available: </span>
            <span className="text-[hsl(var(--accent))]">true</span>
            <span className="text-foreground">,</span>
          </div>
          <div>
            <span className="text-foreground">{'}'});</span>
          </div>
          <div className="opacity-25">│</div>
          <div>
            <span className="text-foreground">abdullah.</span>
            <span className="text-[hsl(var(--accent))]">build</span>
            <span className="text-foreground">(</span>
            <span className="text-[hsl(var(--gold-accent))]">&quot;something amazing&quot;</span>
            <span className="text-foreground">);</span>
          </div>
          <div className="text-muted-foreground/60">
            {'// '}→ Ready to bring your ideas to life ✨
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="orb -right-40 top-1/3 h-[24rem] w-[24rem] opacity-25"
        style={{ background: 'hsl(var(--primary) / 0.5)' }}
      />

      <div className="shell relative z-10">
        <SectionHeader
          index="03"
          eyebrow="Expertise"
          titleTop="What I"
          titleBottom="Do Best"
          description="Technical skills and expertise refined through real-world projects and continuous learning"
          className="mb-16 sm:mb-24"
        />

        {/* Expertise cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          {EXPERTISE_DATA.map((item, index) => {
            const IconComponent = cardIcons[index % cardIcons.length];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
                className="card card-hover group flex flex-col p-8 sm:p-9"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.18)] bg-[hsl(var(--accent)/0.08)] transition-transform duration-500 group-hover:-rotate-6">
                    <IconComponent className="h-6 w-6 text-[hsl(var(--accent))]" />
                  </span>
                  <span className="wordmark select-none text-5xl text-foreground/[0.07] transition-colors duration-500 group-hover:text-[hsl(var(--accent)/0.16)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-[hsl(var(--accent))] sm:text-[0.8rem]">
                  {item.highlight}
                </p>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>

                <div className="mt-8 border-t border-[hsl(var(--border))] pt-6">
                  <p className="eyebrow mb-4 text-muted-foreground/60">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Code editor visual */}
        <Reveal className="mt-16 sm:mt-20" delay={0.1}>
          <CodeEditor />
        </Reveal>
      </div>
    </section>
  );
};

export default ExpertiseSection;
