'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Server,
  Cpu,
  FastForward,
  Terminal,
  Activity,
  Network,
  Gauge,
  Radio,
} from 'lucide-react';

/* ============================================================
   BOOT SEQUENCE — "ABDULLAH.SYSTEM COMING ONLINE"
   Timeline (scaled to `duration`, baseline 4000ms):
   0.0–0.5   SYSTEM INITIALIZATION
   0.5–1.5   NETWORK + SECURITY
   1.5–2.5   BACKEND + DATABASE + SERVICES
   2.5–3.3   SYSTEM SYNCHRONIZATION (cinematic scan @ 2.8s)
   3.3–3.7   100% / SYSTEM ONLINE
   3.7–4.0   IDENTITY REVEAL -> CINEMATIC COLLAPSE
   ============================================================ */

interface BootSequenceProps {
  duration?: number;
  onComplete?: () => void;
  forceReplay?: boolean;
}

type Category = 'SYSTEM' | 'NETWORK' | 'SECURITY' | 'BACKEND' | 'DATABASE' | 'FRONTEND';
type LineMode = 'head' | 'type' | 'instant' | 'stream' | 'bar' | 'status';

interface LogLine {
  at: number;
  cat: Category;
  mode: LineMode;
  text?: string;
  label?: string;
  dur?: number;
  state?: string;
}

const CAT_COLOR: Record<Category, string> = {
  SYSTEM: '#e6f6f6',
  NETWORK: '#4dd0d0',
  SECURITY: '#f2c17b',
  BACKEND: '#7fdede',
  DATABASE: '#5ee0c8',
  FRONTEND: '#a8ecf2',
};

const CAT_BG: Record<Category, string> = {
  SYSTEM: 'rgba(230,246,246,0.10)',
  NETWORK: 'rgba(77,208,208,0.12)',
  SECURITY: 'rgba(242,193,123,0.12)',
  BACKEND: 'rgba(127,222,222,0.10)',
  DATABASE: 'rgba(94,224,200,0.10)',
  FRONTEND: 'rgba(168,236,242,0.10)',
};

/* ------------------------- TERMINAL SCRIPT ------------------------- */
const LOG_LINES: LogLine[] = [
  { at: 80, cat: 'SYSTEM', mode: 'head', text: 'BOOT_SEQUENCE_INIT' },
  { at: 140, cat: 'SYSTEM', mode: 'type', text: 'Loading kernel interface...' },
  { at: 215, cat: 'SYSTEM', mode: 'instant', text: 'CPU topology detected ........ 08 CORES' },
  { at: 290, cat: 'SYSTEM', mode: 'instant', text: 'Memory subsystem ............. 16 GB' },
  { at: 360, cat: 'SYSTEM', mode: 'instant', text: 'Scheduler / cgroups .......... MOUNTED' },
  { at: 430, cat: 'NETWORK', mode: 'instant', text: 'Network interface ............ ETH0' },
  { at: 490, cat: 'NETWORK', mode: 'stream', text: 'eth0 inet 10.0.0.24/24  gw 10.0.0.1' },
  { at: 550, cat: 'NETWORK', mode: 'instant', text: 'IPv4 stack ................... READY' },
  { at: 605, cat: 'NETWORK', mode: 'instant', text: 'IPv6 stack ................... READY' },
  { at: 660, cat: 'NETWORK', mode: 'instant', text: 'TCP subsystem ................ READY' },
  { at: 715, cat: 'NETWORK', mode: 'bar', label: 'NETWORK_SCAN', dur: 460 },
  { at: 780, cat: 'NETWORK', mode: 'instant', text: 'DNS resolver ................. READY' },
  { at: 840, cat: 'NETWORK', mode: 'instant', text: 'HTTP/HTTPS layer ............. READY' },
  { at: 900, cat: 'SECURITY', mode: 'type', text: 'Negotiating TLS 1.3 · AES-256-GCM' },
  { at: 990, cat: 'SECURITY', mode: 'status', label: 'FIREWALL RULESET', state: 'SCANNING' },
  { at: 1070, cat: 'SECURITY', mode: 'instant', text: 'Authentication subsystem ..... READY' },
  { at: 1140, cat: 'SECURITY', mode: 'bar', label: 'SECURITY_CORE', dur: 520 },
  { at: 1215, cat: 'SECURITY', mode: 'instant', text: 'Authorization policies ....... LOADED' },
  { at: 1290, cat: 'BACKEND', mode: 'head', text: 'SERVICE_MESH_BRINGUP' },
  { at: 1355, cat: 'BACKEND', mode: 'instant', text: 'API gateway .................. READY' },
  { at: 1420, cat: 'BACKEND', mode: 'stream', text: 'svc/auth  svc/user  svc/mail  svc/jobs  [4/4]' },
  { at: 1500, cat: 'BACKEND', mode: 'bar', label: 'API_INIT', dur: 480 },
  { at: 1580, cat: 'BACKEND', mode: 'instant', text: 'Worker pool .................. 12 THREADS' },
  { at: 1655, cat: 'BACKEND', mode: 'instant', text: 'Message queue ................ DRAINED' },
  { at: 1730, cat: 'DATABASE', mode: 'type', text: 'Opening connection pool...' },
  { at: 1830, cat: 'DATABASE', mode: 'instant', text: 'Database connection .......... READY' },
  { at: 1900, cat: 'DATABASE', mode: 'bar', label: 'DATABASE', dur: 500 },
  { at: 1975, cat: 'DATABASE', mode: 'stream', text: 'migrations 0042/0042  ·  replica lag 0ms' },
  { at: 2055, cat: 'DATABASE', mode: 'instant', text: 'Cache layer (LRU) ............ WARM' },
  { at: 2130, cat: 'FRONTEND', mode: 'head', text: 'RENDER_PIPELINE' },
  { at: 2195, cat: 'FRONTEND', mode: 'instant', text: 'Edge cache ................... PRIMED' },
  { at: 2260, cat: 'FRONTEND', mode: 'instant', text: 'Static assets ................ COMPILED' },
  { at: 2330, cat: 'FRONTEND', mode: 'bar', label: 'FRONTEND', dur: 420 },
  { at: 2410, cat: 'SYSTEM', mode: 'stream', text: 'health/live 200  health/ready 200  4ms' },
  { at: 2490, cat: 'SYSTEM', mode: 'head', text: 'SYSTEM_SYNCHRONIZATION' },
  { at: 2560, cat: 'SECURITY', mode: 'status', label: 'SECURITY LAYER', state: 'VALIDATING' },
  { at: 2640, cat: 'SYSTEM', mode: 'instant', text: 'Telemetry bus ................ STREAMING' },
  { at: 2720, cat: 'SYSTEM', mode: 'bar', label: 'SYNC_ALL_NODES', dur: 520 },
  { at: 2810, cat: 'NETWORK', mode: 'stream', text: 'route sync  10.0.0.0/24 -> 192.168.1.1' },
  { at: 2890, cat: 'SECURITY', mode: 'status', label: 'SECURITY LAYER', state: 'SECURED' },
  { at: 2970, cat: 'BACKEND', mode: 'instant', text: 'Integrity checksum ........... VERIFIED' },
  { at: 3050, cat: 'SYSTEM', mode: 'instant', text: 'All subsystems ............... NOMINAL' },
  { at: 3140, cat: 'SYSTEM', mode: 'type', text: 'Committing runtime state...' },
  { at: 3260, cat: 'SYSTEM', mode: 'head', text: 'SYSTEM ONLINE' },
];

/* ------------------------- SECURITY CORE ------------------------- */
const SECURITY_ITEMS: { label: string; at: number }[] = [
  { label: 'FIREWALL', at: 900 },
  { label: 'AUTHENTICATION', at: 1080 },
  { label: 'AUTHORIZATION', at: 1260 },
  { label: 'TLS / TRANSPORT', at: 1460 },
  { label: 'API VALIDATION', at: 1720 },
  { label: 'DATABASE ACL', at: 1980 },
];

/* ------------------------- NETWORK TOPOLOGY ------------------------- */
interface NodeDef {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  at: number; // progress % at which it starts initializing
  cat: Category;
}

const NODES: NodeDef[] = [
  { id: 'client', label: 'CLIENT', x: 62, y: 30, w: 92, at: 12, cat: 'FRONTEND' },
  { id: 'internet', label: 'INTERNET', x: 196, y: 30, w: 104, at: 16, cat: 'NETWORK' },
  { id: 'edge', label: 'EDGE ROUTER', x: 196, y: 100, w: 120, at: 24, cat: 'NETWORK' },
  { id: 'firewall', label: 'FIREWALL', x: 196, y: 170, w: 120, at: 38, cat: 'SECURITY' },
  { id: 'auth', label: 'AUTH', x: 62, y: 240, w: 92, at: 46, cat: 'SECURITY' },
  { id: 'gateway', label: 'API GATEWAY', x: 196, y: 240, w: 128, at: 54, cat: 'BACKEND' },
  { id: 'services', label: 'SERVICES', x: 196, y: 310, w: 120, at: 64, cat: 'BACKEND' },
  { id: 'cache', label: 'CACHE', x: 62, y: 310, w: 92, at: 72, cat: 'BACKEND' },
  { id: 'queue', label: 'QUEUE', x: 62, y: 380, w: 92, at: 78, cat: 'BACKEND' },
  { id: 'database', label: 'DATABASE', x: 196, y: 380, w: 120, at: 86, cat: 'DATABASE' },
];

const NODE_H = 26;

interface LinkDef {
  from: string;
  to: string;
  at: number;
}

const LINKS: LinkDef[] = [
  { from: 'client', to: 'internet', at: 16 },
  { from: 'internet', to: 'edge', at: 22 },
  { from: 'edge', to: 'firewall', at: 34 },
  { from: 'firewall', to: 'gateway', at: 50 },
  { from: 'auth', to: 'gateway', at: 52 },
  { from: 'gateway', to: 'services', at: 62 },
  { from: 'services', to: 'cache', at: 70 },
  { from: 'services', to: 'queue', at: 76 },
  { from: 'services', to: 'database', at: 84 },
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

/* Anchor points so lines stop at node edges */
function linkPoints(a: NodeDef, b: NodeDef) {
  let x1 = a.x;
  let y1 = a.y;
  let x2 = b.x;
  let y2 = b.y;

  if (Math.abs(a.y - b.y) > 2) {
    y1 = a.y + (b.y > a.y ? NODE_H / 2 : -NODE_H / 2);
    y2 = b.y + (b.y > a.y ? -NODE_H / 2 : NODE_H / 2);
  }
  if (Math.abs(a.y - b.y) <= 2) {
    x1 = a.x + (b.x > a.x ? a.w / 2 : -a.w / 2);
    x2 = b.x + (b.x > a.x ? -b.w / 2 : b.w / 2);
  }
  return { x1, y1, x2, y2 };
}

/* deterministic pseudo-random for telemetry */
const rnd = (seed: number) => {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

const fmtStamp = (ms: number) => `00:${(ms / 1000).toFixed(2).padStart(5, '0')}`;

export default function BootSequence({
  duration = 4000,
  onComplete,
  forceReplay = false,
}: BootSequenceProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [outro, setOutro] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const finishedRef = useRef(false);
  const endTimerRef = useRef<NodeJS.Timeout | null>(null);

  /* timeline scale (baseline authored at 4000ms) */
  const S = duration / 4000;
  const T = useCallback((ms: number) => ms * S, [S]);

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    stopLoop();
    try {
      localStorage.setItem('abdullah-portfolio-boot-seen', 'true');
    } catch {
      /* storage unavailable */
    }
    setOutro(true);
    if (endTimerRef.current) clearTimeout(endTimerRef.current);
    endTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 320);
  }, [onComplete, stopLoop]);

  const start = useCallback(() => {
    finishedRef.current = false;
    setOutro(false);
    setElapsed(0);
    setIsVisible(true);
    setShowSkip(false);
    setTimeout(() => setShowSkip(true), 260);

    startRef.current = performance.now();
    stopLoop();

    let lastPush = 0;
    const loop = (now: number) => {
      const e = now - startRef.current;
      // Throttle React state pushes to ~30fps; CSS layers keep 60fps
      if (e - lastPush >= 32) {
        lastPush = e;
        setElapsed(e);
      }
      if (e >= duration) {
        setElapsed(duration);
        finish();
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [duration, finish, stopLoop]);

  const handleSkip = useCallback(() => {
    finish();
  }, [finish]);

  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const replay = () => start();
    window.addEventListener('trigger-boot-sequence', replay);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
    } else {
      start();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSkip();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('trigger-boot-sequence', replay);
      window.removeEventListener('keydown', onKey);
      stopLoop();
      if (endTimerRef.current) clearTimeout(endTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* lock scroll while the overlay is up */
  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isVisible]);

  /* ---------------- derived timeline values ---------------- */
  const progress = useMemo(() => {
    const p = Math.min(1, elapsed / T(3400));
    // slight ease-out so the last percent lands crisply
    const eased = 1 - Math.pow(1 - p, 1.35);
    return Math.min(100, Math.round(eased * 100));
  }, [elapsed, T]);

  const online = progress >= 100;
  const reveal = elapsed >= T(3660);
  const critical = progress >= 95;
  const scanActive = elapsed >= T(2800) && elapsed < T(2800) + 820;

  const tick = Math.floor(elapsed / 110);
  const telemetry = useMemo(() => {
    const load = Math.min(1, elapsed / T(3400));
    return {
      mem: (4.8 + load * 2.6 + rnd(tick) * 0.4).toFixed(1),
      packets: Math.round(420 + load * 1500 + rnd(tick + 7) * 260),
      cpu: Math.round(18 + load * 26 + rnd(tick + 3) * 14),
      net: (0.4 + load * 0.9 + rnd(tick + 11) * 0.25).toFixed(1),
      latency: (2 + rnd(tick + 5) * 4).toFixed(0),
      threads: Math.round(64 + load * 180 + rnd(tick + 2) * 20),
    };
  }, [tick, elapsed, T]);

  const shownCount = useMemo(
    () => LOG_LINES.filter((l) => elapsed >= T(l.at)).length,
    [elapsed, T]
  );

  const visibleLines = useMemo(
    () => LOG_LINES.filter((l) => elapsed >= T(l.at)),
    [elapsed, T]
  );

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [visibleLines.length]);

  const stageLabel = useMemo(() => {
    if (online) return 'SYSTEM ONLINE';
    if (elapsed >= T(2490)) return 'SYSTEM SYNCHRONIZATION';
    if (elapsed >= T(1730)) return 'DATA LAYER BRINGUP';
    if (elapsed >= T(1290)) return 'SERVICE MESH BRINGUP';
    if (elapsed >= T(900)) return 'SECURITY NEGOTIATION';
    if (elapsed >= T(430)) return 'NETWORK INITIALIZATION';
    return 'SYSTEM INITIALIZATION';
  }, [elapsed, online, T]);

  const ticks = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${(rnd(i + 1) * 96 + 2).toFixed(2)}%`,
        delay: `${(rnd(i + 40) * 3.2).toFixed(2)}s`,
        dur: `${(2.6 + rnd(i + 80) * 2.4).toFixed(2)}s`,
        size: rnd(i + 120) > 0.6 ? 2 : 1,
      })),
    []
  );
  const streams = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        left: `${8 + i * 13 + rnd(i + 200) * 5}%`,
        delay: `${(rnd(i + 210) * 2.6).toFixed(2)}s`,
        dur: `${(3.2 + rnd(i + 220) * 2).toFixed(2)}s`,
      })),
    []
  );

  if (!isVisible) return null;

  /* ---------------- render helpers ---------------- */
  const renderLine = (line: LogLine, key: number) => {
    const localMs = elapsed - T(line.at);
    const color = CAT_COLOR[line.cat];

    let body: React.ReactNode = null;

    if (line.mode === 'bar') {
      const f = Math.max(0, Math.min(1, localMs / T(line.dur ?? 400)));
      const filled = Math.round(f * 16);
      body = (
        <span className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 tracking-[0.12em]" style={{ color }}>
            {line.label}
          </span>
          <span className="tracking-[-0.05em] whitespace-nowrap" style={{ color }}>
            {'█'.repeat(filled)}
            <span style={{ color: 'rgba(143,232,232,0.18)' }}>{'█'.repeat(16 - filled)}</span>
          </span>
          <span className="shrink-0 tabular-nums" style={{ color: f >= 1 ? color : '#8fe8e880' }}>
            {Math.round(f * 100)}%
          </span>
        </span>
      );
    } else if (line.mode === 'status') {
      const st = line.state ?? '';
      const stColor = st === 'SECURED' ? '#4dd0d0' : '#f2c17b';
      body = (
        <span className="flex items-center gap-2 min-w-0">
          <span className="truncate" style={{ color: '#8fe8e8cc' }}>
            {line.label}
          </span>
          <span className="flex-1 border-b border-dotted border-[#4dd0d0]/20 translate-y-[-3px] min-w-[10px]" />
          <span className="shrink-0 font-bold tracking-[0.14em]" style={{ color: stColor }}>
            {st}
          </span>
        </span>
      );
    } else if (line.mode === 'head') {
      body = (
        <span
          className="font-bold tracking-[0.22em] text-[11px] sm:text-xs"
          style={{ color: line.text === 'SYSTEM ONLINE' ? '#ffffff' : color }}
        >
          {line.text}
        </span>
      );
    } else if (line.mode === 'type') {
      const chars = Math.max(0, Math.floor(localMs / 11));
      const txt = (line.text ?? '').slice(0, chars);
      const done = chars >= (line.text ?? '').length;
      body = (
        <span style={{ color: '#cfeeee' }}>
          {txt}
          {!done && <span className="boot-caret-inline">▌</span>}
        </span>
      );
    } else if (line.mode === 'stream') {
      body = (
        <span className="boot-line-stream truncate" style={{ color: `${color}cc` }}>
          {line.text}
        </span>
      );
    } else {
      body = <span style={{ color: '#bfe9e9' }}>{line.text}</span>;
    }

    return (
      <motion.div
        key={key}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        className="flex items-start gap-2 leading-[1.45]"
      >
        <span className="shrink-0 text-[9px] sm:text-[10px] text-[#8fe8e8]/30 pt-[2px] tabular-nums hidden sm:inline">
          [{fmtStamp(line.at)}]
        </span>
        <span
          className="shrink-0 text-[8px] sm:text-[9px] font-bold tracking-[0.1em] px-1 py-[1px] rounded-[2px] mt-[1px]"
          style={{ color, background: CAT_BG[line.cat] }}
        >
          {line.cat}
        </span>
        <span className="min-w-0 flex-1 text-[10px] sm:text-[11.5px]">{body}</span>
      </motion.div>
    );
  };

  const nodeStatus = (n: NodeDef) => {
    if (progress < n.at) return 'OFFLINE';
    if (progress < n.at + 7) return 'INIT';
    return 'ONLINE';
  };

  return (
    <AnimatePresence>
      <motion.div
        key="boot"
        initial={{ opacity: 1 }}
        animate={{
          opacity: outro ? 0 : 1,
          scale: outro ? 1.05 : 1,
          filter: outro ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: outro ? 0.32 : 0.2, ease: [0.65, 0, 0.35, 1] }}
        className={`boot-root fixed inset-0 z-[100] overflow-hidden bg-[#03070a] text-[#8fe8e8] font-mono select-none ${
          critical ? 'boot-critical' : ''
        }`}
        style={{ willChange: 'opacity, transform, filter' }}
      >
        {/* ---------- LAYER 2 : GRID ---------- */}
        <div
          className={`boot-grid absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            scanActive ? 'opacity-100' : 'opacity-40'
          }`}
        />
        <div className="boot-grid-major absolute inset-0 pointer-events-none opacity-30" />

        {/* ---------- LAYER 3 : RADIAL GLOW ---------- */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(77,208,208,0.13) 0%, transparent 70%)',
            opacity: 0.5 + (progress / 100) * 0.5,
          }}
        />
        <div className="boot-vignette absolute inset-0 pointer-events-none" />

        {/* ---------- LAYER 8a : DATA STREAMS ---------- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.55]">
          {streams.map((s, i) => (
            <span
              key={i}
              className="boot-stream"
              style={{ left: s.left, animationDelay: s.delay, animationDuration: s.dur }}
            />
          ))}
          {particles.map((p, i) => (
            <span
              key={`p${i}`}
              className="boot-particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.dur,
              }}
            />
          ))}
        </div>

        {/* ---------- CONTENT ---------- */}
        <div
          className={`relative z-20 h-full flex flex-col transition-all duration-300 ${
            outro ? 'opacity-0 scale-[0.97] blur-[3px]' : 'opacity-100'
          }`}
        >
          {/* ===== TOP TELEMETRY BAR ===== */}
          <header className="shrink-0 flex items-center justify-between gap-3 px-3 sm:px-6 h-11 border-b border-[#4dd0d0]/20 bg-[#050a0c]/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4dd0d0] opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4dd0d0]" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#4dd0d0] truncate">
                ABDULLAH.SYSTEM
              </span>
              <span className="hidden md:inline text-[9px] tracking-[0.2em] text-[#8fe8e8]/35">
                / RUNTIME v4.8.0
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 text-[9px] sm:text-[10px] tracking-[0.12em] text-[#8fe8e8]/55">
              <span className="hidden xs:flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-[#4dd0d0]/70" />
                CPU <span className="text-[#4dd0d0] tabular-nums">{telemetry.cpu}%</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-[#4dd0d0]/70" />
                MEM{' '}
                <span className="text-[#4dd0d0] tabular-nums">{telemetry.mem} / 16 GB</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-[#4dd0d0]/70" />
                PACKETS{' '}
                <span className="text-[#4dd0d0] tabular-nums">
                  {telemetry.packets.toLocaleString()}/s
                </span>
              </span>
              <span className="hidden lg:flex items-center gap-1.5">
                <Network className="w-3 h-3 text-[#4dd0d0]/70" />
                NET <span className="text-[#4dd0d0] tabular-nums">{telemetry.net} Gbps</span>
              </span>
              <span className="hidden lg:flex items-center gap-1.5">
                <Gauge className="w-3 h-3 text-[#4dd0d0]/70" />
                LATENCY <span className="text-[#4dd0d0] tabular-nums">{telemetry.latency}ms</span>
              </span>
              <span
                className={`px-2 py-[2px] rounded-[2px] border text-[8px] sm:text-[9px] font-bold tracking-[0.14em] transition-colors duration-300 ${
                  elapsed >= T(1980)
                    ? 'border-[#4dd0d0]/40 bg-[#4dd0d0]/10 text-[#4dd0d0]'
                    : 'border-[#f2c17b]/40 bg-[#f2c17b]/10 text-[#f2c17b]'
                }`}
              >
                {elapsed >= T(1980) ? 'SECURITY_MODULE READY' : 'SECURITY_MODULE INIT'}
              </span>
            </div>
          </header>

          {/* ===== MAIN GRID ===== */}
          <main className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 px-3 sm:px-6 py-2 sm:py-4">
            {/* ---------- TERMINAL ---------- */}
            <section className="order-2 lg:order-1 lg:col-span-4 min-h-[180px] lg:min-h-0 flex">
              <div className="boot-panel relative flex flex-col w-full min-h-0">
                <div className="flex items-center justify-between px-3 h-8 border-b border-[#4dd0d0]/15 shrink-0">
                  <span className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] text-[#4dd0d0] font-bold">
                    <Terminal className="w-3 h-3" />
                    DIAGNOSTICS.SH
                  </span>
                  <span className="text-[9px] tabular-nums text-[#8fe8e8]/40 tracking-[0.1em]">
                    PID 1042 · {String(shownCount).padStart(2, '0')}/{LOG_LINES.length}
                  </span>
                </div>

                <div
                  ref={logContainerRef}
                  className="flex-1 min-h-0 overflow-y-auto px-3 py-2 flex flex-col justify-start gap-[3px] [scrollbar-width:thin] [scrollbar-color:rgba(77,208,208,0.2)_transparent]"
                >
                  {visibleLines.map((l) => renderLine(l, LOG_LINES.indexOf(l)))}
                  <div className="flex items-center gap-1.5 pt-1 text-[10px] sm:text-[11.5px]">
                    <span className="text-[#f2c17b] font-bold">$</span>
                    <span className="inline-block w-[7px] h-[13px] bg-[#4dd0d0] boot-caret-blink" />
                  </div>
                </div>

                <div className="shrink-0 px-3 h-7 flex items-center gap-2 border-t border-[#4dd0d0]/15 text-[9px] tracking-[0.12em] text-[#8fe8e8]/40">
                  <span className="text-[#4dd0d0]">THREADS</span>
                  <span className="tabular-nums">{telemetry.threads}</span>
                  <span className="text-[#4dd0d0]/25">|</span>
                  <span className="text-[#4dd0d0]">STAGE</span>
                  <span className="truncate">{stageLabel}</span>
                </div>
              </div>
            </section>

            {/* ---------- CENTRAL SYSTEM STATUS ---------- */}
            <section className="order-1 lg:order-2 lg:col-span-4 flex flex-col items-center justify-center min-h-0 py-1">
              <div className="relative w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] shrink-0">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  {/* tick ring */}
                  <g>
                    {ticks.map((i) => {
                      const a = (i / 60) * Math.PI * 2;
                      const active = (i / 60) * 100 <= progress;
                      const r1 = 96;
                      const r2 = i % 5 === 0 ? 87 : 91;
                      return (
                        <line
                          key={i}
                          x1={100 + Math.cos(a) * r1}
                          y1={100 + Math.sin(a) * r1}
                          x2={100 + Math.cos(a) * r2}
                          y2={100 + Math.sin(a) * r2}
                          stroke={active ? '#4dd0d0' : '#122a2e'}
                          strokeWidth={i % 5 === 0 ? 1.4 : 0.8}
                          opacity={active ? 0.85 : 1}
                        />
                      );
                    })}
                  </g>
                  {/* base ring */}
                  <circle cx="100" cy="100" r="74" fill="none" stroke="#0e2427" strokeWidth="3" />
                  {/* progress ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="74"
                    fill="none"
                    stroke={online ? '#ffffff' : '#4dd0d0'}
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    style={{
                      transition: 'stroke-dashoffset 0.12s linear, stroke 0.3s ease',
                      filter: 'drop-shadow(0 0 6px rgba(77,208,208,0.55))',
                    }}
                  />
                  {/* rotating scanner ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="63"
                    fill="none"
                    stroke="rgba(77,208,208,0.35)"
                    strokeWidth="1"
                    strokeDasharray="14 26"
                    className="boot-ring-spin"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="55"
                    fill="none"
                    stroke="rgba(77,208,208,0.12)"
                    strokeWidth="1"
                    strokeDasharray="3 7"
                    className="boot-ring-spin-rev"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {online ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.22 }}
                      className="text-center"
                    >
                      <div className="text-[18px] sm:text-[22px] font-extrabold tracking-[0.16em] text-white boot-online-glow">
                        SYSTEM
                      </div>
                      <div className="text-[18px] sm:text-[22px] font-extrabold tracking-[0.16em] text-[#4dd0d0] boot-online-glow">
                        ONLINE
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="text-[44px] sm:text-[58px] leading-none font-extralight tracking-tight text-white tabular-nums">
                        {progress}
                        <span className="text-[18px] sm:text-[22px] text-[#4dd0d0] align-top ml-0.5">
                          %
                        </span>
                      </div>
                      <div className="mt-1.5 text-[8px] sm:text-[9px] tracking-[0.3em] text-[#4dd0d0]/70 text-center px-4">
                        {stageLabel}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* micro metrics under the dial */}
              <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-px w-full max-w-[280px] bg-[#4dd0d0]/10 border border-[#4dd0d0]/15 rounded-[3px] overflow-hidden">
                {[
                  { k: 'NODES', v: `${NODES.filter((n) => progress >= n.at + 7).length}/10` },
                  { k: 'SERVICES', v: `${Math.min(12, Math.round((progress / 100) * 12))}/12` },
                  { k: 'ERRORS', v: '0' },
                ].map((m) => (
                  <div key={m.k} className="bg-[#050a0c]/80 px-2 py-1.5 text-center">
                    <div className="text-[7.5px] tracking-[0.2em] text-[#8fe8e8]/40">{m.k}</div>
                    <div className="text-[11px] tabular-nums text-[#4dd0d0] font-bold">{m.v}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------- NETWORK + SECURITY ---------- */}
            <section className="order-3 lg:col-span-4 min-h-0 flex flex-col gap-3 sm:gap-4">
              {/* NETWORK TOPOLOGY */}
              <div className="boot-panel relative flex-1 min-h-0 hidden sm:flex flex-col">
                <div className="flex items-center justify-between px-3 h-8 border-b border-[#4dd0d0]/15 shrink-0">
                  <span className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] text-[#4dd0d0] font-bold">
                    <Network className="w-3 h-3" />
                    NETWORK_TOPOLOGY
                  </span>
                  <span className="text-[9px] tracking-[0.12em] text-[#8fe8e8]/40">
                    {progress >= 84 ? 'MESH SYNCED' : progress >= 24 ? 'ROUTING' : 'DISCOVERY'}
                  </span>
                </div>

                <div className="flex-1 min-h-0 p-2">
                  <svg viewBox="0 0 320 420" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* links */}
                    {LINKS.map((l, i) => {
                      const a = nodeById(l.from);
                      const b = nodeById(l.to);
                      const { x1, y1, x2, y2 } = linkPoints(a, b);
                      const draw = Math.max(0, Math.min(1, (progress - l.at) / 7));
                      const activeLink = draw >= 1;
                      return (
                        <g key={i}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#0f2b2f"
                            strokeWidth="1"
                          />
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#4dd0d0"
                            strokeWidth="1.2"
                            pathLength={1}
                            strokeDasharray="1"
                            strokeDashoffset={1 - draw}
                            opacity={0.55 + draw * 0.35}
                            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                          />
                          {activeLink && (
                            <line
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#bffbff"
                              strokeWidth="1.6"
                              className="boot-link-flow"
                              opacity={0.7}
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* nodes */}
                    {NODES.map((n) => {
                      const st = nodeStatus(n);
                      const isInit = st === 'INIT';
                      const isOn = st === 'ONLINE';
                      const scale = isInit ? 1.06 : 1;
                      const stroke = isOn ? CAT_COLOR[n.cat] : isInit ? '#f2c17b' : '#123033';
                      const labelFill = isOn ? '#ffffff' : isInit ? '#f2c17b' : '#2c5457';
                      return (
                        <g
                          key={n.id}
                          transform={`translate(${n.x} ${n.y}) scale(${scale})`}
                          style={{ transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)' }}
                        >
                          <rect
                            x={-n.w / 2}
                            y={-NODE_H / 2}
                            width={n.w}
                            height={NODE_H}
                            rx="3"
                            fill="#050d10"
                            stroke={stroke}
                            strokeWidth="1.2"
                            style={{ transition: 'stroke 0.25s ease' }}
                          />
                          {isInit && (
                            <rect
                              x={-n.w / 2}
                              y={-NODE_H / 2}
                              width={n.w}
                              height={NODE_H}
                              rx="3"
                              fill="none"
                              stroke="#4dd0d0"
                              strokeWidth="1.2"
                              className="boot-node-pulse"
                            />
                          )}
                          {isOn && (
                            <circle
                              cx={n.w / 2 - 8}
                              cy={0}
                              r="2"
                              fill={CAT_COLOR[n.cat]}
                              className="boot-node-dot"
                            />
                          )}
                          <text
                            x={-n.w / 2 + 8}
                            y="3.5"
                            fill={labelFill}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            letterSpacing="0.5"
                            style={{ transition: 'fill 0.25s ease' }}
                          >
                            {n.label}
                          </text>
                          <text
                            x={-n.w / 2}
                            y={NODE_H / 2 + 9}
                            fill={isOn ? '#4dd0d0aa' : isInit ? '#f2c17baa' : '#1d4144'}
                            fontSize="6.5"
                            fontFamily="monospace"
                            letterSpacing="1"
                          >
                            {st === 'INIT' ? 'INITIALIZING' : st}
                          </text>
                        </g>
                      );
                    })}

                    {/* final pulse through the mesh */}
                    {online && (
                      <g className="boot-mesh-pulse">
                        {LINKS.map((l, i) => {
                          const a = nodeById(l.from);
                          const b = nodeById(l.to);
                          const { x1, y1, x2, y2 } = linkPoints(a, b);
                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#ffffff"
                              strokeWidth="2"
                            />
                          );
                        })}
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* SECURITY CORE */}
              <div className="boot-panel shrink-0">
                <div className="flex items-center justify-between px-3 h-8 border-b border-[#4dd0d0]/15">
                  <span className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] text-[#4dd0d0] font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    SECURITY_CORE
                  </span>
                  <span className="text-[9px] tracking-[0.12em] text-[#8fe8e8]/40">
                    10.0.0.24 · 192.168.1.1
                  </span>
                </div>
                <div className="px-3 py-2 grid grid-cols-1 gap-[3px]">
                  {SECURITY_ITEMS.map((s) => {
                    const local = elapsed - T(s.at);
                    let state: 'STANDBY' | 'SCANNING' | 'VALIDATING' | 'ACTIVE' = 'STANDBY';
                    if (local >= 0) state = 'SCANNING';
                    if (local >= T(150)) state = 'VALIDATING';
                    if (local >= T(320)) state = 'ACTIVE';
                    const color =
                      state === 'ACTIVE'
                        ? '#4dd0d0'
                        : state === 'STANDBY'
                        ? 'rgba(143,232,232,0.22)'
                        : '#f2c17b';
                    return (
                      <div
                        key={s.label}
                        className="flex items-center gap-2 text-[9.5px] sm:text-[10.5px] tracking-[0.1em]"
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200"
                          style={{ background: color }}
                        />
                        <span
                          className="shrink-0 transition-colors duration-200"
                          style={{ color: state === 'STANDBY' ? 'rgba(143,232,232,0.3)' : '#d6f2f2' }}
                        >
                          {s.label}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#4dd0d0]/15 translate-y-[-2px]" />
                        <span
                          className="shrink-0 font-bold tabular-nums transition-colors duration-200"
                          style={{ color }}
                        >
                          {state}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </main>

          {/* ===== FOOTER ===== */}
          <footer className="shrink-0 flex items-center justify-between gap-3 px-3 sm:px-6 h-10 border-t border-[#4dd0d0]/20 bg-[#050a0c]/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3 text-[9px] tracking-[0.14em] text-[#8fe8e8]/45 min-w-0">
              <Server className="w-3 h-3 text-[#4dd0d0]/70 shrink-0" />
              <span className="truncate">
                {online ? 'RUNTIME STABLE' : 'BOOTSTRAPPING RUNTIME'}
              </span>
              <span className="text-[#4dd0d0]/25 hidden sm:inline">|</span>
              <span className="hidden sm:inline tabular-nums">
                T+{(elapsed / 1000).toFixed(2)}s
              </span>
            </div>

            {/* progress rail */}
            <div className="hidden md:block flex-1 max-w-[240px] h-[3px] bg-[#0e2427] rounded-full overflow-hidden mx-4">
              <div
                className="h-full bg-gradient-to-r from-[#2d8a8a] via-[#4dd0d0] to-[#bffbff]"
                style={{ width: `${progress}%`, transition: 'width 0.12s linear' }}
              />
            </div>

            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleSkip}
                className="flex items-center gap-2 px-3 py-1 rounded-[3px] border border-[#4dd0d0]/35 bg-[#4dd0d0]/8 hover:bg-[#4dd0d0]/20 text-[#4dd0d0] hover:text-white transition-colors text-[9px] sm:text-[10px] font-bold tracking-[0.16em] cursor-pointer shrink-0"
              >
                SKIP INTRO
                <span className="text-[8px] text-[#8fe8e8]/50">[ESC]</span>
                <FastForward className="w-3 h-3" />
              </motion.button>
            )}
          </footer>
        </div>

        {/* ---------- LAYER 7 : SCANLINES + CINEMATIC SCAN ---------- */}
        <div className="boot-scanlines absolute inset-0 z-30 pointer-events-none" />
        {scanActive && <div className="boot-scan-sweep absolute inset-x-0 z-40 pointer-events-none" />}
        {scanActive && <div className="absolute inset-0 z-30 pointer-events-none boot-scan-flash" />}

        {/* ---------- IDENTITY REVEAL (CLIMAX) ---------- */}
        <AnimatePresence>
          {reveal && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#03070a]/86 backdrop-blur-[3px] pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.6em', scale: 0.96 }}
                animate={{ opacity: 1, letterSpacing: '0.16em', scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-center px-6"
              >
                <div className="text-[10px] sm:text-xs tracking-[0.4em] text-[#4dd0d0] mb-3 boot-online-glow">
                  SYSTEM ONLINE
                </div>
                <div className="text-3xl sm:text-6xl font-extrabold text-white tracking-[0.12em]">
                  ABDULLAH JUTT
                </div>
                <div className="mt-3 h-px w-40 sm:w-64 mx-auto bg-gradient-to-r from-transparent via-[#4dd0d0] to-transparent" />
                <div className="mt-3 text-[11px] sm:text-sm tracking-[0.34em] text-[#4dd0d0] font-semibold">
                  SOFTWARE ENGINEER
                </div>
                <div className="mt-2 text-[8.5px] sm:text-[11px] tracking-[0.3em] text-[#8fe8e8]/55">
                  FULL-STACK • SYSTEMS • SECURITY
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- COLLAPSE INTO A POINT OF LIGHT ---------- */}
        {outro && (
          <div className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none">
            <span className="boot-collapse-core" />
            <span className="boot-collapse-burst" />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
