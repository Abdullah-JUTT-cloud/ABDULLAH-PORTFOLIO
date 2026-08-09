'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Award, Maximize2, X, MousePointer2 } from 'lucide-react';
import { CERTIFICATE_CATEGORIES } from '@/constants';

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
  const duration = set.length * 9;

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
      <div className="cert-hover-hint mt-4 flex justify-center">
        <span
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
          style={{
            color: 'hsl(var(--muted-foreground))',
            background: 'hsl(var(--muted) / 0.3)',
            border: '1px solid hsl(var(--border))',
          }}
        >
          <MousePointer2 className="w-3 h-3" />
          Hover to pause
        </span>
      </div>
    </div>
  );
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section
      id="certificates"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--accent)) 1px, transparent 1px), radial-gradient(circle at 70% 70%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: 'hsl(var(--primary))' }}
      />

      {/* ===== SECTION HEADER ===== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
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
              Licenses &amp; Certificates
            </span>
            <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ color: 'hsl(var(--foreground))' }}>Verified </span>
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
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'hsl(var(--muted-foreground))' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Professional certifications across offensive security, cyber defense
            and applied artificial intelligence.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full"
              style={{
                background: 'hsl(var(--accent) / 0.08)',
                color: 'hsl(var(--accent))',
                border: '1px solid hsl(var(--accent) / 0.15)',
              }}
            >
              <Award className="w-3.5 h-3.5" />
              {totalCertificates} Certificates
            </span>
            <span
              className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full"
              style={{
                background: 'hsl(var(--primary) / 0.08)',
                color: 'hsl(var(--primary))',
                border: '1px solid hsl(var(--primary) / 0.15)',
              }}
            >
              {CERTIFICATE_CATEGORIES.length} Specializations
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== CATEGORY ROWS ===== */}
      <div className="relative z-10 space-y-20 sm:space-y-24">
        {CERTIFICATE_CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              {/* Category heading */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${category.color.replace(')', ' / 0.1)')}`,
                      border: `1px solid ${category.color.replace(')', ' / 0.2)')}`,
                      color: category.color,
                    }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm mt-1"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 flex-1 ml-2">
                    <div
                      className="h-px flex-1"
                      style={{
                        background: `linear-gradient(90deg, ${category.color.replace(
                          ')',
                          ' / 0.3)'
                        )}, transparent)`,
                      }}
                    />
                    <span
                      className="text-xs font-mono px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{
                        background: category.color.replace(')', ' / 0.08)'),
                        color: category.color,
                        border: `1px solid ${category.color.replace(')', ' / 0.15)')}`,
                      }}
                    >
                      {category.images.length.toString().padStart(2, '0')}{' '}
                      Certificates

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

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
        }}
      />

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
              background: 'hsl(0 0% 0% / 0.88)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <span
                  className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] truncate"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {lightbox.label}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close certificate preview"
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    color: 'hsl(var(--foreground))',
                    background: 'hsl(var(--muted) / 0.5)',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div
                className="relative w-full rounded-xl overflow-hidden"
                style={{
                  border: '1px solid hsl(var(--accent) / 0.25)',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
                }}
              >
                <Image
                  src={lightbox.src}
                  alt={`${lightbox.label} certificate`}
                  width={1650}
                  height={1275}
                  sizes="100vw"
                  className="w-full h-auto"
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
