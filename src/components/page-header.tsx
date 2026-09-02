'use client';

import Reveal from './ui/Reveal';

type PageHeaderProps = {
  eyebrow: string;
  /** Words rendered in the display face; wrap one word with `flourish` for the amber italic. */
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
};

/**
 * The one heading pattern used across pages and major sections:
 * mono eyebrow + Fraunces display heading + optional lede.
 */
export default function PageHeader({ eyebrow, title, lede, className = '' }: PageHeaderProps) {
  return (
    <header className={className}>
      <Reveal>
        <div className="mb-5 flex items-center gap-3.5">
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-12 bg-[hsl(var(--accent)/0.4)]" aria-hidden />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="display-lg text-[clamp(2.2rem,6vw,3.6rem)] text-foreground">
          {title}
        </h1>
      </Reveal>

      {lede && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
            {lede}
          </p>
        </Reveal>
      )}
    </header>
  );
}
