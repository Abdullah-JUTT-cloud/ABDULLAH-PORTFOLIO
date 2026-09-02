'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Award, Maximize2, X, MousePointer2 } from 'lucide-react';
import { CERTIFICATE_CATEGORIES } from '@/constants';
import SectionHeader from './ui/SectionHeader';
import Reveal, { EASE } from './ui/Reveal';

/**
 * Builds the list rendered inside a marquee track.
 * The set is repeated until it is wide enough to cover very large screens,
 * then the whole set is duplicated once so the -50% loop is seamless.
 */
const buildSlides = (images: readonly string[]) => {
  const set: string[] = [...images];
  while (set.length < 6) {
    set.push(...images);
  }
  return { set, slides: [...set, ...set] };
};

type MarqueeRowProps = {
  images: readonly string[];
  direction: 'left' | 'right';
  title: string;
  onSelect: (src: string, label: string) => void;
};

const MarqueeRow = ({ images, direction, title, onSelect }: MarqueeRowProps) => {
  const { set, slides } = buildSlides(images);
  // Keeps a constant scroll speed no matter how many certificates a row has
  const duration = set.length * 10;

  return (
    <div className="relative">
      <div className="cert-marquee">
        <div
          className="cert-marquee-track"
          data-direction={direction}
          style={{ animationDuration: `${duration}s` }}
        >
          {slides.map((src, index) => {
            const label = `${title} certificate ${(index % set.length) + 1}`;
            return (
              <div className="cert-slide" key={`${src}-${index}`}>
                <button
                  type="button"
                  onClick={() => onSelect(src, title)}
                  aria-label={`View ${label} in full size`}
                  className="cert-card block w-full text-left"
                >
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, (max-width: 1536px) 560px, 640px"
                    className="object-cover"
                    draggable={false}
                  />

                  {/* Readability veil only at the very edges so the
                      certificate text itself stays crisp */}
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, hsl(var(--background) / 0.18) 0%, transparent 22%, transparent 78%, hsl(var(--background) / 0.25) 100%)',
                    }}
                  />

                  <span className="cert-card-zoom">
                    <Maximize2 className="w-3 h-3" />
                    View
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover hint - fades out as soon as the row is hovered */}
      <div className="cert-hover-hint mt-5 flex justify-center">
        <span className="chip">
          <MousePointer2 className="h-3 w-3" />
          Hover to pause
        </span>
      </div>
    </div>
  );
};

const CertificatesSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(
    null
  );

  const totalCertificates = CERTIFICATE_CATEGORIES.reduce(
    (sum, category) => sum + category.images.length,
    0
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const openLightbox = useCallback(
    (src: string, label: string) => setLightbox({ src, label }),
    []
  );

  // Close on Escape + lock background scrolling while the viewer is open
  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox, closeLightbox]);

  return (
    <section id="certificates" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />

      {/* ===== SECTION HEADER ===== */}
      <div className="shell relative z-10">
        <SectionHeader
          index="08"
          eyebrow="Licenses & Certificates"
          titleTop="Verified"
          titleBottom="Credentials"
          description="Professional certifications across offensive security, cyber defense and applied artificial intelligence."
        />

        <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.15}>
          <span className="chip chip-accent">
            <Award className="h-3.5 w-3.5" />
            {totalCertificates} Certificates
          </span>
          <span className="chip chip-accent">
            {CERTIFICATE_CATEGORIES.length} Specializations
          </span>
        </Reveal>
      </div>

      {/* ===== CATEGORY ROWS ===== */}
      <div className="relative z-10 mt-20 space-y-24 sm:mt-24 sm:space-y-28">
        {CERTIFICATE_CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: EASE, delay: index * 0.06 }}
            >
              {/* Category heading */}
              <div className="shell mb-9 sm:mb-11">
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--accent)/0.2)] bg-[hsl(var(--accent)/0.08)] sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 text-[hsl(var(--accent))] sm:h-7 sm:w-7" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="hidden flex-1 items-center gap-4 sm:flex">
                    <span className="h-px flex-1 bg-[hsl(var(--border))]" />
                    <span className="chip chip-accent whitespace-nowrap">
                      {category.images.length.toString().padStart(2, '0')} Certificates
                    </span>
                  </div>
                </div>
              </div>

              {/* Full-bleed infinite slider */}
              <MarqueeRow
                images={category.images}
                direction={category.direction}
                title={category.title}
                onSelect={openLightbox}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.label} certificate preview`}
            style={{
              background: 'hsl(0 0% 0% / 0.9)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="truncate font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))] sm:text-sm">
                  {lightbox.label}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close certificate preview"
                  className="icon-btn h-10 w-10 shrink-0 text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  border: '1px solid hsl(var(--accent) / 0.25)',
                  boxShadow: '0 40px 90px -20px rgba(0,0,0,0.85)',
                }}
              >
                <Image
                  src={lightbox.src}
                  alt={`${lightbox.label} certificate`}
                  width={1650}
                  height={1275}
                  sizes="100vw"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
