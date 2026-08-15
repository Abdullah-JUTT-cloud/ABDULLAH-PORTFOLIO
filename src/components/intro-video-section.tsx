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
    <section
      id="intro"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 5%) 45%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 -left-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'hsl(var(--accent))' }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'hsl(var(--primary))' }}
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* ===== HEADER ===== */}
          <div className="text-center mb-14 sm:mb-16">
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
                {INTRO_VIDEO.eyebrow}
              </span>
              <div className="h-px w-8 sm:w-12" style={{ background: 'hsl(var(--accent))' }} />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: 'hsl(var(--foreground))' }}>{INTRO_VIDEO.titleLead} </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {INTRO_VIDEO.titleAccent}
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {INTRO_VIDEO.subtitle}
            </motion.p>
          </div>

          {/* ===== CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* ---------- VIDEO PLAYER ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="lg:col-span-8 relative"
            >
              {/* Ambient glow behind player */}
              <div
                className="absolute -inset-6 blur-3xl rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, hsl(var(--accent) / 0.16), transparent 70%)`,
                  opacity: isPlaying ? 1 : 0.6,
                  transition: 'opacity 0.6s ease',
                }}
              />

              {/* Gradient border frame */}
              <div
                className="relative rounded-2xl p-[1.5px]"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent) / 0.45), hsl(var(--primary) / 0.2) 45%, hsl(var(--accent) / 0.45))`,
                }}
              >
                <div
                  ref={playerRef}
                  className="relative rounded-2xl overflow-hidden group"
                  style={{ background: 'hsl(0 0% 3%)' }}
                  onMouseMove={revealControls}
                  onMouseEnter={revealControls}
                  onMouseLeave={() => {
                    if (videoRef.current && !videoRef.current.paused) setShowControls(false);
                  }}
                >
                  {/* Video */}
                  <video
                    ref={videoRef}
                    className="w-full aspect-video object-cover block"
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

                  {/* Cinematic vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at center, transparent 55%, hsl(0 0% 0% / 0.35) 100%)`,
                    }}
                  />

                  {/* Poster overlay tint (before first play) */}
                  <AnimatePresence>
                    {!hasStarted && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(180deg, hsl(0 0% 0% / 0.35) 0%, hsl(0 0% 0% / 0.15) 45%, hsl(0 0% 0% / 0.6) 100%)`,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Corner brackets */}
                  {(['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'] as const).map(
                    (pos, i) => (
                      <div
                        key={pos}
                        className={`absolute ${pos} w-5 h-5 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-70`}
                        style={{
                          borderTop: i < 2 ? '1.5px solid hsl(var(--accent))' : 'none',
                          borderBottom: i >= 2 ? '1.5px solid hsl(var(--accent))' : 'none',
                          borderLeft: i % 2 === 0 ? '1.5px solid hsl(var(--accent))' : 'none',
                          borderRight: i % 2 === 1 ? '1.5px solid hsl(var(--accent))' : 'none',
                          borderRadius: '3px',
                        }}
                      />
                    )
                  )}

                  {/* Top badge bar */}
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-5 pointer-events-none">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                      style={{
                        background: 'hsl(0 0% 0% / 0.45)',
                        border: '1px solid hsl(var(--accent) / 0.25)',
                      }}
                    >
                      {isPlaying ? (
                        <span className="flex items-end gap-[2px] h-3">
                          {[0, 1, 2].map((bar) => (
                            <motion.span
                              key={bar}
                              className="w-[2px] rounded-full"
                              style={{ background: 'hsl(var(--accent))' }}
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
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'hsl(var(--accent))' }}
                        />
                      )}
                      <span
                        className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em]"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        {isPlaying ? 'Now Playing' : 'Personal Intro'}
                      </span>
                    </div>

                    <div
                      className="px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] sm:text-[11px] font-mono"
                      style={{
                        background: 'hsl(0 0% 0% / 0.45)',
                        border: '1px solid hsl(var(--border) / 0.6)',
                        color: 'hsl(var(--muted-foreground))',
                      }}
                    >
                      {duration > 0 ? formatTime(duration) : INTRO_VIDEO.duration}
                    </div>
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
                          onClick={togglePlay}
                          aria-label={hasStarted ? 'Resume intro video' : 'Play intro video'}
                          className="relative flex items-center justify-center rounded-full"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Pulsing rings */}
                          {[0, 1].map((ring) => (
                            <motion.span
                              key={ring}
                              className="absolute rounded-full"
                              style={{
                                width: '100%',
                                height: '100%',
                                border: '1.5px solid hsl(var(--accent) / 0.5)',
                              }}
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
                            className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full backdrop-blur-sm"
                            style={{
                              background:
                                'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                              boxShadow: '0 12px 40px hsl(var(--accent) / 0.35)',
                            }}
                          >
                            <Play
                              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 ml-0.5"
                              style={{ color: 'hsl(var(--background))' }}
                              fill="currentColor"
                            />
                          </span>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hint text before first play */}
                  <AnimatePresence>
                    {!hasStarted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute left-0 right-0 bottom-16 sm:bottom-20 text-center pointer-events-none px-6"
                      >
                        <p
                          className="text-xs sm:text-sm font-mono tracking-wide"
                          style={{ color: 'hsl(var(--foreground) / 0.85)' }}
                        >
                          Press play — sound on 🔊
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ===== CONTROLS BAR ===== */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: showControls || !isPlaying ? 1 : 0,
                      y: showControls || !isPlaying ? 0 : 12,
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pt-10 pb-3.5 sm:pb-4"
                    style={{
                      background:
                        'linear-gradient(to top, hsl(0 0% 0% / 0.85), hsl(0 0% 0% / 0.35) 55%, transparent)',
                    }}
                  >
                    {/* Progress bar */}
                    <div
                      ref={progressRef}
                      onPointerDown={(e) => {
                        setIsScrubbing(true);
                        seekToClientX(e.clientX);
                      }}
                      className="relative h-4 flex items-center mb-2.5"
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
                        className="w-full rounded-full overflow-hidden transition-all duration-200"
                        style={{
                          height: isScrubbing ? '6px' : '4px',
                          background: 'hsl(var(--foreground) / 0.18)',
                        }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${progressPercent}%`,
                            background:
                              'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))',
                          }}
                        />
                      </div>

                      {/* Scrub handle */}
                      <span
                        className="absolute rounded-full transition-all duration-200 pointer-events-none"
                        style={{
                          left: `${progressPercent}%`,
                          transform: 'translateX(-50%)',
                          width: isScrubbing ? '13px' : '10px',
                          height: isScrubbing ? '13px' : '10px',
                          background: 'hsl(var(--accent))',
                          boxShadow: '0 0 12px hsl(var(--accent) / 0.7)',
                          opacity: isScrubbing || showControls ? 1 : 0,
                        }}
                      />
                    </div>

                    {/* Buttons row */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 hover:bg-white/10"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" fill="currentColor" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                        )}
                      </button>

                      <button
                        onClick={restart}
                        aria-label="Restart video"
                        className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 hover:bg-white/10"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 hover:bg-white/10"
                        style={{ color: isMuted ? 'hsl(var(--accent))' : 'hsl(var(--foreground))' }}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>

                      <span
                        className="text-[11px] sm:text-xs font-mono tabular-nums"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {formatTime(currentTime)}
                        <span style={{ color: 'hsl(var(--muted-foreground) / 0.5)' }}>
                          {' / '}
                          {formatTime(duration)}
                        </span>
                      </span>

                      <div className="flex-1" />

                      <button
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                        className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 hover:bg-white/10"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="w-4 h-4" />
                        ) : (
                          <Maximize2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full hidden sm:block"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                  opacity: 0.75,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full hidden sm:block"
                style={{ background: 'hsl(var(--accent))', opacity: 0.45 }}
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </motion.div>

            {/* ---------- CHAPTERS / VALUE PROPS ---------- */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              {INTRO_VIDEO.chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.45 + index * 0.12 }}
                  whileHover={{ x: 4 }}
                  className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-300"
                  style={{
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.3)';
                    e.currentTarget.style.boxShadow = '0 18px 45px hsl(var(--accent) / 0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Hover sheen */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(120deg, hsl(var(--accent) / 0.05), transparent 60%)`,
                    }}
                  />

                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(180deg, hsl(var(--accent)), hsl(var(--primary)))`,
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: 'hsl(var(--accent) / 0.08)',
                        border: '1px solid hsl(var(--accent) / 0.15)',
                      }}
                    >
                      <chapter.icon className="w-5 h-5" style={{ color: 'hsl(var(--accent))' }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h3
                          className="text-base sm:text-lg font-bold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          {chapter.label}
                        </h3>
                        <span
                          className="text-[10px] font-mono opacity-40"
                          style={{ color: 'hsl(var(--accent))' }}
                        >
                          0{index + 1}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Highlights + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent) / 0.06), hsl(var(--primary) / 0.05))`,
                  border: '1px solid hsl(var(--accent) / 0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
                  <span
                    className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em]"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    What You Get
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {INTRO_VIDEO.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-full"
                      style={{
                        background: 'hsl(var(--accent) / 0.07)',
                        color: 'hsl(var(--accent))',
                        border: '1px solid hsl(var(--accent) / 0.15)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                    color: 'hsl(var(--background))',
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
        }}
      />
    </section>
  );
};

export default IntroVideoSection;
