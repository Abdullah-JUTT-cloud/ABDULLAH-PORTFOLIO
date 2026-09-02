'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  Play,
} from 'lucide-react';
import { CONTACT_INFO, FREELANCE_PLATFORMS, INTRO_VIDEO } from '@/constants';
import Reveal from '../ui/Reveal';

const WHATSAPP_URL = `https://wa.me/923214194045?text=${encodeURIComponent(
  "Hi Abdullah! I'd like to connect with you."
)}`;

/* Lightweight video: poster only until clicked — nothing loads up front. */
function IntroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video w-full bg-black">
        {playing ? (
          <video
            src={INTRO_VIDEO.src}
            poster={INTRO_VIDEO.poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label="Play introduction video"
            style={{
              backgroundImage: `url(${INTRO_VIDEO.poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="absolute inset-0 bg-[hsl(var(--background)/0.45)] transition-colors duration-300 group-hover:bg-[hsl(var(--background)/0.3)]" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[0.62rem] text-white/85">
              {INTRO_VIDEO.duration}
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
          Prefer a face to a page?
        </p>
        <p className="mt-1.5 text-[0.84rem] leading-relaxed text-muted-foreground">
          A {INTRO_VIDEO.duration} introduction — who I am, what I build, and how
          I can help you ship.
        </p>
      </div>
    </div>
  );
}

export default function ContactCta() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="shell">
        <Reveal>
          <div className="mb-5 flex items-center gap-3.5">
            <span className="eyebrow">Contact</span>
            <span className="h-px w-12 bg-[hsl(var(--accent)/0.4)]" aria-hidden />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display-lg text-[clamp(2rem,5.5vw,3.2rem)] text-foreground">
            Have something worth <span className="display-flourish">building?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
            I&apos;m open to full-time roles and freelance projects. One email
            and you&apos;ll have a reply — usually the same day.
          </p>
        </Reveal>

        {/* Primary actions */}
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn-solid">
              <Mail className="h-4 w-4" />
              {CONTACT_INFO.email}
            </a>
            <button type="button" onClick={handleCopyEmail} className="btn btn-ghost">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[hsl(var(--accent))]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy email
                </>
              )}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
            <p className="flex items-center gap-2 font-mono text-[0.72rem] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              {CONTACT_INFO.location}
            </p>
            <p className="flex items-center gap-2 font-mono text-[0.72rem] text-muted-foreground">
              <Phone className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              {CONTACT_INFO.phone}
            </p>
          </div>
        </Reveal>

        {/* Video + testimonial placeholder */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <IntroVideo />
          </Reveal>

          <Reveal delay={0.14}>
            {/* Honest placeholder — no fabricated quotes */}
            <div className="card flex h-full flex-col justify-between border-dashed p-6 sm:p-7">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                  Client words — reserved
                </p>
                <p className="display-lg mt-4 text-xl leading-snug text-foreground/80">
                  &ldquo;This space is waiting for my first public client
                  review.&rdquo;
                </p>
                <p className="mt-4 text-[0.84rem] leading-relaxed text-muted-foreground">
                  I don&apos;t publish invented testimonials. Reviews from
                  Fiverr and Upwork engagements will appear here as they come
                  in — until then, the work speaks for itself.
                </p>
              </div>
              <a
                href="https://www.fiverr.com/s/42ePl8y"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
              >
                Be the first — hire me on Fiverr
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Freelance platform trust strip — secondary */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-[hsl(var(--border))] pt-7">
            <span className="overline-label mr-4">Also on</span>
            {FREELANCE_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip mr-1"
                title={platform.tagline}
              >
                <platform.icon className="h-3.5 w-3.5" />
                {platform.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
