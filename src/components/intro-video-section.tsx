'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { INTRO_VIDEO } from '@/constants';
import { scrollToSection } from '@/utils/scrollUtils';
import SectionHeader from './ui/SectionHeader';
import { EASE } from './ui/Reveal';

const formatTime = (seconds: number): string => {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const IntroVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  /* ---------------- playback controls ---------------- */

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => undefined);
      setHasStarted(true);
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const restart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => undefined);
    setHasStarted(true);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    if (!document.fullscreenElement) {
      player.requestFullscreen?.().catch(() => undefined);
    } else {
      document.exitFullscreen?.().catch(() => undefined);
    }
  }, []);

  /* ---------------- seeking ---------------- */

  const seekToClientX = useCallback((clientX: number) => {
    const bar = progressRef.current;
    const video = videoRef.current;
    if (!bar || !video || !Number.isFinite(video.duration)) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setCurrentTime(video.currentTime);
  }, []);

  useEffect(() => {
    if (!isScrubbing) return;

    const handleMove = (e: PointerEvent) => seekToClientX(e.clientX);
    const handleUp = () => setIsScrubbing(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [isScrubbing, seekToClientX]);

  /* ---------------- fullscreen sync ---------------- */

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  /* ---------------- auto-hide controls ---------------- */

  const revealControls = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    };
  }, []);

  /* ----- sync metadata already loaded before hydration ----- */

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 1 && Number.isFinite(video.duration)) {
      setDuration(video.duration);
    }
    setIsMuted(video.muted);
  }, []);

  /* ---------------- pause when scrolled away ---------------- */

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="section relative overflow-hidden">
      <div className="rule absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="orb -left-40 top-1/4 h-[26rem] w-[26rem] opacity-30"
        style={{ background: 'hsl(var(--accent) / 0.4)' }}
      />

      <div className="shell relative z-10" ref={sectionRef}>
        <SectionHeader
          index="02"
          eyebrow="Introduction"
          titleTop={INTRO_VIDEO.titleLead}
          titleBottom={INTRO_VIDEO.titleAccent}
          description={INTRO_VIDEO.subtitle}
          className="mb-16 sm:mb-20"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ---------- VIDEO PLAYER ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="lg:col-span-8 relative"
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] blur-3xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, hsl(var(--accent) / 0.18), transparent 70%)',
                opacity: isPlaying ? 1 : 0.55,
                transition: 'opacity 0.6s ease',
              }}
            />

            <div
              ref={playerRef}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border))] bg-black"
              onMouseMove={revealControls}
              onMouseEnter={revealControls}
              onMouseLeave={() => {
                if (videoRef.current && !videoRef.current.paused) setShowControls(false);
              }}
            >
              <video
                ref={videoRef}
                className="block w-full aspect-video object-cover"
                src={INTRO_VIDEO.src}
                poster={INTRO_VIDEO.poster}
                preload="metadata"
                playsInline
                onClick={togglePlay}
                onPlay={() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                  revealControls();
                }}
                onPause={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
                onTimeUpdate={(e) => {
                  if (!isScrubbing) setCurrentTime(e.currentTarget.currentTime);
                }}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onDurationChange={(e) => setDuration(e.currentTarget.duration)}
                onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
              />

              {/* Poster tint before first play */}
              <AnimatePresence>
                {!hasStarted && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, hsl(0 0% 0% / 0.35) 0%, hsl(0 0% 0% / 0.1) 45%, hsl(0 0% 0% / 0.6) 100%)',
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Top badge bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                <div className="flex items-center gap-2 rounded-full border border-[hsl(var(--accent)/0.25)] bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  {isPlaying ? (
                    <span className="flex h-3 items-end gap-[2px]">
                      {[0, 1, 2].map((bar) => (
                        <motion.span
                          key={bar}
                          className="w-[2px] rounded-full bg-[hsl(var(--accent))]"
                          animate={{ height: ['30%', '100%', '45%', '80%', '30%'] }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: bar * 0.15,
                          }}
                        />
                      ))}
                    </span>
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[hsl(var(--accent))] sm:text-[11px]">
                    {isPlaying ? 'Now Playing' : 'Personal Intro'}
                  </span>
                </div>

                <span className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-md sm:text-[11px]">
                  {duration > 0 ? formatTime(duration) : INTRO_VIDEO.duration}
                </span>
              </div>

              {/* Center play button */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      type="button"
                      onClick={togglePlay}
                      aria-label={hasStarted ? 'Resume intro video' : 'Play intro video'}
                      className="relative flex items-center justify-center rounded-full"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {[0, 1].map((ring) => (
                        <motion.span
                          key={ring}
                          className="absolute h-full w-full rounded-full border border-[hsl(var(--accent)/0.5)]"
                          animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'easeOut',
                            delay: ring * 1.2,
                          }}
                        />
                      ))}
                      <span
                        className="relative flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                        style={{
                          background: 'hsl(var(--accent))',
                          boxShadow: '0 16px 46px hsl(var(--accent) / 0.4)',
                        }}
                      >
                        <Play
                          className="ml-0.5 h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                          style={{ color: 'hsl(var(--accent-foreground))' }}
                          fill="currentColor"
                        />
                      </span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hint before first play */}
              <AnimatePresence>
                {!hasStarted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="pointer-events-none absolute inset-x-0 bottom-16 px-6 text-center font-mono text-xs tracking-wide text-white/85 sm:bottom-20 sm:text-sm"
                  >
                    Press play — sound on 🔊
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Controls bar */}
              <motion.div
                initial={false}
                animate={{
                  opacity: showControls || !isPlaying ? 1 : 0,
                  y: showControls || !isPlaying ? 0 : 12,
                }}
                transition={{ duration: 0.25 }}
                className="absolute inset-x-0 bottom-0 px-4 pb-3.5 pt-10 sm:px-5 sm:pb-4"
                style={{
                  background:
                    'linear-gradient(to top, hsl(0 0% 0% / 0.88), hsl(0 0% 0% / 0.35) 55%, transparent)',
                }}
              >
                <div
                  ref={progressRef}
                  onPointerDown={(e) => {
                    setIsScrubbing(true);
                    seekToClientX(e.clientX);
                  }}
                  className="relative mb-2.5 flex h-4 items-center"
                  role="slider"
                  aria-label="Seek video"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progressPercent)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    const video = videoRef.current;
                    if (!video) return;
                    if (e.key === 'ArrowRight') video.currentTime += 5;
                    if (e.key === 'ArrowLeft') video.currentTime -= 5;
                  }}
                >
                  <div
                    className="w-full overflow-hidden rounded-full bg-white/20 transition-all duration-200"
                    style={{ height: isScrubbing ? '6px' : '4px' }}
                  >
                    <div
                      className="h-full rounded-full bg-[hsl(var(--accent))]"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span
                    className="pointer-events-none absolute rounded-full bg-[hsl(var(--accent))] transition-all duration-200"
                    style={{
                      left: `${progressPercent}%`,
                      transform: 'translateX(-50%)',
                      width: isScrubbing ? '13px' : '10px',
                      height: isScrubbing ? '13px' : '10px',
                      boxShadow: '0 0 12px hsl(var(--accent) / 0.7)',
                      opacity: isScrubbing || showControls ? 1 : 0,
                    }}
                  />
                </div>

                <div className="flex items-center gap-2.5 text-white sm:gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" fill="currentColor" />
                    ) : (
                      <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={restart}
                    aria-label="Restart video"
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                    style={{ color: isMuted ? 'hsl(var(--accent))' : undefined }}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>

                  <span className="font-mono text-[11px] tabular-nums text-white/70 sm:text-xs">
                    {formatTime(currentTime)}
                    <span className="text-white/40">
                      {' / '}
                      {formatTime(duration)}
                    </span>
                  </span>

                  <span className="flex-1" />

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ---------- CHAPTERS ---------- */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            {INTRO_VIDEO.chapters.map((chapter, index) => (
              <motion.article
                key={chapter.label}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.25 + index * 0.1 }}
                className="card card-hover group p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--accent)/0.18)] bg-[hsl(var(--accent)/0.08)] transition-transform duration-500 group-hover:scale-105">
                    <chapter.icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                  </span>

                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2.5">
                      <span className="font-mono text-[0.7rem] text-[hsl(var(--accent))] opacity-70">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {chapter.label}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Highlights + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
              className="card p-6"
              style={{
                background:
                  'linear-gradient(140deg, hsl(var(--accent) / 0.08), hsl(var(--primary) / 0.05))',
                borderColor: 'hsl(var(--accent) / 0.2)',
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[hsl(var(--accent))]" />
                <span className="eyebrow">What You Get</span>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {INTRO_VIDEO.highlights.map((item) => (
                  <span key={item} className="chip chip-accent">
                    {item}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="btn btn-solid group w-full"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
