'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Mail, Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, FREELANCE_PLATFORMS, CONTACT_INFO } from '@/constants';

const SOCIALS = [
  { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
  { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/abdullah_jutt.44?igsh=dGVwODBvcnN2N3c0',
    label: 'Instagram',
  },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return false;
  return pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/*  Shared identity block (top of sidebar + mobile menu)              */
/* ------------------------------------------------------------------ */
function Identity({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div>
      <Link href="/" onClick={onNavigate} className="group flex items-center gap-4">
        <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[hsl(var(--border))] transition-colors duration-300 group-hover:border-[hsl(var(--accent)/0.6)]">
          <Image
            src="/me.jpeg"
            alt="Muhammad Abdullah"
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </span>
        <span>
          <span className="display-lg block text-[1.35rem] leading-tight text-foreground">
            Muhammad
            <br />
            Abdullah
          </span>
        </span>
      </Link>

      <p className="overline-label mt-5">
        Full-Stack Engineer <span className="text-[hsl(var(--accent))]">·</span>{' '}
        Security-Minded
      </p>

      <p className="mt-4 text-[0.84rem] leading-relaxed text-muted-foreground">
        I build production web &amp; mobile systems — and study how they break.
        Lahore, Pakistan.
      </p>

      <span className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--foreground)/0.03)] px-3.5 py-1.5">
        <span className="pulse-dot" aria-hidden />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          Available for work
        </span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav list                                                          */
/* ------------------------------------------------------------------ */
function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={onNavigate}
              data-active={isActive(pathname, item.href)}
              className="nav-item"
            >
              <span className="nav-tick" aria-hidden />
              <span className="text-[0.6rem] text-muted-foreground/50">
                {item.index}
              </span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom block: socials, CTA, freelance trust strip                 */
/* ------------------------------------------------------------------ */
function SidebarFooter({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className="icon-btn h-9 w-9"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <Link
        href="/#contact"
        onClick={onNavigate}
        className="btn btn-solid mt-5 w-full text-sm"
      >
        Start a Conversation
        <ArrowUpRight className="h-4 w-4" />
      </Link>

      {/* Freelance trust strip — secondary by design */}
      <div className="mt-6 border-t border-[hsl(var(--border))] pt-4">
        <p className="overline-label mb-2.5 text-[0.56rem]">Also hire me on</p>
        <div className="flex flex-wrap gap-x-3.5 gap-y-1.5">
          {FREELANCE_PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.66rem] text-muted-foreground transition-colors duration-300 hover:text-[hsl(var(--accent))]"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export: fixed sidebar (lg+) + top bar & overlay (mobile)     */
/* ------------------------------------------------------------------ */
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* ===== Desktop sidebar ===== */}
      <aside className="sidebar hidden lg:flex">
        <Identity />
        <div className="my-9 flex-1">
          <NavList />
        </div>
        <SidebarFooter />
      </aside>

      {/* ===== Mobile top bar ===== */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/0.88)] px-5 py-3.5 backdrop-blur-md lg:hidden">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-[hsl(var(--border))]">
            <Image
              src="/me.jpeg"
              alt="Muhammad Abdullah"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="display-lg text-base text-foreground">
            Muhammad Abdullah
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="icon-btn h-10 w-10"
        >
          {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </header>

      {/* ===== Mobile overlay menu ===== */}
      {open && (
        <div className="fixed inset-0 top-[3.85rem] z-40 overflow-y-auto bg-[hsl(var(--background))] px-6 py-8 lg:hidden">
          <NavList onNavigate={() => setOpen(false)} />
          <div className="mt-8 border-t border-[hsl(var(--border))] pt-7">
            <SidebarFooter onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
